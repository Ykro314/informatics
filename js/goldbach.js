"use strict"
function createSimpleNumbersArray( n, k ) {
  
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

//findSimple( 2, 113 );


function goldbach( number ) {
  function checkSimpleNumbers( interval ) {
    if( interval < 2 ) {
      return false;
    }
    else {
      for( var i = 0; i < simples.length; i++ ) {
        if ( interval < simples[i] ) {
          return false;
        }
        else if( interval === simples[i] ) {
          return simples[i];
        }
      }
    }
  }
  
  if( number % 2 !== 0) {
    return "not Odd";
  }
  var diff, firstNumber, secondNumber;
  
  var simples = createSimpleNumbersArray( 2, number );
  for( var i = simples.length - 1; i >= 0; i-- ) {
    diff = number - simples[i];
    firstNumber = simples[i];
    secondNumber = checkSimpleNumbers( diff );
    if( secondNumber ) {
      return [ firstNumber, secondNumber ];
    }
  }
}

//console.log( goldbach( 250 ) );