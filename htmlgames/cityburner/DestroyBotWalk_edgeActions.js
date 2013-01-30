
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){sym.play(500);});
//Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
      });
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

//Edge symbol: 'Robot'
(function(symbolName){})("Robot");
   //Edge symbol end:'Robot'

   //=========================================================
   
   //Edge symbol: 'Buildings'
   (function(symbolName) {   
   
   })("Buildings");
   //Edge symbol end:'Buildings'

})(jQuery, AdobeEdge, "ROBOT-WALK");