//  Шоколадка http://informatics.mccme.ru/mod/statements/view.php?id=6988

function choko( m, n, k ) {
  
  function createPossibleArray( n, m ) {
    var array = [];

    for( var i = 1; i < m; i++ ) {
      array.push( n * i );
    }
    for( var j = 1; j < n; j++ ) {
      array.push( m * j );
    }
    
    return array;
  }
  
  function checkNumber( array ) {
    for( var i = 0; i < array.length; i++ ) {
      if( k === array[i] ) {
        return "yes";
      }
    }
    return "no";
  }
  
  
  if( k >= m * n ) {
    return "False number";
  }
  var possibleNumbersArray = createPossibleArray( n, m );
  return checkNumber( possibleNumbersArray );
}

//console.log( choko( 1, 2, 2 ) );
