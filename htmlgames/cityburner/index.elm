import Automaton (init')

updateGame {t,mouseDown,mousePosition} {oldFires} =
    let (mouseX, mouseY) = mousePosition
        gameWidth = 1024
        gameHeight = 768
        speed = 0.02
        distanceTravelled = truncate (t * speed)
        buildings x =
            let bldgWidth = gameWidth `div` 10
                bldgSpace = bldgWidth `div` 5
                bldgStep = bldgWidth + bldgSpace
                bldgOffset = (bldgWidth `div` 2) - (distanceTravelled `rem` bldgStep)
                bldgStagger = (((distanceTravelled + (truncate x)) `div` bldgStep) * 36969) `rem` 100
                bldgHeight = (gameHeight `div` 10) + bldgStagger
                building = filled grey (rect bldgWidth bldgHeight (x + bldgOffset,gameHeight-bldgHeight/2))
            in if x-bldgWidth > gameWidth then [] else building : (buildings (x + bldgWidth + bldgSpace))
        cityShapes = buildings 0
        headSize = gameHeight `div` 10
        headCenter = (gameWidth `div` 10, gameHeight `div` 4)
        headCircle = filled red (circle (gameHeight `div` 10) headCenter)

        monsterShapes = [headCircle]

        laserShapes = if mouseDown then [solid red (segment headCenter mousePosition)] else []

        fireRadius since = (sqrt (t - since))*speed*10
        fireVisible {worldX,since} = worldX > distanceTravelled - (fireRadius since)

        fireShape {worldX,worldY,since} =
            let radius = fireRadius since
                x = worldX - distanceTravelled
            in filled red (circle radius (x,worldY))
        oldVisibleFires = filter fireVisible oldFires

        newFire = {worldX=mouseX + distanceTravelled,
                   worldY=mouseY,
                   since=t}
        mouseOverBuilding = any (isWithin mousePosition) cityShapes
        mouseOverFire = any (isWithin mousePosition) (map fireShape oldVisibleFires)
        newFires = if mouseDown && mouseOverBuilding && (not mouseOverFire) then newFire : oldVisibleFires else oldVisibleFires

        newState = {oldFires=newFires}
        fireShapes = map fireShape newFires

        shapes = monsterShapes ++ cityShapes ++ laserShapes ++ fireShapes
        newView = collage gameWidth gameHeight shapes


    in (newView,newState)

mkinput t mouseDown mousePosition = let r = {t=t, mouseDown=mouseDown, mousePosition=mousePosition} in r
input = lift3 mkinput (every 0.1) Mouse.isDown Mouse.position
startState = {oldFires=[]}
gameAutomaton = init' startState updateGame
main = Automaton.run gameAutomaton input
