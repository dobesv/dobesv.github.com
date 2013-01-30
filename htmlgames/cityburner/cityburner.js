
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
 function nthMaybe_2(n_42){
  return function(lst_43){
   return function(){
   switch(lst_43[0]){
    case 'Cons':
    return (eq(n_42,0)?Just(lst_43[1]):nthMaybe_2((n_42-1))(lst_43[2]));
    case 'Nil':
    return Nothing;
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 13, Column 5)");}();};}
 function nth_3(n_46){
  return function(lst_47){
   return head(drop(n_46)(lst_47));};}
 function takeWhile_4(p_48){
  return function(lst_49){
   return function(){
   switch(lst_49[0]){
    case 'Cons':
    return (p_48(lst_49[1])?['Cons',lst_49[1],takeWhile_4(p_48)(lst_49[2])]:['Nil']);
    case 'Nil':
    return ['Nil'];
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 22, Column 5)");}();};}
 function dropWhile_5(p_52){
  return function(lst_53){
   return function(){
   switch(lst_53[0]){
    case 'Cons':
    return (p_52(lst_53[1])?dropWhile_5(p_52)(lst_53[2]):lst_53);
    case 'Nil':
    return ['Nil'];
   }
   throw new Error("Non-exhaustive pattern match in case expression (Line 27, Column 5)");}();};}
 $op['>>>'] = function(f_56){
  return function(g_57){
   return function(x){
    return g_57(f_56(x));};};};
 $op['|>'] = function(x_58){
  return function(g_59){
   return g_59(x_58);};};
 function half_6(x_60){
  return div(x_60)(2);}
 function cropImage_7(url_61){
  return function(origWidth_62){
   return function(origHeight_63){
    return function(left_64){
     return function(top_65){
      return function(width_66){
       return function(height_67){
        return collage(width_66)(height_67)(['Cons',sprite(url_61)(origWidth_62)(origHeight_63)(['Tuple2',(div(origWidth_62)(2)-left_64),(div(origHeight_63)(2)-top_65)]),['Nil']]);};};};};};};}
 function crop_8(element_68){
  return function(left_69){
   return function(top_70){
    return function(width_71){
     return function(height_72){
      return function(){
       var eltWidth_73=widthOf(element_68);
       var eltHeight_74=heightOf(element_68);
       return collage(width_71)(height_72)(['Cons',toForm(['Tuple2',(div(eltWidth_73)(2)-left_69),(div(eltHeight_74)(2)-top_70)])(element_68),['Nil']]);}();};};};};}
 function bldg_10(_0_75){
  return function(){
  switch(_0_75[0]){
   case 'Tuple5':
   return {
     height : [_0_75[4]],
     hitMask : [move((0-_0_75[1]))((0-_0_75[2]))(filled(green)(polygon(_0_75[5])(['Tuple2',0,0])))],
     image : [cropImage_7(function(r){
    return '_' in r ? r.src[0] : r.src;}(bldgSheet_9))(function(r){
    return '_' in r ? r.width[0] : r.width;}(bldgSheet_9))(function(r){
    return '_' in r ? r.height[0] : r.height;}(bldgSheet_9))(_0_75[1])(_0_75[2])(_0_75[3])(_0_75[4])],
     width : [_0_75[3]],
     _ : [true]};
  }
  throw new Error("Non-exhaustive pattern match in case expression (Line 54, Column 4)");}();}
 function firePolygon_30(x_84){
  return function(y_85){
   return function(scale_86){
    return function(){
     var n_87=div((x_84+y_85))(10);
     function firePolys_88(n_89){
      return function(angle_90){
       return (function() { var ord = compare(angle_90)((2*pi))[0]; return ord==='GT' || ord==='EQ'; }()?['Nil']:function(){
        var r_91=(nth_3(mod(n_89)(firePatternLength_27))(firePattern_26)*scale_86);
        var dx_92=(cos(angle_90)*r_91);
        var dy_93=(sin(angle_90)*r_91);
        var deltaAngle_94=nth_3(mod(n_89)(fireAnglesLength_29))(fireAngles_28);
        return ['Cons',['Tuple2',dx_92,dy_93],firePolys_88((1+n_89))((angle_90+deltaAngle_94))];}());};}
     return filled(fireRed_33)(polygon(firePolys_88(n_87)(0))(['Tuple2',x_84,y_85]));}();};};}
 function nthBuilding_31(n_95){
  return function(){
  var case15=nthMaybe_2(mod(n_95)(bldgCount_24))(bldgs_23);
  switch(case15[0]){
   case 'Just':
   return case15[1];
   case 'Nothing':
   return head(bldgs_23);
  }
  throw new Error("Non-exhaustive pattern match in case expression (Line 90, Column 17)");}();}
 function updateGame_34(input_97){
  return function(oldState_98){
   return function(){
    var _0_112=input_97;
    var t_100=function(r){
     return '_' in r ? r.t[0] : r.t;}(_0_112);
    var mouseDown_101=function(r){
     return '_' in r ? r.mouseDown[0] : r.mouseDown;}(_0_112);
    var mousePosition_102=function(r){
     return '_' in r ? r.mousePosition[0] : r.mousePosition;}(_0_112);
    var oldFires_103=function(r){
     return '_' in r ? r.oldFires[0] : r.oldFires;}(oldState_98);
    var robotElt_104=function(r){
     return '_' in r ? r.robot[0] : r.robot;}(function(r){
     return '_' in r ? r.jselts[0] : r.jselts;}(input_97));
    var _0_112=mousePosition_102;
    var mouseX_106=function(){
    switch(_0_112[0]){
     case 'Tuple2':
     return _0_112[1];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 103, Column 28)");}();
    var mouseY_107=function(){
    switch(_0_112[0]){
     case 'Tuple2':
     return _0_112[2];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 103, Column 28)");}();
    var gameWidth_108=1024;
    var gameHeight_109=630;
    var speed_110=0.15;
    var distanceTravelled_111=truncate((t_100*speed_110));
    var _0_112=function(){
     var currentLoopX_137=mod(distanceTravelled_111)(allBldgsWidth_25);
     function buildingsOnScreen_138(loopX_139){
      return function(bX_140){
       return function(bs_141){
        return function(n_142){
         return ((compare((bX_140-loopX_139))(gameWidth_108)[0] === 'GT')?['Tuple2',['Nil'],['Nil']]:function(){
         switch(bs_141[0]){
          case 'Cons':
          return function(){
           var rest_145=buildingsOnScreen_138(loopX_139)((bX_140+function(r){
            return '_' in r ? r.width[0] : r.width;}(bs_141[1])))(bs_141[2])(n_142);
           return ((compare((bX_140+function(r){
            return '_' in r ? r.width[0] : r.width;}(bs_141[1])))(loopX_139)[0] === 'LT')?rest_145:function(){
            var bldgLeft_146=(bX_140-loopX_139);
            var bldgTop_147=(gameHeight_109-function(r){
             return '_' in r ? r.height[0] : r.height;}(bs_141[1]));
            var form_148=toForm(['Tuple2',(bldgLeft_146+half_6(function(r){
             return '_' in r ? r.width[0] : r.width;}(bs_141[1]))),(bldgTop_147+half_6(function(r){
             return '_' in r ? r.height[0] : r.height;}(bs_141[1])))])(function(r){
             return '_' in r ? r.image[0] : r.image;}(bs_141[1]));
            var hitMask_149=move(bldgLeft_146)(bldgTop_147)(function(r){
             return '_' in r ? r.hitMask[0] : r.hitMask;}(bs_141[1]));
            return ['Tuple2',['Cons',form_148,fst(rest_145)],['Cons',hitMask_149,snd(rest_145)]];}());}();
          case 'Nil':
          return ((compare(n_142)(10)[0] === 'LT')?buildingsOnScreen_138(loopX_139)(bX_140)(bldgs_23)((1+n_142)):['Tuple2',['Nil'],['Nil']]);
         }
         throw new Error("Non-exhaustive pattern match in case expression (Line 112, Column 26)");}());};};};}
     return buildingsOnScreen_138(currentLoopX_137)(0)(bldgs_23)(1);}();
    var cityShapes_113=function(){
    switch(_0_112[0]){
     case 'Tuple2':
     return _0_112[1];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 109, Column 13)");}();
    var cityHitMasks_114=function(){
    switch(_0_112[0]){
     case 'Tuple2':
     return _0_112[2];
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 109, Column 13)");}();
    var headCenter_115=['Tuple2',292,410];
    var monsterShapes_116=['Cons',robotElt_104,['Nil']];
    var laserShapes_117=(mouseDown_101?function(){
     var dx_154=(fst(mousePosition_102)-fst(headCenter_115));
     var dy_155=(snd(mousePosition_102)-snd(headCenter_115));
     var dist_156=sqrt(((dx_154*dx_154)+(dy_155*dy_155)));
     var angle_157=atan2(dy_155)(dx_154);
     var mx_158=cos((angle_157+(pi/2)));
     var my_159=sin((angle_157+(pi/2)));
     var size_160=10;
     var p1_161=['Tuple2',(size_160*mx_158),(size_160*my_159)];
     var p2_162=['Tuple2',(0-(size_160*mx_158)),(0-(size_160*my_159))];
     return ['Cons',filled(fireRed_33)(polygon(['Cons',p1_161,['Cons',['Tuple2',0,0],['Cons',p2_162,['Cons',['Tuple2',dx_154,dy_155],['Nil']]]]])(headCenter_115)),['Cons',filled(fireRed_33)(circle(size_160)(headCenter_115)),['Nil']]];}():['Nil']);
    var oldVisibleFires_121=filter(fireVisible_119)(oldFires_103);
    var newFire_122={
      since : [t_100],
      worldX : [(mouseX_106+distanceTravelled_111)],
      worldY : [mouseY_107],
      _ : [true]};
    var mouseOverBuilding_123=any(isWithin(mousePosition_102))(cityHitMasks_114);
    var mouseOverFire_124=any(isWithin(mousePosition_102))(map(fireShape_120)(oldVisibleFires_121));
    var timeSinceLastFire_125=function(){
    switch(oldFires_103[0]){
     case 'Cons':
     return (t_100-function(r){
      return '_' in r ? r.since[0] : r.since;}(oldFires_103[1]));
     case 'Nil':
     return 1000;
    }
    throw new Error("Non-exhaustive pattern match in case expression (Line 152, Column 29)");}();
    var newFires_126=((mouseDown_101&&(mouseOverBuilding_123&&(not(mouseOverFire_124)&&(compare(timeSinceLastFire_125)(333)[0] === 'GT'))))?['Cons',newFire_122,oldVisibleFires_121]:oldVisibleFires_121);
    var newState_127={
      oldFires : [newFires_126],
      _ : [true]};
    var fireShapes_128=map(fireShape_120)(newFires_126);
    var shapes_129=Value.append(monsterShapes_116,Value.append(laserShapes_117,Value.append(cityShapes_113,fireShapes_128)));
    var gameView_130=collage(gameWidth_108)(gameHeight_109)(shapes_129);
    var newView_132=gameView_130;
    function fireRadius_118(since_163){
     return (sqrt((t_100-since_163))*speed_110);}
    function fireVisible_119(_0_164){
     return function(){
      var worldX_165=function(r){
       return '_' in r ? r.worldX[0] : r.worldX;}(_0_164);
      var since_166=function(r){
       return '_' in r ? r.since[0] : r.since;}(_0_164);
      return (compare(worldX_165)((distanceTravelled_111-fireRadius_118(since_166)))[0] === 'GT');}();}
    function fireShape_120(_0_167){
     return function(){
      var worldX_168=function(r){
       return '_' in r ? r.worldX[0] : r.worldX;}(_0_167);
      var worldY_169=function(r){
       return '_' in r ? r.worldY[0] : r.worldY;}(_0_167);
      var since_170=function(r){
       return '_' in r ? r.since[0] : r.since;}(_0_167);
      return function(){
       var radius_171=fireRadius_118(since_170);
       var x_172=(worldX_168-distanceTravelled_111);
       return firePolygon_30(x_172)(worldY_169)(radius_171);}();}();}
    function debugView_131(_0_175){
     return function(){
     switch(_0_175[0]){
      case 'Tuple0':
      return function(){
       var debugTextView_176=$op['>>>'](show)($op['>>>'](toText)($op['>>>'](Text.color(green))($op['>>>'](Text.monospace)(Graphics.text))));
       var views_177=['Cons',debugTextView_176(input_97),['Cons',debugTextView_176(oldState_98),['Cons',debugTextView_176(newState_127),['Cons',debugTextView_176(bldgs_23),['Nil']]]]];
       return flow(down)(views_177);}();
     }
     throw new Error("Non-exhaustive pattern match in case expression (Line 165, Column 13)");}();}
    return ['Tuple2',newView_132,newState_127];}();};}
 function mkjselts_35(r_178){
  return {
    robot : [r_178],
    _ : [true]};}
 function mkinput_37(t_179){
  return function(mouseDown_180){
   return function(mousePosition_181){
    return function(jselts_182){
     return function(){
      var r_183={
        jselts : [jselts_182],
        mouseDown : [mouseDown_180],
        mousePosition : [mousePosition_181],
        t : [t_179],
        _ : [true]};
      return r_183;}();};};};}
 var robotAnimation_1=lift(castJSElementToElement(262)(373))(jsRobotAnimation_0);
 var bldgSheet_9={
   height : [400],
   src : [Value.str('images/CityBurner_Buildings_V2.png')],
   width : [1800],
   _ : [true]};
 var b1_11=['Tuple5',0,249,141,151,['Cons',['Tuple2',3,398],['Cons',['Tuple2',4,325],['Cons',['Tuple2',13,320],['Cons',['Tuple2',13,293],['Cons',['Tuple2',96,294],['Cons',['Tuple2',94,308],['Cons',['Tuple2',112,320],['Cons',['Tuple2',112,340],['Cons',['Tuple2',138,341],['Cons',['Tuple2',137,399],['Nil']]]]]]]]]]]];
 var b2_12=['Tuple5',178,61,86,339,['Cons',['Tuple2',180,400],['Cons',['Tuple2',180,193],['Cons',['Tuple2',190,189],['Cons',['Tuple2',190,149],['Cons',['Tuple2',203,139],['Cons',['Tuple2',203,118],['Cons',['Tuple2',240,118],['Cons',['Tuple2',241,149],['Cons',['Tuple2',260,150],['Cons',['Tuple2',262,194],['Cons',['Tuple2',262,400],['Nil']]]]]]]]]]]]];
 var b3_13=['Tuple5',307,204,120,196,['Cons',['Tuple2',310,400],['Cons',['Tuple2',310,299],['Cons',['Tuple2',342,268],['Cons',['Tuple2',342,229],['Cons',['Tuple2',348,229],['Cons',['Tuple2',349,214],['Cons',['Tuple2',366,209],['Cons',['Tuple2',388,220],['Cons',['Tuple2',390,226],['Cons',['Tuple2',403,227],['Cons',['Tuple2',404,233],['Cons',['Tuple2',411,243],['Cons',['Tuple2',424,250],['Cons',['Tuple2',421,259],['Cons',['Tuple2',425,265],['Cons',['Tuple2',425,400],['Nil']]]]]]]]]]]]]]]]]];
 var b4_14=['Tuple5',479,186,86,214,['Cons',['Tuple2',483,400],['Cons',['Tuple2',486,226],['Cons',['Tuple2',507,197],['Cons',['Tuple2',557,214],['Cons',['Tuple2',557,286],['Cons',['Tuple2',560,286],['Cons',['Tuple2',561,400],['Nil']]]]]]]]];
 var b5_15=['Tuple5',632,232,86,168,['Cons',['Tuple2',634,400],['Cons',['Tuple2',634,255],['Cons',['Tuple2',643,251],['Cons',['Tuple2',643,237],['Cons',['Tuple2',655,237],['Cons',['Tuple2',663,247],['Cons',['Tuple2',709,242],['Cons',['Tuple2',714,400],['Nil']]]]]]]]]];
 var b6_16=['Tuple5',782,285,74,115,['Cons',['Tuple2',784,400],['Cons',['Tuple2',784,295],['Cons',['Tuple2',854,295],['Cons',['Tuple2',853,400],['Nil']]]]]];
 var b7_17=['Tuple5',904,322,143,78,['Cons',['Tuple2',906,400],['Cons',['Tuple2',906,338],['Cons',['Tuple2',926,324],['Cons',['Tuple2',951,339],['Cons',['Tuple2',951,388],['Cons',['Tuple2',957,388],['Cons',['Tuple2',957,338],['Cons',['Tuple2',992,323],['Cons',['Tuple2',1013,337],['Cons',['Tuple2',1036,331],['Cons',['Tuple2',1046,340],['Cons',['Tuple2',1045,400],['Nil']]]]]]]]]]]]]];
 var b8_18=['Tuple5',1057,8,120,392,['Cons',['Tuple2',1059,400],['Cons',['Tuple2',1059,221],['Cons',['Tuple2',1065,221],['Cons',['Tuple2',1066,175],['Cons',['Tuple2',1073,174],['Cons',['Tuple2',1073,163],['Cons',['Tuple2',1086,152],['Cons',['Tuple2',1086,124],['Cons',['Tuple2',1091,120],['Cons',['Tuple2',1092,101],['Cons',['Tuple2',1099,100],['Cons',['Tuple2',1111,80],['Cons',['Tuple2',1113,9],['Cons',['Tuple2',1117,81],['Cons',['Tuple2',1128,99],['Cons',['Tuple2',1137,99],['Cons',['Tuple2',1145,109],['Cons',['Tuple2',1145,131],['Cons',['Tuple2',1153,132],['Cons',['Tuple2',1157,136],['Cons',['Tuple2',1160,145],['Cons',['Tuple2',1161,161],['Cons',['Tuple2',1172,161],['Cons',['Tuple2',1173,179],['Cons',['Tuple2',1173,400],['Nil']]]]]]]]]]]]]]]]]]]]]]]]]]];
 var b9_19=['Tuple5',1206,228,133,172,['Cons',['Tuple2',1208,400],['Cons',['Tuple2',1210,243],['Cons',['Tuple2',1234,243],['Cons',['Tuple2',1234,229],['Cons',['Tuple2',1245,229],['Cons',['Tuple2',1244,241],['Cons',['Tuple2',1329,244],['Cons',['Tuple2',1333,400],['Nil']]]]]]]]]];
 var ba_20=['Tuple5',1374,25,90,375,['Cons',['Tuple2',1376,400],['Cons',['Tuple2',1376,299],['Cons',['Tuple2',1382,270],['Cons',['Tuple2',1383,166],['Cons',['Tuple2',1386,166],['Cons',['Tuple2',1386,136],['Cons',['Tuple2',1409,89],['Cons',['Tuple2',1414,86],['Cons',['Tuple2',1415,25],['Cons',['Tuple2',1423,87],['Cons',['Tuple2',1433,87],['Cons',['Tuple2',1440,122],['Cons',['Tuple2',1445,122],['Cons',['Tuple2',1462,197],['Cons',['Tuple2',1462,209],['Cons',['Tuple2',1457,214],['Cons',['Tuple2',1457,263],['Cons',['Tuple2',1462,267],['Cons',['Tuple2',1462,290],['Cons',['Tuple2',1457,296],['Cons',['Tuple2',1458,348],['Cons',['Tuple2',1463,351],['Cons',['Tuple2',1463,400],['Nil']]]]]]]]]]]]]]]]]]]]]]]]];
 var bb_21=['Tuple5',1504,294,140,106,['Cons',['Tuple2',1509,400],['Cons',['Tuple2',1509,337],['Cons',['Tuple2',1513,337],['Cons',['Tuple2',1515,317],['Cons',['Tuple2',1576,313],['Cons',['Tuple2',1579,316],['Cons',['Tuple2',1579,357],['Cons',['Tuple2',1583,355],['Cons',['Tuple2',1586,319],['Cons',['Tuple2',1630,318],['Cons',['Tuple2',1630,337],['Cons',['Tuple2',1641,336],['Cons',['Tuple2',1641,400],['Nil']]]]]]]]]]]]]]];
 var bc_22=['Tuple5',1656,324,134,76,['Cons',['Tuple2',1660,400],['Cons',['Tuple2',1660,368],['Cons',['Tuple2',1667,362],['Cons',['Tuple2',1665,341],['Cons',['Tuple2',1687,326],['Cons',['Tuple2',1704,342],['Cons',['Tuple2',1724,328],['Cons',['Tuple2',1746,342],['Cons',['Tuple2',1762,325],['Cons',['Tuple2',1785,343],['Cons',['Tuple2',1785,400],['Nil']]]]]]]]]]]]];
 var bldgs_23=map(bldg_10)(['Cons',b1_11,['Cons',b2_12,['Cons',b3_13,['Cons',b4_14,['Cons',b5_15,['Cons',b6_16,['Cons',b7_17,['Cons',b8_18,['Cons',b9_19,['Cons',ba_20,['Cons',bb_21,['Cons',bc_22,['Nil']]]]]]]]]]]]]);
 var bldgCount_24=length(bldgs_23);
 var allBldgsWidth_25=foldr(function(bldg_81){
  return function(w_82){
   return (function(r){
    return '_' in r ? r.width[0] : r.width;}(bldg_81)+w_82);};})(0)(bldgs_23);
 var firePattern_26=['Cons',9,['Cons',3,['Cons',10,['Cons',2,['Cons',7,['Cons',2,['Cons',8,['Cons',2,['Cons',6,['Cons',1,['Cons',4,['Cons',1,['Cons',9,['Cons',2,['Cons',6,['Cons',1,['Cons',8,['Cons',3,['Cons',7,['Cons',1,['Nil']]]]]]]]]]]]]]]]]]]]];
 var firePatternLength_27=length(firePattern_26);
 var fireAngles_28=map(function(a_83){
  return ((a_83*4.0e-2)*pi);})(['Cons',4,['Cons',7,['Cons',2,['Cons',9,['Cons',5,['Cons',4,['Cons',3,['Cons',5,['Cons',3,['Cons',2,['Cons',4,['Cons',2,['Cons',3,['Cons',1,['Cons',9,['Cons',4,['Cons',2,['Cons',5,['Cons',1,['Cons',4,['Cons',3,['Cons',2,['Nil']]]]]]]]]]]]]]]]]]]]]]]);
 var fireAnglesLength_29=length(fireAngles_28);
 var laserRed_32=rgba(200)(50)(50)(0.75);
 var fireRed_33=rgba(200)(50)(50)(0.3);
 var jselts_36=lift(mkjselts_35)(robotAnimation_1);
 var input_38=lift4(mkinput_37)(every(0.1))(Mouse.isDown)(Mouse.position)(jselts_36);
 var startState_39={
   buildings : [['Nil']],
   oldFires : [['Nil']],
   _ : [true]};
 var gameAutomaton_40=init$(startState_39)(updateGame_34);
 var main_41=Automaton.run(gameAutomaton_40)(input_38);
 return {$op : {'>>>' : $op['>>>'], '|>' : $op['|>']},
 jsRobotAnimation:jsRobotAnimation_0,
 robotAnimation:robotAnimation_1,
 nthMaybe:nthMaybe_2,
 nth:nth_3,
 takeWhile:takeWhile_4,
 dropWhile:dropWhile_5,
 half:half_6,
 cropImage:cropImage_7,
 crop:crop_8,
 bldgSheet:bldgSheet_9,
 bldg:bldg_10,
 b1:b1_11,
 b2:b2_12,
 b3:b3_13,
 b4:b4_14,
 b5:b5_15,
 b6:b6_16,
 b7:b7_17,
 b8:b8_18,
 b9:b9_19,
 ba:ba_20,
 bb:bb_21,
 bc:bc_22,
 bldgs:bldgs_23,
 bldgCount:bldgCount_24,
 allBldgsWidth:allBldgsWidth_25,
 firePattern:firePattern_26,
 firePatternLength:firePatternLength_27,
 fireAngles:fireAngles_28,
 fireAnglesLength:fireAnglesLength_29,
 firePolygon:firePolygon_30,
 nthBuilding:nthBuilding_31,
 laserRed:laserRed_32,
 fireRed:fireRed_33,
 updateGame:updateGame_34,
 mkjselts:mkjselts_35,
 jselts:jselts_36,
 mkinput:mkinput_37,
 input:input_38,
 startState:startState_39,
 gameAutomaton:gameAutomaton_40,
 main:main_41};}();
Elm.main=function(){
 return Elm.Main.main;};
} catch (e) {
Elm.main=function() {
var msg = ('<br/><h2>Your browser may not be supported. Are you using a modern browser?</h2>' + '<br/><span style="color:grey">Runtime Error in Main module:<br/>' + e + '<br/><br/>The problem may stem from an improper usage of:<br/>Text.color, atan2, circle, every, fst, init\', snd</span>');
document.body.innerHTML = Elm.Text.monospace(msg);throw e;};}