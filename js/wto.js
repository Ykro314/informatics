function wto( n, m, quantity ) {
  var usedPlates = 0;
  
  function calcTriangle( n, m ) {
    
    function sort( a, b ) {
      if( a >= b ) {
        return [a, b];
      }
      else {
        return [b, a];
      }
    }
    
    if( n < 2 || m < 2 ) {
      return;
    }
    var arr = sort( n, m );
    var coef = Math.ceil( arr[0] / arr[1] );
    var nPlates = arr[0] - coef;
    var mPlates = arr[1] - 1 - 1;
    usedPlates += nPlates + mPlates
    calcTriangle( nPlates, mPlates );
  }
  
  calcTriangle( n, m );
  return usedPlates;
}

//console.log( wto( 11, 8, 100 ) );