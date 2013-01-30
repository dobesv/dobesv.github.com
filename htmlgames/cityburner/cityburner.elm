import Automaton (init')
import JavaScript
import JavaScript.Experimental

foreign import jsevent "provideRobotAnimation"
    (castElementToJSElement (spacer 0 0))
    jsRobotAnimation :: Signal JSElement

robotAnimation = lift (castJSElementToElement 262 373) jsRobotAnimation

cropImage url origWidth origHeight left top width height =
  collage width height
    [sprite url origWidth origHeight (origWidth `div` 2 - left, origHeight `div` 2 - top)]

crop element left top width height =
  let eltWidth = widthOf element
      eltHeight = heightOf element
  in collage width height
    [toForm (eltWidth `div` 2 - left, eltHeight `div` 2 - top) element]

bldgSheet = {width=1800,height=400,src="images/CityBurner_Buildings_V2.png"}
bldg left top width height hitMask =
  {width = width, height = height,
   image = cropImage bldgSheet.src bldgSheet.width bldgSheet.height left top width height,
   hitMask = move (0-left) (0-top) $ filled green hitMask}

b1=(bldg 0 249 141 151 $
      polygon [(3,398), (4,325), (13,320), (13,293), (96,294), (94,308), (112,320),
               (112,340), (138,341), (137,399)] (0,0))
b2=(bldg 178 61 86 339 $
        polygon [(180,400), (180,193), (190,189), (190,149), (203,139), (203,118),
                 (240,118), (241,149), (260,150), (262,194), (262,400)] (0,0))
b3=(bldg 307 204 120 196 $
        polygon [(310,400), (310,299), (342,268), (342,229), (348,229), (349,214),
                 (366,209), (388,220), (390,226), (403,227), (404,233), (411,243),
                 (424,250), (421,259), (425,265), (425,400)] (0,0))
b4=(bldg 479 186 86 214 $
        polygon [(483,400), (486,226), (507,197), (557,214), (557,286), (560,286),
                 (561,400)] (0,0))
b5=(bldg 632 232 86 168 $
        polygon [(634,400), (634,255), (643,251), (643,237), (655,237), (663,247),
                 (709,242), (714,400)] (0,0))
b6=(bldg 782 285 74 115 $
        polygon [(784,400), (784,295), (854,295), (853,400)] (0,0))
b7=(bldg 904 322 143 78 $
        polygon [(906,400), (906,338), (926,324), (951,339), (951,388), (957,388),
                 (957,338), (992,323), (1013,337), (1036,331), (1046,340), (1045,400)] (0,0))
b8=(bldg 1057 8 120 392 $
        polygon [(1059,400), (1059,221), (1065,221), (1066, 175), (1073,174),
                 (1073,163), (1086,152), (1086,124), (1091,120), (1092,101),
                 (1099,100), (1111,80), (1113,9), (1117,81), (1128,99),
                 (1137,99), (1145,109), (1145,131), (1153,132), (1157,136),
                 (1160,145), (1161,161), (1172,161), (1173,179), (1173,400)] (0,0))
b9=(bldg 1206 228 133 172 $
        polygon [(1208,400), (1210,243), (1234,243), (1234,229), (1245,229), (1244,241),
                 (1329,244), (1333,400)] (0,0))
ba=(bldg 1374 25 90 375 $
        polygon [(1376,400), (1376,299), (1382,270), (1383,166), (1386,166), (1386,136),
                 (1409,89), (1414,86), (1415,25), (1423,87), (1433,87), (1440,122),
                 (1445,122), (1462,197), (1462,209), (1457,214), (1457,263),
                 (1462,267), (1462,290), (1457,296), (1458,348),(1463,351),(1463,400)] (0,0))
bb=(bldg 1504 294 140 106 $
        polygon [(1509,400), (1509,337), (1513,337), (1515,317), (1576,313), (1579,316),
                 (1579,357), (1583,355), (1586,319), (1630,318), (1630,337), (1641,336),
                 (1641,400)] (0,0))
bc=(bldg 1656 324 134 76 $
        polygon [(1660,400), (1660,368), (1667,362), (1665,341), (1687,326),
                 (1704,342), (1724,328), (1746,342), (1762,325), (1785,343),
                 (1785,400)] (0,0))
bldgs = [b1,b2,b3,b4,b5,b6,b7,b8,b9,ba,bb,bc]

bldgCount = length bldgs
allBldgsWidth = foldr (\bldg w -> bldg.width + w) 0 bldgs
f >>> g = g . f
x |> g = g x
half x = x `div` 2

-- Find the nth element of a list, or Nothing if the list is too short
nthMaybe n lst =
    case lst of
        [] -> Nothing
        x:xs -> if n == 0 then Just x else nthMaybe (n-1) xs

nthBuilding n = case (nthMaybe (n `mod` bldgCount) bldgs) of
    Just b -> b
    Nothing -> head bldgs



takeWhile p lst =
    case lst of
        [] -> []
        x:xs -> if p x then x : (takeWhile p xs) else []
dropWhile p lst =
    case lst of
        [] -> []
        x:xs -> if p x then (dropWhile p xs) else lst

updateGame input oldState =
    let {t,mouseDown,mousePosition} = input
        oldFires = oldState.oldFires
        robotElt = input.jselts.robot
        (mouseX, mouseY) = mousePosition
        gameWidth = 1024
        gameHeight = 630
        speed = 0.15
        distanceTravelled = truncate (t * speed)
        (cityShapes,cityHitMasks) =
            let currentLoopX = distanceTravelled `mod` allBldgsWidth
                buildingsOnScreen loopX bX bs n =
                    if bX - loopX > gameWidth then ([],[])
                    else case bs of
                            [] -> if n < 10 then buildingsOnScreen loopX bX bldgs (n+1) else ([],[])
                            x:xs -> let rest = buildingsOnScreen loopX (bX + x.width) xs n
                                    in if ((bX + x.width) < loopX) then rest
                                       else let bldgLeft = bX - loopX
                                                bldgTop = gameHeight - x.height
                                                form = toForm (bldgLeft + (half x.width),bldgTop + (half x.height)) x.image
                                                hitMask = move bldgLeft bldgTop x.hitMask
                                            in (form : (fst rest), hitMask : (snd rest))
            in buildingsOnScreen currentLoopX 0 bldgs 1
        headCenter = (292,410)
        monsterShapes = [robotElt]

        laserShapes = if mouseDown then [solid red (segment headCenter mousePosition)] else []

        fireRadius since = (sqrt (t - since))*speed*5
        fireVisible {worldX,since} = worldX > distanceTravelled - (fireRadius since)

        fireShape {worldX,worldY,since} =
            let radius = fireRadius since
                x = worldX - distanceTravelled
            in filled red (circle radius (x,worldY))
        oldVisibleFires = filter fireVisible oldFires

        newFire = {worldX=mouseX + distanceTravelled,
                   worldY=mouseY,
                   since=t}
        mouseOverBuilding = any (isWithin mousePosition) cityHitMasks
        mouseOverFire = any (isWithin mousePosition) (map fireShape oldVisibleFires)
        timeSinceLastFire = case oldFires of
            f:fs -> t - f.since
            [] -> 1000

        newFires = if mouseDown && mouseOverBuilding && (not mouseOverFire) && (timeSinceLastFire > 333)
                   then newFire : oldVisibleFires else oldVisibleFires

        newState = {oldFires=newFires}
        fireShapes = map fireShape newFires

        shapes = monsterShapes ++ cityShapes ++ laserShapes ++ fireShapes
        gameView = collage gameWidth gameHeight shapes
        debugView () =
            let debugTextView = show >>> toText >>> (Text.color green) >>> Text.monospace >>> Graphics.text
                views = [debugTextView input,
                         debugTextView oldState,
                         debugTextView newState,
                         debugTextView bldgs]
            in flow down views
        newView = gameView --`above` (debugView ())


    in (newView,newState)

mkjselts r = {robot=r}
jselts = lift mkjselts robotAnimation
mkinput t mouseDown mousePosition jselts = let r = {t=t, mouseDown=mouseDown, mousePosition=mousePosition, jselts=jselts} in r
input = lift4 mkinput (every 0.1) Mouse.isDown Mouse.position jselts
startState = {oldFires=[],buildings=[]}
gameAutomaton = init' startState updateGame
main = Automaton.run gameAutomaton input
