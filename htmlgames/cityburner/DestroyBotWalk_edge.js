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
            id:'Robot',
            type:'rect',
            rect:['0px','294px','auto','auto','auto','auto']
         }],
         symbolInstances: [
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
            ["style", "left", '0px'],
            ["style", "top", '294px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
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
      t: 'group',
      r: ['171px','255px','121','113','auto','auto'],
      c: [
      {
         id: 'Mid_Leg',
         t: 'group',
         r: ['-18','107','105','118','auto','auto'],
         c: [
         {
            id: 'Lower_Leg',
            t: 'group',
            r: ['18px','66px','151','63','auto','auto'],
            c: [
            {
               id: 'Foot',
               t: 'group',
               r: ['-86','-410','251','300','auto','auto'],
               c: [
               {
                  id: 'foot2',
                  t: 'image',
                  r: ['86px','410px','151px','63px','auto','auto'],
                  f: ['rgba(0,0,0,0)','images/foot.png','0px','0px']
               }]
            },
            {
               id: 'bot_leg2',
               t: 'image',
               r: ['-18px','-66px','105px','118px','auto','auto'],
               f: ['rgba(0,0,0,0)','images/bot%20leg.png','0px','0px']
            }]
         },
         {
            id: 'mid_leg2',
            t: 'image',
            r: ['18px','-35px','114px','84px','auto','auto'],
            f: ['rgba(0,0,0,0)','images/mid%20leg.png','0px','0px']
         }]
      },
      {
         id: 'top_leg2',
         t: 'image',
         r: ['0px','0px','121px','113px','auto','auto'],
         f: ['rgba(0,0,0,0)','images/top%20leg.png','0px','0px']
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
         "${_mid_leg2}": [
            ["style", "top", '-34.65px'],
            ["style", "left", '18.4px'],
            ["style", "-webkit-transform-origin", [86,22], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86,22],{valueTemplate:'@@0@@% @@1@@%'}]
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
         "${symbolSelector}": [
            ["style", "height", '499.87px'],
            ["style", "width", '402.98px']
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
         "${_Foot}": [
            ["transform", "rotateZ", '0deg']
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
            { id: "dg1", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '7deg', { fromValue: '23deg'}], position: 0, duration: 101 },
            { id: "dg2", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '2deg', { fromValue: '7deg'}], position: 101, duration: 98 },
            { id: "dg3", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '37deg', { fromValue: '2deg'}], position: 199, duration: 373 },
            { id: "dg4", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '-3deg', { fromValue: '37deg'}], position: 572, duration: 260 },
            { id: "dg5", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '23deg', { fromValue: '-3deg'}], position: 832, duration: 168 },
            { id: "dg25", tween: [ "transform", "${_foot2}", "rotateZ", '9deg', { fromValue: '9deg'}], position: 0, duration: 0 },
            { id: "dg26", tween: [ "transform", "${_foot2}", "rotateZ", '-1deg', { fromValue: '9deg'}], position: 101, duration: 98 },
            { id: "dg27", tween: [ "transform", "${_foot2}", "rotateZ", '-26deg', { fromValue: '-1deg'}], position: 199, duration: 129 },
            { id: "dg28", tween: [ "transform", "${_foot2}", "rotateZ", '-39deg', { fromValue: '-26deg'}], position: 328, duration: 172 },
            { id: "dg29", tween: [ "transform", "${_foot2}", "rotateZ", '-16deg', { fromValue: '-39deg'}], position: 500, duration: 332 },
            { id: "dg30", tween: [ "transform", "${_foot2}", "rotateZ", '9deg', { fromValue: '-16deg'}], position: 832, duration: 168 },
            { id: "dg31", tween: [ "transform", "${_Leg}", "rotateZ", '30deg', { fromValue: '-20deg'}], position: 0, duration: 500 },
            { id: "dg32", tween: [ "transform", "${_Leg}", "rotateZ", '-20deg', { fromValue: '30deg'}], position: 500, duration: 500 },
            { id: "dg15", tween: [ "style", "${_top_leg2}", "-webkit-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid293", tween: [ "style", "${_top_leg2}", "-moz-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid294", tween: [ "style", "${_top_leg2}", "-ms-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "style", "${_top_leg2}", "msTransformOrigin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "eid296", tween: [ "style", "${_top_leg2}", "-o-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 0, duration: 0 },
            { id: "dg33", tween: [ "style", "${_mid_leg2}", "-webkit-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid297", tween: [ "style", "${_mid_leg2}", "-moz-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid298", tween: [ "style", "${_mid_leg2}", "-ms-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid299", tween: [ "style", "${_mid_leg2}", "msTransformOrigin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "eid300", tween: [ "style", "${_mid_leg2}", "-o-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 0, duration: 0 },
            { id: "dg20", tween: [ "style", "${_foot2}", "-webkit-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid301", tween: [ "style", "${_foot2}", "-moz-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid302", tween: [ "style", "${_foot2}", "-ms-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid303", tween: [ "style", "${_foot2}", "msTransformOrigin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "eid304", tween: [ "style", "${_foot2}", "-o-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 0, duration: 0 },
            { id: "dg6", tween: [ "style", "${_bot_leg2}", "-webkit-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid305", tween: [ "style", "${_bot_leg2}", "-moz-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid306", tween: [ "style", "${_bot_leg2}", "-ms-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid307", tween: [ "style", "${_bot_leg2}", "msTransformOrigin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "eid308", tween: [ "style", "${_bot_leg2}", "-o-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 0, duration: 0 },
            { id: "dg11", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-1deg', { fromValue: '-12deg'}], position: 0, duration: 199 },
            { id: "dg12", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-4deg', { fromValue: '-1deg'}], position: 328, duration: 172 },
            { id: "dg13", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '20deg', { fromValue: '-4deg'}], position: 500, duration: 250 },
            { id: "dg14", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-12deg', { fromValue: '20deg'}], position: 750, duration: 250 }         ]
      }
   }
},
"Rear_Leg": {
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
      t: 'group',
      r: ['171px','255px','121','113','auto','auto'],
      c: [
      {
         id: 'Mid_Leg',
         t: 'group',
         r: ['-18','107','105','118','auto','auto'],
         c: [
         {
            id: 'Lower_Leg',
            t: 'group',
            r: ['18px','66px','151','63','auto','auto'],
            c: [
            {
               id: 'Foot',
               t: 'group',
               r: ['-86','-410','251','300','auto','auto'],
               c: [
               {
                  id: 'foot2',
                  t: 'image',
                  r: ['86px','410px','151px','63px','auto','auto'],
                  f: ['rgba(0,0,0,0)','images/foot.png','0px','0px']
               }]
            },
            {
               id: 'bot_leg2',
               t: 'image',
               r: ['-18px','-66px','105px','118px','auto','auto'],
               f: ['rgba(0,0,0,0)','images/bot%20leg.png','0px','0px']
            }]
         },
         {
            id: 'mid_leg2',
            t: 'image',
            r: ['18px','-35px','114px','84px','auto','auto'],
            f: ['rgba(0,0,0,0)','images/mid%20leg.png','0px','0px']
         }]
      },
      {
         id: 'top_leg2',
         t: 'image',
         r: ['0px','0px','121px','113px','auto','auto'],
         f: ['rgba(0,0,0,0)','images/top%20leg.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Lower_Leg}": [
            ["style", "top", '66.35px'],
            ["style", "-webkit-transform-origin", [17,-67], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [17,-67],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '18.48px'],
            ["transform", "rotateZ", '23deg']
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
         "${_bot_leg2}": [
            ["style", "top", '-66.35px'],
            ["style", "left", '-18.48px'],
            ["style", "-webkit-transform-origin", [43,20], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [43,20],{valueTemplate:'@@0@@% @@1@@%'}]
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
         "${symbolSelector}": [
            ["style", "height", '499.87px'],
            ["style", "width", '402.98px']
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
         "${_Foot}": [
            ["transform", "rotateZ", '0deg']
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
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "dg38", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '7deg', { fromValue: '23deg'}], position: 500, duration: 101 },
            { id: "dg39", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '2deg', { fromValue: '7deg'}], position: 601, duration: 98 },
            { id: "dg40", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '37deg', { fromValue: '2deg'}], position: 699, duration: 373 },
            { id: "dg41", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '-3deg', { fromValue: '37deg'}], position: 1072, duration: 260 },
            { id: "dg42", tween: [ "transform", "${_Lower_Leg}", "rotateZ", '23deg', { fromValue: '-3deg'}], position: 1332, duration: 168 },
            { id: "dg64", tween: [ "transform", "${_foot2}", "rotateZ", '9deg', { fromValue: '9deg'}], position: 500, duration: 0 },
            { id: "dg65", tween: [ "transform", "${_foot2}", "rotateZ", '-1deg', { fromValue: '9deg'}], position: 601, duration: 98 },
            { id: "dg66", tween: [ "transform", "${_foot2}", "rotateZ", '-26deg', { fromValue: '-1deg'}], position: 699, duration: 129 },
            { id: "dg67", tween: [ "transform", "${_foot2}", "rotateZ", '-39deg', { fromValue: '-26deg'}], position: 828, duration: 172 },
            { id: "dg68", tween: [ "transform", "${_foot2}", "rotateZ", '-16deg', { fromValue: '-39deg'}], position: 1000, duration: 332 },
            { id: "dg69", tween: [ "transform", "${_foot2}", "rotateZ", '9deg', { fromValue: '-16deg'}], position: 1332, duration: 168 },
            { id: "dg43", tween: [ "transform", "${_Leg}", "rotateZ", '30deg', { fromValue: '-20deg'}], position: 500, duration: 500 },
            { id: "dg44", tween: [ "transform", "${_Leg}", "rotateZ", '-20deg', { fromValue: '30deg'}], position: 1000, duration: 500 },
            { id: "dg70", tween: [ "style", "${_bot_leg2}", "-webkit-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 500, duration: 0 },
            { id: "eid309", tween: [ "style", "${_bot_leg2}", "-moz-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 500, duration: 0 },
            { id: "eid310", tween: [ "style", "${_bot_leg2}", "-ms-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 500, duration: 0 },
            { id: "eid311", tween: [ "style", "${_bot_leg2}", "msTransformOrigin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 500, duration: 0 },
            { id: "eid312", tween: [ "style", "${_bot_leg2}", "-o-transform-origin", [43,20], { valueTemplate: '@@0@@% @@1@@%', fromValue: [43,20]}], position: 500, duration: 0 },
            { id: "dg54", tween: [ "style", "${_mid_leg2}", "-webkit-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 500, duration: 0 },
            { id: "eid313", tween: [ "style", "${_mid_leg2}", "-moz-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 500, duration: 0 },
            { id: "eid314", tween: [ "style", "${_mid_leg2}", "-ms-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 500, duration: 0 },
            { id: "eid315", tween: [ "style", "${_mid_leg2}", "msTransformOrigin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 500, duration: 0 },
            { id: "eid316", tween: [ "style", "${_mid_leg2}", "-o-transform-origin", [86,22], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86,22]}], position: 500, duration: 0 },
            { id: "dg59", tween: [ "style", "${_foot2}", "-webkit-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 500, duration: 0 },
            { id: "eid317", tween: [ "style", "${_foot2}", "-moz-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 500, duration: 0 },
            { id: "eid318", tween: [ "style", "${_foot2}", "-ms-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 500, duration: 0 },
            { id: "eid319", tween: [ "style", "${_foot2}", "msTransformOrigin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 500, duration: 0 },
            { id: "eid320", tween: [ "style", "${_foot2}", "-o-transform-origin", [35,47], { valueTemplate: '@@0@@% @@1@@%', fromValue: [35,47]}], position: 500, duration: 0 },
            { id: "dg49", tween: [ "style", "${_top_leg2}", "-webkit-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 500, duration: 0 },
            { id: "eid321", tween: [ "style", "${_top_leg2}", "-moz-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 500, duration: 0 },
            { id: "eid322", tween: [ "style", "${_top_leg2}", "-ms-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 500, duration: 0 },
            { id: "eid323", tween: [ "style", "${_top_leg2}", "msTransformOrigin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 500, duration: 0 },
            { id: "eid324", tween: [ "style", "${_top_leg2}", "-o-transform-origin", [30,26], { valueTemplate: '@@0@@% @@1@@%', fromValue: [30,26]}], position: 500, duration: 0 },
            { id: "dg45", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-1deg', { fromValue: '-12deg'}], position: 500, duration: 199 },
            { id: "dg46", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-4deg', { fromValue: '-1deg'}], position: 828, duration: 172 },
            { id: "dg47", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '20deg', { fromValue: '-4deg'}], position: 1000, duration: 250 },
            { id: "dg48", tween: [ "transform", "${_Mid_Leg}", "rotateZ", '-12deg', { fromValue: '20deg'}], position: 1250, duration: 250 }         ]
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
         rect: ['0px','0px','251px','300px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/body.png','0px','0px']
      },
      {
         id: 'Rear_Leg',
         type: 'rect',
         rect: ['145','345','auto','auto','auto','auto']
      },
      {
         id: 'front_leg',
         type: 'rect',
         rect: ['-85','-18','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'Rear_Leg',
      symbolName: 'Rear_Leg'
   },
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
            ["style", "left", '100.89px'],
            ["style", "width", '92.87px']
         ],
         "${_Rear_Leg}": [
            ["style", "top", '61.5px'],
            ["style", "opacity", '0.73'],
            ["style", "left", '-100.77px']
         ],
         "${symbolSelector}": [
            ["style", "height", '573.68px'],
            ["style", "width", '403.45px']
         ],
         "${_body3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_front_leg}": [
            ["style", "left", '-100.89px'],
            ["style", "top", '61.5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "dg75", tween: [ "style", "${_Group7}", "top", '12.31px', { fromValue: '12.31px'}], position: 250, duration: 0 },
            { id: "dg81", tween: [ "style", "${_Rear_Leg}", "left", '-100.77px', { fromValue: '-100.77px'}], position: 1103, duration: 0 },
            { id: "dg82", tween: [ "style", "${_front_leg}", "left", '-100.89px', { fromValue: '-100.89px'}], position: 1500, duration: 0 },
            { id: "dg78", tween: [ "transform", "${_Group7}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0 },
            { id: "dg80", tween: [ "style", "${_Rear_Leg}", "opacity", '0.73', { fromValue: '0.73'}], position: 0, duration: 0 },
            { id: "dg79", tween: [ "style", "${_Rear_Leg}", "top", '61.5px', { fromValue: '61.5px'}], position: 1103, duration: 0 },
            { id: "dg83", tween: [ "style", "${_front_leg}", "top", '61.5px', { fromValue: '61.5px'}], position: 1500, duration: 0 },
            { id: "dg77", tween: [ "style", "${_Group7}", "width", '92.87px', { fromValue: '92.87px'}], position: 1500, duration: 0 },
            { id: "dg76", tween: [ "style", "${_Group7}", "height", '111px', { fromValue: '111px'}], position: 1500, duration: 0 }         ]
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
