function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
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


var library =[
  buildBook("The Big Book of Classic Fantasy" , ['Fantasy', 'Classics', 'FairyTail']),
  buildBook("How to Learn More with Less Studying" , ['Science']),
  buildBook("Murder on the Orient Express" , ['Drama', 'Adventure', 'Tragedy']),
  buildBook("Harry Potter" , ['Adventure', 'Fantasy']),
  buildBook("1984" , ['Historical']),
  buildBook("Dance of fire and ice" , ['Drama', 'Adventure', 'Fantasy']),
  buildBook("Twilight" , ['Drama', 'Romance']),
  buildBook("Fifty Shades of Grey" , ['Romance', 'Tragedy']),
  buildBook("Hunger Games" , ['Adventure']),
  buildBook("Soldier On" , ['Drama', 'Fantasy', 'Tragedy']),
  buildBook("Blood River: A Journey to Africa's Broken Heart" , ['Historical', 'Adventure']),
  buildBook("The Red Flag" , ['Fantasy', 'Historical']),
  buildBook("Treasure Island" , ['Adventure', 'Fantasy']),
  buildBook("Wolf Moon: Poems" , ['Poetry']),
  buildBook("Hoax for Hire" , ['Fantasy', 'FairyTail'])
];