// Добыча золота  http://informatics.mccme.ru/mod/statements/view3.php?id=6988&chapterid=1974 

"use strict";

//productionPerOneMine < 100
//buildTime < 10 
//buildCost < 10000
//turnsToEnd < 100

function goldGame( options ) {
  
  function checkBuildTimers() {
    if( buildTimers.length ) {
      for( var j = 0; j < buildTimers.length; j++ ) {
        if( buildTimers[j].timer === 0 ) {
          mines = mines + buildTimers[j].minesPlanned;
          buildTimers.splice( j, 1 );
        }
        else {
          buildTimers[j].timer = buildTimers[j].timer - 1;
        }
      }
    }
    else {
      return;
    }
  }
  
  function build() {
    
    function possibleBuildCount() {
      return Math.floor( gold / options.buildCost );
    }
    
    var minesToBuild = possibleBuildCount();
    buildTimers.push({
      timer: options.buildTime,
      minesPlanned: minesToBuild
    })
    gold = gold - ( options.buildCost * minesToBuild );
  }
  
  
  var mines = 1;
  var gold = 0;
  var buildTimers = [];
  
  for( var turn = 0; turn < options.turnsToEnd; turn++ ) {
    checkBuildTimers();
    if( gold >= options.buildCost && turn < options.turnsToEnd - options.buildTime ) {
      build();
    }
    gold += mines * options.production; 
  }
  
  console.log( mines, gold );
}

goldGame({
  production: 100,
  buildTime: 5,
  buildCost: 250,
  turnsToEnd: 15
});
