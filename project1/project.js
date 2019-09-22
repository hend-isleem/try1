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

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
//////////////////////////////////////////////////



function buildBook(name, geners){ //geners is an []
  var book = {};
    book.name = name ;
    book.geners = geners;
  return book;
}

function compairTwoArrays(arrayOfArrays, array) { //a geniral function to use later to get the array of indexes.
  var acc = [];
  each(arrayOfArrays, function(element, index){
    var haveAll = reduce(array,function(start, item, i){
      return (start && (element.includes(item)))
    } , true);
    if(haveAll)
      acc.push(index);
  }) /// try using each instead of for. 
  return acc; 
}


var search = function(library, input){ //i need to compair the input[] with the gener[] which is inside every obj of the library
  var acc = map(library, function(item, index) {
    return (item.geners);
  })
  //return an array of indexes that we r gonna use to get the result objects.
  return compairTwoArrays(acc, input); 
}

// final result of the search!! returns the array of objects
function getResult(library, arrayOfIndexes) {
  return filter(library, function(element, index) {
    return arrayOfIndexes.includes(index);
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

// function getInput(){
// var input = [];
//   $('#checkboxe').click(function(ev){
//     for (var i=0 ; i<=(ev.target).children(); i++){
//     if((ev.target).prop("checked") == true)
//       input.push((ev.target).val());
//   }})
// return input;
// }

// $(document).ready(function(){
//   $('#search').click(function() {
//     var input = [];
//     $.each($("input[class='checkboxe']:checked"),function() {
//       input.push($(this).val())
//     });
//   });
//   return input;
// });


//check all checkboexs that have the class 'checkboxe' if it was checked
function getInput(){
  var chkInput = [];
  $(".checkboxe:checked").each(function() {
    chkInput.push($(this).val());
    console.log(chkInput)
  });
  return chkInput; // gives back an array of the genres that the user chose.
}

$( "#search" ).click(function(){
  var input1 = getInput();
  var resultIndex = search(library, input1);
  var finalResult = getResult(library, resultIndex);
  console.log(finalResult);
  var ul = $('#resultArray');
  for (var i = 0; i < finalResult.length; i++) {
    var newLi = $('<li>' + finalResult[i].name + '</li>')
    ul.append(newLi);
  }
});




