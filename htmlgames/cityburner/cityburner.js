
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
    var gameHeight_22=768;
    var speed_23=0.15;
    var distanceTravelled_24=truncate((t_13*speed_23));
    var cityShapes_26=buildings_25(0);
    var sunCenter_27=['Tuple2',div(gameWidth_21)(10),div(gameHeight_22)(4)];
    var sunCircle_28=filled(red)(circle(div(gameHeight_22)(10))(sunCenter_27));
    var headCenter_29=['Tuple2',200,400];
    var monsterShapes_30=['Cons',robotElt_17,['Cons',sunCircle_28,['Nil']]];
    var laserShapes_31=(mouseDown_14?['Cons',solid(red)(segment(headCenter_29)(mousePosition_15)),['Nil']]:['Nil']);
    var oldVisibleFires_35=filter(fireVisible_33)(oldFires_16);
    var newFire_36={
      since : [t_13],
      worldX : [(mouseX_19+distanceTravelled_24)],
      worldY : [mouseY_20],
      _ : [true]};
    var mouseOverBuilding_37=any(isWithin(mousePosition_15))(cityShapes_26);
    var mouseOverFire_38=any(isWithin(mousePosition_15))(map(fireShape_34)(oldVisibleFires_35));
    var timeSinceLastFire_39=function(){
    switch(oldFires_16[0]){
     case 'Cons':
     return (t_13-function(r){
      return r.hasOwnProperty('_') ? r.since[0] : r.since;}(oldFires_16[1]));
     case 'Nil':
     return 1000;
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 53, Column 29)");}();
    var newFires_40=((mouseDown_14&&(mouseOverBuilding_37&&(not(mouseOverFire_38)&&(compare(timeSinceLastFire_39)(333)[0] === 'GT'))))?['Cons',newFire_36,oldVisibleFires_35]:oldVisibleFires_35);
    var newState_41={
      oldFires : [newFires_40],
      _ : [true]};
    var fireShapes_42=map(fireShape_34)(newFires_40);
    var shapes_43=Value.append(monsterShapes_30,Value.append(cityShapes_26,Value.append(laserShapes_31,fireShapes_42)));
    var newView_44=collage(gameWidth_21)(gameHeight_22)(shapes_43);
    function buildings_25(x_49){
     return function(){
      var bldgWidth_50=div(gameWidth_21)(10);
      var bldgSpace_51=div(bldgWidth_50)(5);
      var bldgStep_52=(bldgWidth_50+bldgSpace_51);
      var bldgOffset_53=(div(bldgWidth_50)(2)-rem(distanceTravelled_24)(bldgStep_52));
      var bldgStagger_54=rem((36969*div((distanceTravelled_24+truncate(x_49)))(bldgStep_52)))(100);
      var bldgHeight_55=(div(gameHeight_22)(10)+bldgStagger_54);
      var building_56=filled(grey)(rect(bldgWidth_50)(bldgHeight_55)(['Tuple2',(x_49+bldgOffset_53),(gameHeight_22-(bldgHeight_55/2))]));
      return ((compare((x_49-bldgWidth_50))(gameWidth_21)[0] === 'GT')?['Nil']:['Cons',building_56,buildings_25(((x_49+bldgWidth_50)+bldgSpace_51))]);}();}
    function fireRadius_32(since_57){
     return (5*(sqrt((t_13-since_57))*speed_23));}
    function fireVisible_33(_0_58){
     return function(){
      var worldX_59=function(r){
       return r.hasOwnProperty('_') ? r.worldX[0] : r.worldX;}(_0_58);
      var since_60=function(r){
       return r.hasOwnProperty('_') ? r.since[0] : r.since;}(_0_58);
      return (compare(worldX_59)((distanceTravelled_24-fireRadius_32(since_60)))[0] === 'GT');}();}
    function fireShape_34(_0_61){
     return function(){
      var worldX_62=function(r){
       return r.hasOwnProperty('_') ? r.worldX[0] : r.worldX;}(_0_61);
      var worldY_63=function(r){
       return r.hasOwnProperty('_') ? r.worldY[0] : r.worldY;}(_0_61);
      var since_64=function(r){
       return r.hasOwnProperty('_') ? r.since[0] : r.since;}(_0_61);
      return function(){
       var radius_65=fireRadius_32(since_64);
       var x_66=(worldX_62-distanceTravelled_24);
       return filled(red)(circle(radius_65)(['Tuple2',x_66,worldY_63]));}();}();}
    return ['Tuple2',newView_44,newState_41];}();};}
 function mkjselts_3(r_69){
  return {
    robot : [r_69],
    _ : [true]};}
 function mkinput_5(t_70){
  return function(mouseDown_71){
   return function(mousePosition_72){
    return function(jselts_73){
     return function(){
      var r_74={
        jselts : [jselts_73],
        mouseDown : [mouseDown_71],
        mousePosition : [mousePosition_72],
        t : [t_70],
        _ : [true]};
      return r_74;}();};};};}
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