
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){sym.play(500);});
//Edge binding end
})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Leg'
(function(symbolName){Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){sym.play(0);});
//Edge binding end
})("Leg");
   //Edge symbol end:'Leg'

//=========================================================

//Edge symbol: 'Leg_1'
(function(symbolName){Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){sym.play(500);});
//Edge binding end
})("Rear_Leg");
   //Edge symbol end:'Rear_Leg'

//=========================================================

//Edge symbol: 'Robot'
(function(symbolName){})("Robot");
   //Edge symbol end:'Robot'

})(jQuery, AdobeEdge, "ROBOT-WALK");