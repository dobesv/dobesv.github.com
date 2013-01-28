
try{

if (Elm.Main) throw new Error("Module name collision, 'Main' is already defined."); 
Elm.Main=function(){
 var $op={};
 for(Elm['i'] in Elm){eval('var '+Elm['i']+'=Elm[Elm.i];');}
 try{
  if (!(Elm.Prelude instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'Prelude' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var hiddenVars={};
 for (Elm['i'] in Elm.Prelude) {
  if (hiddenVars[Elm['i']]) continue;
  eval('var ' + Elm['i'] + ' = Elm.Prelude[Elm.i];');}
 try{
  if (!(Elm.Automaton instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'Automaton' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var init$=Elm.Automaton.init$;
 try{
  if (!(Elm.JavaScript instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'JavaScript' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var hiddenVars={};
 for (Elm['i'] in Elm.JavaScript) {
  if (hiddenVars[Elm['i']]) continue;
  eval('var ' + Elm['i'] + ' = Elm.JavaScript[Elm.i];');}
 try{
  if (!(Elm.JavaScript.Experimental instanceof Object)) throw new Error('module not found');
 } catch(e) {
  throw new Error("Module 'JavaScript.Experimental' is missing. Compile with --make flag or load missing module in a separate JavaScript file.");
 }
 var hiddenVars={};
 for (Elm['i'] in Elm.JavaScript.Experimental) {
  if (hiddenVars[Elm['i']]) continue;
  eval('var ' + Elm['i'] + ' = Elm.JavaScript.Experimental[Elm.i];');}
 var jsRobotAnimation_0=Elm.Signal.constant(castElementToJSElement(spacer(0)(0)));
 Value.addListener(document, 'provideRobotAnimation', function(e) { Dispatcher.notify(jsRobotAnimation_0.id, e.value); });
 function updateGame_2(input_10){
  return function(oldState_11){
   return function(){
    var _0_18=input_10;
    var t_13=function(r){
     return r.hasOwnProperty('_') ? r.t[0] : r.t;}(_0_18);
    var mouseDown_14=function(r){
     return r.hasOwnProperty('_') ? r.mouseDown[0] : r.mouseDown;}(_0_18);
    var mousePosition_15=function(r){
     return r.hasOwnProperty('_') ? r.mousePosition[0] : r.mousePosition;}(_0_18);
    var oldFires_16=function(r){
     return r.hasOwnProperty('_') ? r.oldFires[0] : r.oldFires;}(oldState_11);
    var robotElt_17=function(r){
     return r.hasOwnProperty('_') ? r.robot[0] : r.robot;}(function(r){
     return r.hasOwnProperty('_') ? r.jselts[0] : r.jselts;}(input_10));
    var _0_18=mousePosition_15;
    var mouseX_19=function(){
    switch(_0_18[0]){
     case 'Tuple2':
     return _0_18[1];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 15, Column 28)");}();
    var mouseY_20=function(){
    switch(_0_18[0]){
     case 'Tuple2':
     return _0_18[2];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 15, Column 28)");}();
    var gameWidth_21=1024;
    var gameHeight_22=630;
    var speed_23=0.15;
    var distanceTravelled_24=truncate((t_13*speed_23));
    var cityShapes_26=buildings_25(0);
    var headCenter_27=['Tuple2',292,410];
    var monsterShapes_28=['Cons',robotElt_17,['Nil']];
    var laserShapes_29=(mouseDown_14?['Cons',solid(red)(segment(headCenter_27)(mousePosition_15)),['Nil']]:['Nil']);
    var oldVisibleFires_33=filter(fireVisible_31)(oldFires_16);
    var newFire_34={
      since : [t_13],
      worldX : [(mouseX_19+distanceTravelled_24)],
      worldY : [mouseY_20],
      _ : [true]};
    var mouseOverBuilding_35=any(isWithin(mousePosition_15))(cityShapes_26);
    var mouseOverFire_36=any(isWithin(mousePosition_15))(map(fireShape_32)(oldVisibleFires_33));
    var timeSinceLastFire_37=function(){
    switch(oldFires_16[0]){
     case 'Cons':
     return (t_13-function(r){
      return r.hasOwnProperty('_') ? r.since[0] : r.since;}(oldFires_16[1]));
     case 'Nil':
     return 1000;
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 50, Column 29)");}();
    var newFires_38=((mouseDown_14&&(mouseOverBuilding_35&&(not(mouseOverFire_36)&&(compare(timeSinceLastFire_37)(333)[0] === 'GT'))))?['Cons',newFire_34,oldVisibleFires_33]:oldVisibleFires_33);
    var newState_39={
      oldFires : [newFires_38],
      _ : [true]};
    var fireShapes_40=map(fireShape_32)(newFires_38);
    var shapes_41=Value.append(monsterShapes_28,Value.append(cityShapes_26,Value.append(laserShapes_29,fireShapes_40)));
    var newView_42=collage(gameWidth_21)(gameHeight_22)(shapes_41);
    function buildings_25(x_47){
     return function(){
      var bldgWidth_48=div(gameWidth_21)(10);
      var bldgSpace_49=div(bldgWidth_48)(5);
      var bldgStep_50=(bldgWidth_48+bldgSpace_49);
      var bldgOffset_51=(div(bldgWidth_48)(2)-rem(distanceTravelled_24)(bldgStep_50));
      var bldgStagger_52=rem((36969*div((distanceTravelled_24+truncate(x_47)))(bldgStep_50)))(100);
      var bldgHeight_53=(div(gameHeight_22)(10)+bldgStagger_52);
      var building_54=filled(black)(rect(bldgWidth_48)(bldgHeight_53)(['Tuple2',(x_47+bldgOffset_51),(gameHeight_22-(bldgHeight_53/2))]));
      return ((compare((x_47-bldgWidth_48))(gameWidth_21)[0] === 'GT')?['Nil']:['Cons',building_54,buildings_25(((x_47+bldgWidth_48)+bldgSpace_49))]);}();}
    function fireRadius_30(since_55){
     return (5*(sqrt((t_13-since_55))*speed_23));}
    function fireVisible_31(_0_56){
     return function(){
      var worldX_57=function(r){
       return r.hasOwnProperty('_') ? r.worldX[0] : r.worldX;}(_0_56);
      var since_58=function(r){
       return r.hasOwnProperty('_') ? r.since[0] : r.since;}(_0_56);
      return (compare(worldX_57)((distanceTravelled_24-fireRadius_30(since_58)))[0] === 'GT');}();}
    function fireShape_32(_0_59){
     return function(){
      var worldX_60=function(r){
       return r.hasOwnProperty('_') ? r.worldX[0] : r.worldX;}(_0_59);
      var worldY_61=function(r){
       return r.hasOwnProperty('_') ? r.worldY[0] : r.worldY;}(_0_59);
      var since_62=function(r){
       return r.hasOwnProperty('_') ? r.since[0] : r.since;}(_0_59);
      return function(){
       var radius_63=fireRadius_30(since_62);
       var x_64=(worldX_60-distanceTravelled_24);
       return filled(red)(circle(radius_63)(['Tuple2',x_64,worldY_61]));}();}();}
    return ['Tuple2',newView_42,newState_39];}();};}
 function mkjselts_3(r_67){
  return {
    robot : [r_67],
    _ : [true]};}
 function mkinput_5(t_68){
  return function(mouseDown_69){
   return function(mousePosition_70){
    return function(jselts_71){
     return function(){
      var r_72={
        jselts : [jselts_71],
        mouseDown : [mouseDown_69],
        mousePosition : [mousePosition_70],
        t : [t_68],
        _ : [true]};
      return r_72;}();};};};}
 var robotAnimation_1=lift(castJSElementToElement(262)(373))(jsRobotAnimation_0);
 var jselts_4=lift(mkjselts_3)(robotAnimation_1);
 var input_6=lift4(mkinput_5)(every(0.1))(Mouse.isDown)(Mouse.position)(jselts_4);
 var startState_7={
   oldFires : [['Nil']],
   _ : [true]};
 var gameAutomaton_8=init$(startState_7)(updateGame_2);
 var main_9=Automaton.run(gameAutomaton_8)(input_6);
 return {$op : {},
 jsRobotAnimation:jsRobotAnimation_0,
 robotAnimation:robotAnimation_1,
 updateGame:updateGame_2,
 mkjselts:mkjselts_3,
 jselts:jselts_4,
 mkinput:mkinput_5,
 input:input_6,
 startState:startState_7,
 gameAutomaton:gameAutomaton_8,
 main:main_9};}();
Elm.main=function(){
 return Elm.Main.main;};
} catch (e) {
Elm.main=function() {
var msg = ('<br/><h2>Your browser may not be supported. Are you using a modern browser?</h2>' + '<br/><span style="color:grey">Runtime Error in Main module:<br/>' + e + '<br/><br/>The problem may stem from an improper usage of:<br/>circle, every, init\'</span>');
document.body.innerHTML = Elm.Text.monospace(msg);throw e;};}