// Котлеты  http://informatics.mccme.ru/mod/statements/view3.php?id=6988&chapterid=265

function cotlet( capacity, time, quantity ) {
  var timeForFullFry = time * 2;
  var totalTime;
  if( quantity % capacity === 0 ) {
    return totalTime = ( quantity / capacity ) * timeForFullFry;
  }
  else {
    return totalTime = Math.ceil( quantity / capacity ) * timeForFullFry;
  }
}

//console.log( cotlet( 10, 3, 50 ) );