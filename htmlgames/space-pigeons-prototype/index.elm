import Automaton (init')
import Maybe
import Text

gameWidth = 1024
gameHeight = 768
xga = { width=1024, height=768 }
ico = { width=100, height=100 }

-- Rooms
office = { bg = {xga|image="Office.jpg"} }
corridor = { bg = {xga|image="Corridor.jpg"} }
infirmary = { bg = {xga|image="Infirmary.jpg"} }

-- Doors
doors = [
    { room=office,    left=473, top= 99, width=248, height=407, targetRoom=corridor  }, -- Office Exit
    { room=corridor,  left=140, top=320, width= 96, height=120, targetRoom=office    }, -- Office Entrance
    { room=corridor,  left=770, top=320, width= 96, height=120, targetRoom=infirmary }, -- Infirmary Entrance
    { room=infirmary, left=665, top=232, width=313, height=395, targetRoom=corridor  }  -- Infirmary Exit
 ]

-- Props
props = [
    {room=office,   left=212, top=247, width= 59, height= 93, descriptions=["Some kind of display terminal.  Probably displays very useful information; if I only knew how to turn it on!"]},
    {room=office,   left=297, top=303, width= 75, height= 75, descriptions=["My predecessor."]},
    {room=office,   left=738, top=290, width=133, height=390, descriptions=["Those instruments look very unique.  Could they be part of my job here?"]},
    {room=corridor, left=301, top=437, width= 73, height= 25, descriptions=["Looks like the escape pod has already launched."]},
    {room=corridor, left=536, top=437, width= 73, height= 25, descriptions=["The escape pod hatch was left open.  How strange!"]}
 ]

-- Game state
idle = {walkTo=Nothing,
        showDescription=Nothing,
        changeToRoom=Nothing}
items = [
    { icon = "ScrewDriver_1_inventory.png" }
 ]

startState = {
    room = office,
    showingInventory = True,
    activity = idle,
    dialog = Nothing,
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
updateGame input oldState =
    let clicked = input.mouse.clicked
        mouseX = input.mouse.x
        mouseY = input.mouse.y
        inThisRoom obj = obj.room == oldState.room
        inRectInThisRoom x y obj = inThisRoom obj && inRect x y obj
        clickedOnInThisRoom obj = inRectInThisRoom mouseX mouseY obj
        filterClickedOn objs = if clicked then filter clickedOnInThisRoom objs else []
        clickedDoorActivity door = {idle | changeToRoom <- Just door.targetRoom }
        clickedDoorActivities = map clickedDoorActivity (filterClickedOn doors)
        clickedPropActivity prop = {idle | showDescription <- headMaybe prop.descriptions}
        clickedPropActivities = map clickedPropActivity (filterClickedOn props)
        defaultActivity = if clicked then idle else oldState.activity
        activity = head (clickedPropActivities ++ clickedDoorActivities ++ [defaultActivity])
        doChangeRoom oldState = maybe oldState (\room -> {oldState | room <- room, activity <- idle}) activity.changeToRoom
        doShowDescription oldState = {oldState | dialog <- activity.showDescription}
        rememberLastClick oldState = if clicked then { oldState | lastClick <- activity } else oldState
        rememberActivity oldState = { oldState | activity <- activity }
        newState = (doChangeRoom . doShowDescription . rememberActivity . rememberLastClick) oldState
        room = newState.room
        bg = room.bg
        t = input.t
        bgImage = image bg.width bg.height ("images/bg/" ++ bg.image)
        debugView = flow down (map (plainText . show) [input,oldState,newState])
        dialogView = width gameWidth (centeredText (Text.color white (toText (fromMaybe "(no dialog)" newState.dialog))))
        view = flow down [layers [bgImage, dialogView], debugView]
    in (view,newState)

mkinput t clicked (mouseX,mouseY) = let r = {t=t, mouse={clicked=clicked, x=mouseX, y=mouseY}} in r
input = lift3 mkinput (Time.every 0.1) Mouse.isClicked Mouse.position
gameAutomaton = init' startState updateGame
main = Automaton.run gameAutomaton input
