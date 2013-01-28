import Automaton (init')
import JavaScript
import JavaScript.Experimental

foreign import jsevent "provideRobotAnimation"
    (castElementToJSElement (spacer 0 0))
    jsRobotAnimation :: Signal JSElement

robotAnimation = lift (castJSElementToElement 262 373) jsRobotAnimation

updateGame input oldState =
    let {t,mouseDown,mousePosition} = input
        oldFires = oldState.oldFires
        robotElt = input.jselts.robot
        (mouseX, mouseY) = mousePosition
        gameWidth = 1024
        gameHeight = 630
        speed = 0.15
        distanceTravelled = truncate (t * speed)
        buildings x =
            let bldgWidth = gameWidth `div` 10
                bldgSpace = bldgWidth `div` 5
                bldgStep = bldgWidth + bldgSpace
                bldgOffset = (bldgWidth `div` 2) - (distanceTravelled `rem` bldgStep)
                bldgStagger = (((distanceTravelled + (truncate x)) `div` bldgStep) * 36969) `rem` 100
                bldgHeight = (gameHeight `div` 10) + bldgStagger
                building = filled black (rect bldgWidth bldgHeight (x + bldgOffset,gameHeight-bldgHeight/2))
            in if x-bldgWidth > gameWidth then [] else building : (buildings (x + bldgWidth + bldgSpace))
        cityShapes = buildings 0

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
        mouseOverBuilding = any (isWithin mousePosition) cityShapes
        mouseOverFire = any (isWithin mousePosition) (map fireShape oldVisibleFires)
        timeSinceLastFire = case oldFires of
            f:fs -> t - f.since
            [] -> 1000

        newFires = if mouseDown && mouseOverBuilding && (not mouseOverFire) && (timeSinceLastFire > 333)
                   then newFire : oldVisibleFires else oldVisibleFires

        newState = {oldFires=newFires}
        fireShapes = map fireShape newFires

        shapes = monsterShapes ++ cityShapes ++ laserShapes ++ fireShapes
        newView = collage gameWidth gameHeight shapes


    in (newView,newState)

mkjselts r = {robot=r}
jselts = lift mkjselts robotAnimation
mkinput t mouseDown mousePosition jselts = let r = {t=t, mouseDown=mouseDown, mousePosition=mousePosition, jselts=jselts} in r
input = lift4 mkinput (every 0.1) Mouse.isDown Mouse.position jselts
startState = {oldFires=[]}
gameAutomaton = init' startState updateGame
main = Automaton.run gameAutomaton input
