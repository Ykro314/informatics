function divide( number ) {
  
  function createSimpleNumbersArray( k ) {
    var n = 2;
    function returnIfSimple( currentNumber ) {
      for( var j = 2; j < currentNumber; j++ ) {
        if( i % j === 0 && j !== i ) {
          return false;
        }
      }
      simpleNumbers.push( currentNumber );
      return;
    }

    var simpleNumbers = [];

    for( var i = n; i <= k; i++ ) {
      returnIfSimple( i );
    }
    return simpleNumbers;
  }
  var simpleDividesArray = [];
  var simples = createSimpleNumbersArray( number );
  for( var i = 0; i < simples.length; i++ ) {
    if( number % simples[i] === 0 ) {
      simpleDividesArray.push( simples[i] );
    }  
  }
  return simpleDividesArray;
}

//console.log( divide( 6 ) );