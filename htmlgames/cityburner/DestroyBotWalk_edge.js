/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'CityBurner_Bg_V1',
            type:'image',
            rect:['0','0','1024px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"CityBurner_Bg_V1.jpg",'0px','0px']
         },
         {
            id:'Buildings',
            type:'rect',
            rect:['228','0','auto','auto','auto','auto']
         },
         {
            id:'Robot',
            type:'rect',
            rect:['0px','299px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.604','0.577']]
         }],
         symbolInstances: [
         {
            id:'Buildings',
            symbolName:'Buildings'
         },
         {
            id:'Robot',
            symbolName:'Robot'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(156,201,210,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Robot}": [
            ["style", "-webkit-transform-origin", [55.18,21.74], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [55.18,21.74],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [55.18,21.74],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [55.18,21.74],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [55.18,21.74],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.57697'],
            ["transform", "scaleX", '0.60352'],
            ["style", "left", '0px'],
            ["style", "top", '299px']
         ],
         "${_Buildings}": [
            ["style", "left", '8.54px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid1133", tween: [ "style", "${_Buildings}", "left", '8.54px', { fromValue: '8.54px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Leg": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Leg',
      type: 'group',
      rect: ['171px','255px','121','113','auto','auto'],
      c: [
      {
         id: 'Mid_Leg',
         type: 'group',
         rect: ['-18','107','105','118','auto','auto'],
         c: [
         {
            id: 'Lower_Leg',
            type: 'group',
            rect: ['18px','66px','151','63','auto','auto'],
            c: [
            {
               id: 'Foot',
               type: 'group',
               rect: ['-86','-410','251','300','auto','auto'],
               c: [
               {
                  id: 'foot2',
                  type: 'image',
                  rect: ['86px','410px','151px','63px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/foot.png','0px','0px']
               }]
            },
            {
               id: 'bot_leg2',
               type: 'image',
               rect: ['-18px','-66px','105px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/bot%20leg.png','0px','0px']
            }]
         },
         {
            id: 'mid_leg2',
            type: 'image',
            rect: ['18px','-35px','114px','84px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/mid%20leg.png','0px','0px']
         }]
      },
      {
         id: 'top_leg2',
         type: 'image',
         rect: ['0px','0px','121px','113px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/top%20leg.png','0px','0px']
      }]
   },
   {
      id: 'Rear_Leg',
      type: 'group',
      rect: ['171px','255px','121','113','auto','auto'],
      c: [
      {
         id: 'Mid_LegCopy',
         type: 'group',
         rect: ['-18','107','105','118','auto','auto'],
         c: [
         {
            id: 'Lower_LegCopy',
            type: 'group',
            rect: ['18px','66px','151','63','auto','auto'],
            c: [
            {
               id: 'FootCopy',
               type: 'group',
               rect: ['-86','-410','251','300','auto','auto'],
               c: [
               {
                  id: 'foot2Copy',
                  type: 'image',
                  rect: ['86px','410px','151px','63px','auto','auto'],
                  fill: ['rgba(0,0,0,0)','images/foot.png','0px','0px']
               }]
            },
            {
               id: 'bot_leg2Copy',
               type: 'image',
               rect: ['-18px','-66px','105px','118px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/bot%20leg.png','0px','0px']
            }]
         },
         {
            id: 'mid_leg2Copy',
            type: 'image',
            rect: ['18px','-35px','114px','84px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/mid%20leg.png','0px','0px']
         }]
      },
      {
         id: 'top_leg2Copy',
         type: 'image',
         rect: ['0px','0px','121px','113px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/top%20leg.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Lower_Leg}": [
            ["style", "-webkit-transform-origin", [17,-67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '66.35px'],
            ["style", "left", '18.48px'],
            ["transform", "rotateZ", '23deg']
         ],
         "${_Mid_LegCopy}": [
            ["style", "-webkit-transform-origin", [110,-14], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-4deg']
         ],
         "${_top_leg2Copy}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [30,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '499.87px'],
            ["style", "width", '402.98px']
         ],
         "${_mid_leg2}": [
            ["style", "top", '-34.65px'],
            ["style", "left", '18.4px'],
            ["style", "-webkit-transform-origin", [86,22], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Lower_LegCopy}": [
            ["style", "-webkit-transform-origin", [17,-67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '66.35px'],
            ["style", "left", '18.48px'],
            ["transform", "rotateZ", '30deg']
         ],
         "${_Foot}": [
            ["transform", "rotateZ", '0deg']
         ],
         "${_FootCopy}": [
            ["transform", "rotateZ", '0deg']
         ],
         "${_foot2Copy}": [
            ["style", "top", '409.9px'],
            ["style", "-webkit-transform-origin", [35,47], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '86.05px'],
            ["transform", "rotateZ", '-39deg']
         ],
         "${_Rear_Leg}": [
            ["style", "-webkit-transform-origin", [29,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '30deg'],
            ["style", "opacity", '1'],
            ["style", "left", '187.42px'],
            ["style", "top", '173.5px']
         ],
         "${_bot_leg2}": [
            ["style", "top", '-66.35px'],
            ["style", "left", '-18.48px'],
            ["style", "-webkit-transform-origin", [43,20], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Mid_Leg}": [
            ["style", "-webkit-transform-origin", [110,-14], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [110,-14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-12deg']
         ],
         "${_Leg}": [
            ["style", "-webkit-transform-origin", [29,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [29,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '0deg'],
            ["transform", "rotateZ", '-20deg'],
            ["style", "left", '187.42px'],
            ["style", "top", '173.5px']
         ],
         "${_top_leg2}": [
            ["style", "-webkit-transform-origin", [30,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [30,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_mid_leg2Copy}": [
            ["style", "top", '-34.65px'],
            ["style", "left", '18.4px'],
            ["style", "-webkit-transform-origin", [86,22], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_bot_leg2Copy}": [
            ["style", "top", '-66.35px'],
            ["style", "left", '-18.48px'],
            ["style", "-webkit-transform-origin", [43,20], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_foot2}": [
            ["style", "-webkit-transform-origin", [35,47], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [35,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '409.9px'],
            ["style", "left", '86.05px'],
            ["transform", "rotateZ", '9deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid785", tween: [ "transform", "${_foot2Copy}", "rotateZ", '-16deg', { fromValue: '-39deg'}], position: 0, duration: 332 },
            { id: "eid786", tween: [ "transform", "${_foot2Copy}", "rotateZ", '9deg', { fromValue: '-16deg'}], position: 332, duration: 168 },
            { id: "eid787", tween: [ "transform", "${_foot2Copy}", "rotateZ", '-1deg', { fromValue: '9deg'}], position: 500, duration: 199 },
            { id: "eid788", tween: [ "transform", "${_foot2Copy}", "rotateZ", '-26deg', { fromValue: '-1deg'}], position: 699, duration: 129 },
            { id: "eid789", tween: [ "transform", "${_foot2Copy}", "rotateZ", '-39deg', { fromValue: '-26deg'}], position: 828, duration: 172 },
            { id: "dg31", tween: [ "transform", "${_Leg}", "rotateZ", '30deg', { fromValue: '-20deg'}], position: 0, duration: 500 },
            { id: "dg32", tween: [ "transform", "${_Leg}", "rotateZ", '-20deg', { fromValue: '30deg'}], position: 500, duration: 500 },
            { id: "dg15", tween: [ "style", "${_top_leg2}", "-webkit-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid1150", tween: [ "style", "${_top_leg2}", "-moz-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid1151", tween: [ "style", "${_top_leg2}", "-ms-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid1152", tween: [ "style", "${_top_leg2}", "msTransformOrigin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid1153", tween: [ "style", "${_top_leg2}", "-o-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "dg33", tween: [ "style", "${_mid_leg2}", "-webkit-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid1154", tween: [ "style", "${_mid_leg2}", "-moz-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid1155", tween: [ "style", "${_mid_leg2}", "-ms-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid1156", tween: [ "style", "${_mid_leg2}", "msTransformOrigin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid1157", tween: [ "style", "${_mid_leg2}", "-o-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid774", tween: [ "transform", "${_Rear_Leg}", "rotateZ", '-20deg', { fromValue: '30deg'}], position: 0, duration: 500 },
            { id: "eid775", tween: [ "transform", "${_Rear_Leg}", "rotateZ", '30deg', { fromValue: '-20deg'}], position: 500, duration: 500 },
            { id: "dg25", tween: [ "transform", "${_foot2}", "rotateZ", '9deg', { fromValue: '9deg'}], position: 0, duration: 0 },
            { id: "dg26", tween: [ "transform", "${_foot2}", "rotateZ", '-1deg', { fromValue: '9deg'}], position: 101, duration: 98 },
            { id: "dg27", tween: [ "transform", "${_foot2}", "rotateZ", '-26deg', { fromValue: '-1deg'}], position: 199, duration: 129 },
            { id: "dg28", tween: [ "transform", "${_foot2}", "rotateZ", '-39deg', { fromValue: '-26deg'}], position: 328, duration: 172 },
            { id: "dg29", tween: [ "transform", "${_foot2}", "rotateZ", '-16deg', { fromValue: '-39deg'}], position: 500, duration: 332 },
            { id: "dg30", tween: [ "transform", "${_foot2}", "rotateZ", '9deg', { fromValue: '-16deg'}], position: 832, duration: 168 },
            { id: "dg6", tween: [ "style", "${_bot_leg2}", "-webkit-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid1158", tween: [ "style", "${_bot_leg2}", "-moz-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid1159", tween: [ "style", "${_bot_leg2}", "-ms-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid1160", tween: [ "style", "${_bot_leg2}", "msTransformOrigin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid1161", tween: [ "style", "${_bot_leg2}", "-o-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "dg1", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '7deg', { fromValue: '23deg'}], position: 0, duration: 101 },
            { id: "dg2", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '2deg', { fromValue: '7deg'}], position: 101, duration: 98 },
            { id: "dg3", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '37deg', { fromValue: '2deg'}], position: 199, duration: 373 },
            { id: "dg4", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '-3deg', { fromValue: '37deg'}], position: 572, duration: 260 },
            { id: "dg5", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '23deg', { fromValue: '-3deg'}], position: 832, duration: 168 },
            { id: "eid780", tween: [ "transform", "${_Lower_LegCopy}", "rotateZ", '37deg', { fromValue: '30deg'}], position: 0, duration: 72 },
            { id: "eid781", tween: [ "transform", "${_Lower_LegCopy}", "rotateZ", '-3deg', { fromValue: '37deg'}], position: 72, duration: 260 },
            { id: "eid782", tween: [ "transform", "${_Lower_LegCopy}", "rotateZ", '23deg', { fromValue: '-3deg'}], position: 332, duration: 168 },
            { id: "eid783", tween: [ "transform", "${_Lower_LegCopy}", "rotateZ", '2deg', { fromValue: '23deg'}], position: 500, duration: 199 },
            { id: "eid784", tween: [ "transform", "${_Lower_LegCopy}", "rotateZ", '30deg', { fromValue: '2deg'}], position: 699, duration: 301 },
            { id: "dg20", tween: [ "style", "${_foot2}", "-webkit-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid1162", tween: [ "style", "${_foot2}", "-moz-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid1163", tween: [ "style", "${_foot2}", "-ms-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid1164", tween: [ "style", "${_foot2}", "msTransformOrigin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid1165", tween: [ "style", "${_foot2}", "-o-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid776", tween: [ "transform", "${_Mid_LegCopy}", "rotateZ", '20deg', { fromValue: '-4deg'}], position: 0, duration: 250 },
            { id: "eid777", tween: [ "transform", "${_Mid_LegCopy}", "rotateZ", '-12deg', { fromValue: '20deg'}], position: 250, duration: 250 },
            { id: "eid778", tween: [ "transform", "${_Mid_LegCopy}", "rotateZ", '-1deg', { fromValue: '-12deg'}], position: 500, duration: 199 },
            { id: "eid779", tween: [ "transform", "${_Mid_LegCopy}", "rotateZ", '-4deg', { fromValue: '-1deg'}], position: 828, duration: 172 },
            { id: "dg11", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-1deg', { fromValue: '-12deg'}], position: 0, duration: 199 },
            { id: "dg12", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-4deg', { fromValue: '-1deg'}], position: 328, duration: 172 },
            { id: "dg13", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '20deg', { fromValue: '-4deg'}], position: 500, duration: 250 },
            { id: "dg14", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-12deg', { fromValue: '20deg'}], position: 750, duration: 250 }         ]
      }
   }
},
"Robot": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group7',
      type: 'group',
      rect: ['101px','14px','251','300','auto','auto'],
      c: [
      {
         id: 'body3',
         type: 'image',
         rect: ['11px','-2px','251px','300px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.png','0px','0px']
      },
      {
         id: 'front_leg',
         type: 'rect',
         rect: ['-85','-18','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'front_leg',
      symbolName: 'Leg'
   }   ]
   },
   states: {
      "Base State": {
         "${_Group7}": [
            ["style", "top", '12.31px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '111px'],
            ["style", "left", '100.88px'],
            ["style", "width", '92.87px']
         ],
         "${_body3}": [
            ["style", "top", '-2px'],
            ["style", "left", '11px']
         ],
         "${_front_leg}": [
            ["style", "left", '-100.89px'],
            ["style", "top", '61.5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '573.68px'],
            ["style", "width", '403.45px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Buildings": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "ROBOT-WALK");
