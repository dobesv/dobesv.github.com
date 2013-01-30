
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
 function cropImage_2(url_34){
  return function(origWidth_35){
   return function(origHeight_36){
    return function(left_37){
     return function(top_38){
      return function(width_39){
       return function(height_40){
        return collage(width_39)(height_40)(['Cons',sprite(url_34)(origWidth_35)(origHeight_36)(['Tuple2',(div(origWidth_35)(2)-left_37),(div(origHeight_36)(2)-top_38)]),['Nil']]);};};};};};};}
 function crop_3(element_41){
  return function(left_42){
   return function(top_43){
    return function(width_44){
     return function(height_45){
      return function(){
       var eltWidth_46=widthOf(element_41);
       var eltHeight_47=heightOf(element_41);
       return collage(width_44)(height_45)(['Cons',toForm(['Tuple2',(div(eltWidth_46)(2)-left_42),(div(eltHeight_47)(2)-top_43)])(element_41),['Nil']]);}();};};};};}
 function bldg_5(left_48){
  return function(top_49){
   return function(width_50){
    return function(height_51){
     return function(hitMask_52){
      return {
        height : [height_51],
        hitMask : [move((0-left_48))((0-top_49))(filled(red)(hitMask_52))],
        image : [cropImage_2(function(r){
       return '_' in r ? r.src[0] : r.src;}(bldgSheet_4))(function(r){
       return '_' in r ? r.width[0] : r.width;}(bldgSheet_4))(function(r){
       return '_' in r ? r.height[0] : r.height;}(bldgSheet_4))(left_48)(top_49)(width_50)(height_51)],
        width : [width_50],
        _ : [true]};};};};};}
 $op['>>>'] = function(f_55){
  return function(g_56){
   return function(x){
    return g_56(f_55(x));};};};
 $op['|>'] = function(x_57){
  return function(g_58){
   return g_58(x_57);};};
 function half_21(x_59){
  return div(x_59)(2);}
 function nthMaybe_22(n_60){
  return function(lst_61){
   return function(){
   switch(lst_61[0]){
    case 'Cons':
    return (eq(n_60,0)?Just(lst_61[1]):nthMaybe_22((n_60-1))(lst_61[2]));
    case 'Nil':
    return Nothing;
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 80, Column 5)");}();};}
 function nthBuilding_23(n_64){
  return function(){
  var case3=nthMaybe_22(mod(n_64)(bldgCount_19))(bldgs_18);
  switch(case3[0]){
   case 'Just':
   return case3[1];
   case 'Nothing':
   return head(bldgs_18);
  }
  throw new Error("Non-exhaustive pattern match in case expression (Line 84, Column 17)");}();}
 function takeWhile_24(p_66){
  return function(lst_67){
   return function(){
   switch(lst_67[0]){
    case 'Cons':
    return (p_66(lst_67[1])?['Cons',lst_67[1],takeWhile_24(p_66)(lst_67[2])]:['Nil']);
    case 'Nil':
    return ['Nil'];
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 91, Column 5)");}();};}
 function dropWhile_25(p_70){
  return function(lst_71){
   return function(){
   switch(lst_71[0]){
    case 'Cons':
    return (p_70(lst_71[1])?dropWhile_25(p_70)(lst_71[2]):lst_71);
    case 'Nil':
    return ['Nil'];
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 95, Column 5)");}();};}
 function updateGame_26(input_74){
  return function(oldState_75){
   return function(){
    var _0_89=input_74;
    var t_77=function(r){
     return '_' in r ? r.t[0] : r.t;}(_0_89);
    var mouseDown_78=function(r){
     return '_' in r ? r.mouseDown[0] : r.mouseDown;}(_0_89);
    var mousePosition_79=function(r){
     return '_' in r ? r.mousePosition[0] : r.mousePosition;}(_0_89);
    var oldFires_80=function(r){
     return '_' in r ? r.oldFires[0] : r.oldFires;}(oldState_75);
    var robotElt_81=function(r){
     return '_' in r ? r.robot[0] : r.robot;}(function(r){
     return '_' in r ? r.jselts[0] : r.jselts;}(input_74));
    var _0_89=mousePosition_79;
    var mouseX_83=function(){
    switch(_0_89[0]){
     case 'Tuple2':
     return _0_89[1];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 103, Column 28)");}();
    var mouseY_84=function(){
    switch(_0_89[0]){
     case 'Tuple2':
     return _0_89[2];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 103, Column 28)");}();
    var gameWidth_85=1024;
    var gameHeight_86=630;
    var speed_87=0.15;
    var distanceTravelled_88=truncate((t_77*speed_87));
    var _0_89=function(){
     var currentLoopX_114=mod(distanceTravelled_88)(allBldgsWidth_20);
     function buildingsOnScreen_115(loopX_116){
      return function(bX_117){
       return function(bs_118){
        return function(n_119){
         return ((compare((bX_117-loopX_116))(gameWidth_85)[0] === 'GT')?['Tuple2',['Nil'],['Nil']]:function(){
         switch(bs_118[0]){
          case 'Cons':
          return function(){
           var rest_122=buildingsOnScreen_115(loopX_116)((bX_117+function(r){
            return '_' in r ? r.width[0] : r.width;}(bs_118[1])))(bs_118[2])(n_119);
           return ((compare((bX_117+function(r){
            return '_' in r ? r.width[0] : r.width;}(bs_118[1])))(loopX_116)[0] === 'LT')?rest_122:function(){
            var bldgLeft_123=(bX_117-loopX_116);
            var bldgTop_124=(gameHeight_86-function(r){
             return '_' in r ? r.height[0] : r.height;}(bs_118[1]));
            var form_125=toForm(['Tuple2',(bldgLeft_123+half_21(function(r){
             return '_' in r ? r.width[0] : r.width;}(bs_118[1]))),(bldgTop_124+half_21(function(r){
             return '_' in r ? r.height[0] : r.height;}(bs_118[1])))])(function(r){
             return '_' in r ? r.image[0] : r.image;}(bs_118[1]));
            var hitMask_126=move(bldgLeft_123)(bldgTop_124)(function(r){
             return '_' in r ? r.hitMask[0] : r.hitMask;}(bs_118[1]));
            return ['Tuple2',['Cons',form_125,fst(rest_122)],['Cons',hitMask_126,snd(rest_122)]];}());}();
          case 'Nil':
          return ((compare(n_119)(10)[0] === 'LT')?buildingsOnScreen_115(loopX_116)(bX_117)(bldgs_18)((1+n_119)):['Tuple2',['Nil'],['Nil']]);
         }
         throw new Error("Non-exhaustive pattern match in case expression (Line 112, Column 26)");}());};};};}
     return buildingsOnScreen_115(currentLoopX_114)(0)(bldgs_18)(1);}();
    var cityShapes_90=function(){
    switch(_0_89[0]){
     case 'Tuple2':
     return _0_89[1];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 109, Column 13)");}();
    var cityHitMasks_91=function(){
    switch(_0_89[0]){
     case 'Tuple2':
     return _0_89[2];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 109, Column 13)");}();
    var headCenter_92=['Tuple2',292,410];
    var monsterShapes_93=['Cons',robotElt_81,['Nil']];
    var laserShapes_94=(mouseDown_78?['Cons',solid(red)(segment(headCenter_92)(mousePosition_79)),['Nil']]:['Nil']);
    var oldVisibleFires_98=filter(fireVisible_96)(oldFires_80);
    var newFire_99={
      since : [t_77],
      worldX : [(mouseX_83+distanceTravelled_88)],
      worldY : [mouseY_84],
      _ : [true]};
    var mouseOverBuilding_100=any(isWithin(mousePosition_79))(cityHitMasks_91);
    var mouseOverFire_101=any(isWithin(mousePosition_79))(map(fireShape_97)(oldVisibleFires_98));
    var timeSinceLastFire_102=function(){
    switch(oldFires_80[0]){
     case 'Cons':
     return (t_77-function(r){
      return '_' in r ? r.since[0] : r.since;}(oldFires_80[1]));
     case 'Nil':
     return 1000;
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 141, Column 29)");}();
    var newFires_103=((mouseDown_78&&(mouseOverBuilding_100&&(not(mouseOverFire_101)&&(compare(timeSinceLastFire_102)(333)[0] === 'GT'))))?['Cons',newFire_99,oldVisibleFires_98]:oldVisibleFires_98);
    var newState_104={
      oldFires : [newFires_103],
      _ : [true]};
    var fireShapes_105=map(fireShape_97)(newFires_103);
    var shapes_106=Value.append(monsterShapes_93,Value.append(cityShapes_90,Value.append(laserShapes_94,fireShapes_105)));
    var gameView_107=collage(gameWidth_85)(gameHeight_86)(shapes_106);
    var newView_109=gameView_107;
    function fireRadius_95(since_131){
     return (5*(sqrt((t_77-since_131))*speed_87));}
    function fireVisible_96(_0_132){
     return function(){
      var worldX_133=function(r){
       return '_' in r ? r.worldX[0] : r.worldX;}(_0_132);
      var since_134=function(r){
       return '_' in r ? r.since[0] : r.since;}(_0_132);
      return (compare(worldX_133)((distanceTravelled_88-fireRadius_95(since_134)))[0] === 'GT');}();}
    function fireShape_97(_0_135){
     return function(){
      var worldX_136=function(r){
       return '_' in r ? r.worldX[0] : r.worldX;}(_0_135);
      var worldY_137=function(r){
       return '_' in r ? r.worldY[0] : r.worldY;}(_0_135);
      var since_138=function(r){
       return '_' in r ? r.since[0] : r.since;}(_0_135);
      return function(){
       var radius_139=fireRadius_95(since_138);
       var x_140=(worldX_136-distanceTravelled_88);
       return filled(red)(circle(radius_139)(['Tuple2',x_140,worldY_137]));}();}();}
    function debugView_108(_0_143){
     return function(){
     switch(_0_143[0]){
      case 'Tuple0':
      return function(){
       var debugTextView_144=$op['>>>'](show)($op['>>>'](toText)($op['>>>'](Text.color(green))($op['>>>'](Text.monospace)(Graphics.text))));
       var views_145=['Cons',debugTextView_144(input_74),['Cons',debugTextView_144(oldState_75),['Cons',debugTextView_144(newState_104),['Cons',debugTextView_144(bldgs_18),['Nil']]]]];
       return flow(down)(views_145);}();
     }
     throw new Error("Non-exhaustive pattern match in case expression (Line 154, Column 13)");}();}
    return ['Tuple2',newView_109,newState_104];}();};}
 function mkjselts_27(r_146){
  return {
    robot : [r_146],
    _ : [true]};}
 function mkinput_29(t_147){
  return function(mouseDown_148){
   return function(mousePosition_149){
    return function(jselts_150){
     return function(){
      var r_151={
        jselts : [jselts_150],
        mouseDown : [mouseDown_148],
        mousePosition : [mousePosition_149],
        t : [t_147],
        _ : [true]};
      return r_151;}();};};};}
 var robotAnimation_1=lift(castJSElementToElement(262)(373))(jsRobotAnimation_0);
 var bldgSheet_4={
   height : [400],
   src : [Value.str('images/CityBurner_Buildings_V2.png')],
   width : [1800],
   _ : [true]};
 var b1_6=bldg_5(0)(249)(141)(151)(polygon(['Cons',['Tuple2',3,398],['Cons',['Tuple2',4,325],['Cons',['Tuple2',13,320],['Cons',['Tuple2',13,293],['Cons',['Tuple2',96,294],['Cons',['Tuple2',94,308],['Cons',['Tuple2',112,320],['Cons',['Tuple2',112,340],['Cons',['Tuple2',138,341],['Cons',['Tuple2',137,399],['Nil']]]]]]]]]]])(['Tuple2',0,0]));
 var b2_7=bldg_5(178)(61)(86)(339)(polygon(['Cons',['Tuple2',180,400],['Cons',['Tuple2',180,193],['Cons',['Tuple2',190,189],['Cons',['Tuple2',190,149],['Cons',['Tuple2',203,139],['Cons',['Tuple2',203,118],['Cons',['Tuple2',240,118],['Cons',['Tuple2',241,149],['Cons',['Tuple2',260,150],['Cons',['Tuple2',262,194],['Cons',['Tuple2',262,400],['Nil']]]]]]]]]]]])(['Tuple2',0,0]));
 var b3_8=bldg_5(307)(204)(120)(196)(polygon(['Cons',['Tuple2',310,400],['Cons',['Tuple2',310,299],['Cons',['Tuple2',342,268],['Cons',['Tuple2',342,229],['Cons',['Tuple2',348,229],['Cons',['Tuple2',349,214],['Cons',['Tuple2',366,209],['Cons',['Tuple2',388,220],['Cons',['Tuple2',390,226],['Cons',['Tuple2',403,227],['Cons',['Tuple2',404,233],['Cons',['Tuple2',411,243],['Cons',['Tuple2',424,250],['Cons',['Tuple2',421,259],['Cons',['Tuple2',425,265],['Cons',['Tuple2',425,400],['Nil']]]]]]]]]]]]]]]]])(['Tuple2',0,0]));
 var b4_9=bldg_5(479)(186)(86)(214)(polygon(['Cons',['Tuple2',483,400],['Cons',['Tuple2',486,226],['Cons',['Tuple2',507,197],['Cons',['Tuple2',557,214],['Cons',['Tuple2',557,286],['Cons',['Tuple2',560,286],['Cons',['Tuple2',561,400],['Nil']]]]]]]])(['Tuple2',0,0]));
 var b5_10=bldg_5(632)(232)(86)(168)(polygon(['Cons',['Tuple2',634,400],['Cons',['Tuple2',634,255],['Cons',['Tuple2',643,251],['Cons',['Tuple2',643,237],['Cons',['Tuple2',655,237],['Cons',['Tuple2',663,247],['Cons',['Tuple2',709,242],['Cons',['Tuple2',714,400],['Nil']]]]]]]]])(['Tuple2',0,0]));
 var b6_11=bldg_5(782)(285)(74)(115)(polygon(['Cons',['Tuple2',784,400],['Cons',['Tuple2',784,295],['Cons',['Tuple2',854,295],['Cons',['Tuple2',853,400],['Nil']]]]])(['Tuple2',0,0]));
 var b7_12=bldg_5(904)(322)(143)(78)(polygon(['Cons',['Tuple2',906,400],['Cons',['Tuple2',906,338],['Cons',['Tuple2',926,324],['Cons',['Tuple2',951,339],['Cons',['Tuple2',951,388],['Cons',['Tuple2',957,388],['Cons',['Tuple2',957,338],['Cons',['Tuple2',992,323],['Cons',['Tuple2',1013,337],['Cons',['Tuple2',1036,331],['Cons',['Tuple2',1046,340],['Cons',['Tuple2',1045,400],['Nil']]]]]]]]]]]]])(['Tuple2',0,0]));
 var b8_13=bldg_5(1057)(8)(120)(392)(polygon(['Cons',['Tuple2',1059,400],['Cons',['Tuple2',1059,221],['Cons',['Tuple2',1065,221],['Cons',['Tuple2',1066,175],['Cons',['Tuple2',1073,174],['Cons',['Tuple2',1073,163],['Cons',['Tuple2',1086,152],['Cons',['Tuple2',1086,124],['Cons',['Tuple2',1091,120],['Cons',['Tuple2',1092,101],['Cons',['Tuple2',1099,100],['Cons',['Tuple2',1111,80],['Cons',['Tuple2',1113,9],['Cons',['Tuple2',1117,81],['Cons',['Tuple2',1128,99],['Cons',['Tuple2',1137,99],['Cons',['Tuple2',1145,109],['Cons',['Tuple2',1145,131],['Cons',['Tuple2',1153,132],['Cons',['Tuple2',1157,136],['Cons',['Tuple2',1160,145],['Cons',['Tuple2',1161,161],['Cons',['Tuple2',1172,161],['Cons',['Tuple2',1173,179],['Cons',['Tuple2',1173,400],['Nil']]]]]]]]]]]]]]]]]]]]]]]]]])(['Tuple2',0,0]));
 var b9_14=bldg_5(1206)(228)(133)(172)(polygon(['Cons',['Tuple2',1208,400],['Cons',['Tuple2',1210,243],['Cons',['Tuple2',1234,243],['Cons',['Tuple2',1234,229],['Cons',['Tuple2',1245,229],['Cons',['Tuple2',1244,241],['Cons',['Tuple2',1329,244],['Cons',['Tuple2',1333,400],['Nil']]]]]]]]])(['Tuple2',0,0]));
 var ba_15=bldg_5(1374)(25)(90)(375)(polygon(['Cons',['Tuple2',1376,400],['Cons',['Tuple2',1376,299],['Cons',['Tuple2',1382,270],['Cons',['Tuple2',1383,166],['Cons',['Tuple2',1386,166],['Cons',['Tuple2',1386,136],['Cons',['Tuple2',1409,89],['Cons',['Tuple2',1414,86],['Cons',['Tuple2',1415,25],['Cons',['Tuple2',1423,87],['Cons',['Tuple2',1433,87],['Cons',['Tuple2',1440,122],['Cons',['Tuple2',1445,122],['Cons',['Tuple2',1462,197],['Cons',['Tuple2',1462,209],['Cons',['Tuple2',1457,214],['Cons',['Tuple2',1457,263],['Cons',['Tuple2',1462,267],['Cons',['Tuple2',1462,290],['Cons',['Tuple2',1457,296],['Cons',['Tuple2',1458,348],['Cons',['Tuple2',1463,351],['Cons',['Tuple2',1463,400],['Nil']]]]]]]]]]]]]]]]]]]]]]]])(['Tuple2',0,0]));
 var bb_16=bldg_5(1504)(294)(140)(106)(polygon(['Cons',['Tuple2',1509,400],['Cons',['Tuple2',1509,337],['Cons',['Tuple2',1513,337],['Cons',['Tuple2',1515,317],['Cons',['Tuple2',1576,313],['Cons',['Tuple2',1579,316],['Cons',['Tuple2',1579,357],['Cons',['Tuple2',1583,355],['Cons',['Tuple2',1586,319],['Cons',['Tuple2',1630,318],['Cons',['Tuple2',1630,337],['Cons',['Tuple2',1641,336],['Cons',['Tuple2',1641,400],['Nil']]]]]]]]]]]]]])(['Tuple2',0,0]));
 var bc_17=bldg_5(1656)(324)(134)(76)(polygon(['Cons',['Tuple2',1660,400],['Cons',['Tuple2',1660,368],['Cons',['Tuple2',1667,362],['Cons',['Tuple2',1665,341],['Cons',['Tuple2',1687,326],['Cons',['Tuple2',1704,342],['Cons',['Tuple2',1724,328],['Cons',['Tuple2',1746,342],['Cons',['Tuple2',1762,325],['Cons',['Tuple2',1785,343],['Cons',['Tuple2',1785,400],['Nil']]]]]]]]]]]])(['Tuple2',0,0]));
 var bldgs_18=['Cons',b1_6,['Cons',b2_7,['Cons',b3_8,['Cons',b4_9,['Cons',b5_10,['Cons',b6_11,['Cons',b7_12,['Cons',b8_13,['Cons',b9_14,['Cons',ba_15,['Cons',bb_16,['Cons',bc_17,['Nil']]]]]]]]]]]]];
 var bldgCount_19=length(bldgs_18);
 var allBldgsWidth_20=foldr(function(bldg_53){
  return function(w_54){
   return (function(r){
    return '_' in r ? r.width[0] : r.width;}(bldg_53)+w_54);};})(0)(bldgs_18);
 var jselts_28=lift(mkjselts_27)(robotAnimation_1);
 var input_30=lift4(mkinput_29)(every(0.1))(Mouse.isDown)(Mouse.position)(jselts_28);
 var startState_31={
   buildings : [['Nil']],
   oldFires : [['Nil']],
   _ : [true]};
 var gameAutomaton_32=init$(startState_31)(updateGame_26);
 var main_33=Automaton.run(gameAutomaton_32)(input_30);
 return {$op : {'>>>' : $op['>>>'], '|>' : $op['|>']},
 jsRobotAnimation:jsRobotAnimation_0,
 robotAnimation:robotAnimation_1,
 cropImage:cropImage_2,
 crop:crop_3,
 bldgSheet:bldgSheet_4,
 bldg:bldg_5,
 b1:b1_6,
 b2:b2_7,
 b3:b3_8,
 b4:b4_9,
 b5:b5_10,
 b6:b6_11,
 b7:b7_12,
 b8:b8_13,
 b9:b9_14,
 ba:ba_15,
 bb:bb_16,
 bc:bc_17,
 bldgs:bldgs_18,
 bldgCount:bldgCount_19,
 allBldgsWidth:allBldgsWidth_20,
 half:half_21,
 nthMaybe:nthMaybe_22,
 nthBuilding:nthBuilding_23,
 takeWhile:takeWhile_24,
 dropWhile:dropWhile_25,
 updateGame:updateGame_26,
 mkjselts:mkjselts_27,
 jselts:jselts_28,
 mkinput:mkinput_29,
 input:input_30,
 startState:startState_31,
 gameAutomaton:gameAutomaton_32,
 main:main_33};}();
Elm.main=function(){
 return Elm.Main.main;};
} catch (e) {
Elm.main=function() {
var msg = ('<br/><h2>Your browser may not be supported. Are you using a modern browser?</h2>' + '<br/><span style="color:grey">Runtime Error in Main module:<br/>' + e + '<br/><br/>The problem may stem from an improper usage of:<br/>Text.color, circle, every, fst, init\', snd</span>');
document.body.innerHTML = Elm.Text.monospace(msg);throw e;};}