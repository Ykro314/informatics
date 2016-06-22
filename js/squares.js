// Разрезание на квадраты    http://informatics.mccme.ru/mod/statements/view3.php?id=6988&chapterid=1465

function squares( a, b ) {
  
  function slice( a, b ) {
    
    function sortSides() {
      if( a >= b ) {
        return [a, b];
      }
      else {
        return [b, a];
      }
    }

    var sides = sortSides();
    if( sides[0] % sides[1] === 0 ) {
      squaresCount += sides[0] /sides[1];
      return;
    } 
    else {
      squaresCount += 1;
      slice( sides[0] - sides[1], sides[1] );
    }
  }
  var squaresCount = 0;
  slice( a, b );
  return squaresCount;
}

//console.log( squares( 5, 8 ) );