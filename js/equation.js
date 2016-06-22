// Сложное уравнение   http://informatics.mccme.ru/mod/statements/view3.php?id=6988&chapterid=261

function equation( a, b, c, d ) {
  var x;
  if ( c === 0 && d === 0 ) {
    console.log( "false" );
    return;
  }
  x = -b / a;
  console.log( "x = " + x );
  if( ( c * x ) + d !== 0 ) {
    console.log( x + " answer" )
  }
  else {
    console.log( "no" );
  }
} 

//equation( 2, -4, 7, 1 );