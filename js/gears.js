function gears( numbers ) {
  function prepareNumbers( string ) {
    var array = string.split( " " );
    return array.sort( function( a, b ){
      return b - a;
    });
  }
  function check( a, b ) {
    if( a > 100000000 ) {
      minSpinCount = "too much";
      return;
    } 
    else if( a % b == 0 ) {
      minSpinCount = a;
      return a; 
    }
    else {
      check( a + n, b );
    }
  }
  var minSpinCount = null;
  var numbersArray = prepareNumbers( numbers );
  var n = +numbersArray[0];
  var k = +numbersArray[1];
  
  if( n <= 1 || k <= 1 ) {  
    return "Gear must have some teeth";
  }
  else {
    check( n, k );
    return minSpinCount;
  }
  
}

//console.log( gears( "8 19" ) );

