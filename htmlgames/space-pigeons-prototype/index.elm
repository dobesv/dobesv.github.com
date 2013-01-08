import Automaton (init')
import Maybe
import Text
import Graphics

gameWidth = 1024
gameHeight = 768
xga = { width=1024, height=768 }
ico = { width=100, height=100 }

indexBy f lst = Dict.fromList (map (\v -> let k = f v in (k,v)) lst)
indexById lst = indexBy .id lst


groupBy f lst =
    let addToGroup v dict =
           let k = f v
           in Dict.insert k v:(Dict.findWithDefault [] k dict)
    in  List.foldr addToGroup Dict.empty lst
--
--groupByRoom lst = groupBy .room lst

f >>> g = g . f
x |> g = g x
half x = x `div` 2

-- Screwdriver
itemList = [
    { id="screwdriver", icon="screwdriver.png" },
    { id="superphone", icon="superphone.png" }
 ]
items = indexById itemList
badItemId = { id="bad", icon="XXX.png" }

rooms =
    let roomList = [
            { id="office",    bg = {xga|image="Office.jpg"} },
            { id="corridor",  bg = {xga|image="Corridor.jpg"} },
            { id="infirmary", bg = {xga|image="Infirmary.jpg"} },
            { id="escapePod", bg = {xga|image="Escape Pod.jpg"} }
        ]

        -- Doors
        doors = [
            { room="office",    left=473, top= 99, width=248, height=407, targetRoom="corridor"  }, -- Office Exit
            { room="corridor",  left=140, top=320, width= 96, height=120, targetRoom="office"    }, -- Office Entrance
            { room="corridor",  left=770, top=320, width= 96, height=120, targetRoom="infirmary" }, -- Infirmary Entrance
            { room="infirmary", left=665, top=232, width=313, height=395, targetRoom="corridor"  }, -- Infirmary Exit
            { room="corridor",  left=305, top=469, width=118, height= 26, targetRoom="escapePod" }, -- Escape Pod Entrance
            { room="escapePod", left=294, top=139, width=199, height= 91, targetRoom="corridor"  }  -- Infirmary Exit
         ]

        -- Props
        props = [
            {room="office",   left=117, top=249, width= 59, height= 93, description="Some kind of display terminal.  Probably displays very useful information; if I only knew how to turn it on!"},
            {room="office",   left=183, top=316, width=106, height=213, description="My predecessor."},
            {room="office",   left=738, top=290, width=133, height=390, description="Those instruments look very unique.  Could they be part of my job here?"},
            {room="corridor", left=514, top=469, width=111, height= 25, description="Looks like the escape pod has already launched!"}
         ]

        -- Pickups
        pickups = [
            {room="office",   left=190, top=291, width=100, height=100, item="screwdriver", image="ScrewDriver_1_screen.png"},
            {room="office",   left=169, top=379, width=100, height=100, item="superphone",  image="phone_pocket.png"}
         ]

        aug r =
            let flt r = List.filter (.room >>> ((==) r.id))
                r1 = {r | doors = flt r doors}
                r2 = {r1 | props = flt r props}
                r3 = {r2 | pickups = flt r pickups}
            in r3
    in indexById (map aug roomList)

badRoomId = {id="", bg = {xga|image="Missing.jpg"}, doors=[], props=[], pickups=[]}

-- Game state
data Activity = Idle
              | ShowDescription {text::String, endTime::Int}
              | FadeOutTo {next::Activity, startTime::Int, endTime::Int}
              | FadeInTo {next::Activity, startTime::Int, endTime::Int}
              | ChangeToRoom String
              | PickUpItem String

startState = {
    room = "office",
    inventory = Dict.empty,
    showingInventory = True,
    activity = Idle,
    dialog = Nothing,
    fade = 0, -- 0 to 100 level of "fadedness"
    lastClick = {}
 }

inRect x y rect =
    let dx = x - rect.left
        dy = y - rect.top
    in dx >= 0 && dx < rect.width &&
       dy >= 0 && dy < rect.height
headMaybe lst = case lst of
    []  -> Nothing
    x:_ -> Just x

find p lst = case lst of
    [] -> Nothing
    x:xs -> if p x then Just x else find p xs

findRoom id = Dict.findWithDefault badRoomId id rooms
findItem id = Dict.findWithDefault badItemId id items

tryInTurn defaultValue flist =
    case flist of
        [] -> defaultValue
        f:fs -> case f () of
            Nothing -> tryInTurn defaultValue fs
            Just v -> v
maybeMap f x =
    case x of
        Just v -> Just (f v)
        Nothing -> Nothing

updateGame input oldState =
    let {t,mouse} = input
        clicked = mouse.clicked
        underMouse obj = inRect mouse.x mouse.y obj
        oldRoom = findRoom oldState.room
        pickupsNotPickedUp = filter (\p -> False == Dict.findWithDefault False p.item oldState.inventory) oldRoom.pickups
        findClickedOn objs = if clicked then find underMouse objs else Nothing
        newActivity =
            let oldActivity = oldState.activity
                fadeTime = 500
                fadeOutTo next = FadeOutTo {next=next, startTime=t, endTime=t+fadeTime}
                fadeInTo next = FadeInTo {next=next, startTime=t, endTime=t+fadeTime}
                checkFade () =
                    case oldState.activity of
                        FadeOutTo x -> Just (if x.endTime < t then x.next else oldState.activity)
                        FadeInTo x -> Just (if x.endTime < t then x.next else oldState.activity)
                        otherwise -> Nothing
                checkEnteredRoom () =
                    case oldActivity of
                        ChangeToRoom _ -> Just (fadeInTo Idle)
                        otherwise -> Nothing
                descriptionTime = 5000
                showDescription text = ShowDescription {text=text, endTime=t+descriptionTime}
                checkDoor () = maybeMap (.targetRoom >>> (fadeOutTo . ChangeToRoom)) (findClickedOn oldRoom.doors)
                checkPickup () = maybeMap (.item >>> PickUpItem) (findClickedOn pickupsNotPickedUp)
                checkProp () = maybeMap (.description >>> showDescription) (findClickedOn oldRoom.props)
                checkDescription () =
                    case oldActivity of
                        ShowDescription x -> if clicked || (x.endTime < t) then Nothing else Just oldActivity
                        otherwise -> Nothing
            in tryInTurn Idle [
                checkFade,
                checkEnteredRoom,
                checkPickup,
                checkProp,
                checkDoor,
                checkDescription
            ]
        newState = {
            room=case newActivity of
                     ChangeToRoom id -> id
                     otherwise -> oldState.room,
            inventory=case newActivity of
                          PickUpItem id -> Dict.insert id True oldState.inventory
                          otherwise -> oldState.inventory,
            activity=newActivity,
            lastClick = if clicked then mouse else input
        }
        newRoom = if newState.room == oldState.room then oldRoom else findRoom newState.room
        bg = newRoom.bg
        bgImage = image bg.width bg.height ("images/bg/" ++ bg.image)
        debugView =
            let debugTextView = show >>> toText >>> (Text.color green) >>> Text.monospace >>> Graphics.text
                views = [input,oldState,newState]
            in flow down (map debugTextView views)
        dialogView =
            let text = case newActivity of
                            ShowDescription d -> let {text} = d in text
                            otherwise -> ""
            in text |> (toText
                    >>> (Text.color (Color.rgb 220 220 220))
                    >>> (Text.height 2)
                    >>> (Text.typeface "'Trebuchet MS', Helvetica, sans-serif")
                    >>> centeredText
                    >>> (Graphics.width gameWidth)
                    >>> (Graphics.color (Color.rgba 0 0 0 0.5))
                    >>> (container gameWidth (half gameHeight) middle))

        pickupViews = map (\p -> container gameWidth gameHeight
                                     (topLeftAt (absolute p.left) (absolute p.top))
                                     (image p.width p.height ("images/props/"++p.image))) pickupsNotPickedUp
        inventoryView =
            let itemImage item = image 100 100 ("images/icon/"++item.icon)
                itemIcons = flow right (List.map (findItem >>> itemImage) (Dict.keys newState.inventory))
                itemBg = image 809 106 "images/ui/inventorybg.png"
            in container gameWidth gameHeight midBottom (layers [itemBg, itemIcons])
        applyFade elt =
            let fadeAmount {next, startTime, endTime} = (t - startTime) / (endTime - startTime)
                alpha = case newActivity of
                            FadeOutTo x -> 1.0 - (fadeAmount x)
                            FadeInTo x  -> fadeAmount x
                            ChangeToRoom _ -> 0.0 -- While changing rooms
                            otherwise -> 1.0
            in if alpha < 1.0 then opacity alpha elt else elt
        stage = layers ([bgImage] ++ pickupViews ++ [inventoryView, dialogView])
        view = Graphics.color black (flow down [applyFade stage, debugView])
    in (view,newState)

mkinput t clicked (mouseX,mouseY) = let r = {t=t, mouse={clicked=clicked, x=mouseX, y=mouseY}} in r
input = lift3 mkinput (Time.every 0.1) Mouse.isClicked Mouse.position
gameAutomaton = init' startState updateGame
main = Automaton.run gameAutomaton input
