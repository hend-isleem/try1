function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
} 

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
//////////////////////////////////// the helping functions.



function buildBook(name, geners){ //geners is an []
  var book = {};
    book.name = name ;
    book.geners = geners;
  return book;
}


function compairTwoArrays(arrayOfArrays, array) {
  var acc = [];
  each(arrayOfArrays, function(element, index){
    for (var i = 0; i < array.length; i++) {
      if(element.includes(array[i]))
        acc.push(index);
    }
  }) /// try using each instead of for. ,       
  return acc; //a geniral function to use later to get the array of indexes.
}

var search = function(library, input){ //i need to compair the input[] with the gener[] which is inside every obj of the library
  var acc = map(library, function(item, index) {
    return (item.geners);
  })
  return compairTwoArrays(acc, input); //return an array of indexes that we r gonna use to get the result objects.
}

// final result of the search!! returns the array of objects
function getResult(arrayOfArrays, arrayOfIndexes) {
  return filter(arrayOfArrays, function(element, index) {
    return (arrayOfIndexes.includes(index));
  })
}


