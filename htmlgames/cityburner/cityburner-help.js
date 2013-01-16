function sendToElm(evtName, value) {
    var e = document.createEvent('Event');
    e.initEvent(evtName, true, true);
    e.value = value;
    document.dispatchEvent(e);
}

$(document).ready(function() {
    //var robotElt = $('<div>', {id:"Stage", class:"ROBOT-WALK"});
    //$('body').append(robotElt);
    //$('head').append($('<script type="text/javascript" src="DestroyBotWalk_edgePreload.js"></script>'))
    sendToElm("provideRobotAnimation", document.getElementById("ROBOT-WALK"));
})