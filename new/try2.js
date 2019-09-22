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


// function search(library, input){ //i need to compair the input[] with the gener[] which is inside every obj of the library
//  var acc = map(library, function(item, index){
//    return item['geners'];
//  }) //the map gave back an array of the gener arrays for the objects
//  return filter(acc, function(element, index){
//    for (var i = 0; i < input.length; i++ )
//      return (element === input[i])
//  })
// }

// function search(library, input){ //i need to compair the input[] with the gener[] which is inside every obj of the library
//  var acc = map(library, function(item, index){
//    return item['geners'];
//  }) //the map gave back an array of the gener arrays for the objects
//  var iArray = [];
//  for(var i = 0; i < acc.length; i++) {
//    each(input, function(element, index){
//      if (element === acc[i]){
//        return iArray.push(i);
//      }
//    } )
//  }
//  return iArray;
// }

// function search(library, input){ //i need to compair the input[] with the gener[] which is inside every obj of the library
//   var acc = map(library, function(item, index){
//     return item['geners'];
//   }) //the map gave back an array of the gener arrays for the objects
//   // var iArray = [];
//   for(var i = 0; i < input.length; i++) {
//     each(acc, function(element, index){
//       filter(element, function(item){
//         return (element === acc[i]);
//       })
      
//     })
//   }
//   // return iArray;
// }

// function compairTwoArrays(arrayOfArrays, array) {
//   for (var i = 0; i < arrayOfArrays.length; i++) {
//     arrayOfArrays[i].includes()
//   }
// }

// function search(library, input){ //i need to compair the input[] with the gener[] which is inside every obj of the library
//   var acc = map(library, function(item, index) {
//     return (item.geners);
//   })
//   return compairTwoArrays(acc, input);
// }

