import Automaton (init')

data Fire = Fire (Int,Int) Time
data GameState = GameState [Fire]
data Input = Input Time Bool (Int,Int)

updateGame (Input t mouseDown mousePosition) (GameState oldFires) =
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
        fireVisible (Fire (worldX,y) since) = worldX > distanceTravelled - (fireRadius since)

        fireShape (Fire (worldX,y) since) =
            let radius = fireRadius since
                x = worldX - distanceTravelled
            in filled red (circle radius (x,y))
        oldVisibleFires = filter fireVisible oldFires

        mouseWorldPosition = (mouseX + distanceTravelled, mouseY)
        mouseOverBuilding = any (isWithin mousePosition) cityShapes
        mouseOverFire = any (isWithin mousePosition) (map fireShape oldVisibleFires)
        newFires = if mouseDown && mouseOverBuilding && (not mouseOverFire) then (Fire mouseWorldPosition t) : oldVisibleFires else oldVisibleFires

        newState = GameState newFires
        fireShapes = map fireShape newFires

        shapes = monsterShapes ++ cityShapes ++ laserShapes ++ fireShapes
        newView = collage gameWidth gameHeight shapes


    in (newView,newState)

input = lift3 Input (every 0.1) Mouse.isDown Mouse.position
startState = GameState []
first (a,b) = a
gameAutomaton = init' startState updateGame
main = Automaton.run gameAutomaton input
