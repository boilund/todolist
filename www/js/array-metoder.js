//Declaring the variable persons assigning a new array to it containing 5 items
let persons = [
  'Anna',
  'Pelle',
  'Erik',
  'Beata',
  'Cecilia'
];
console.log(persons);

// Read items by using bracket parenthesis and index numbers an array starts at index number 0
console.log(persons[0]); //=> Anna
console.log(persons[2]); //=> Erik

// push adds an item to the end of an array
persons.push('Fredrik');
console.log('persons after pushing Fredrik', persons);

// unshift adds an item to the beginning of an array
persons.unshift('Maria');
console.log('persons after unshifting Maria', persons);

// remove an item from the end of an array
let removedItem = persons.pop();
console.log('item removed with pop', removedItem);
console.log('persons after pop', persons);

// remove an item from the beginning of an array
removedItem = persons.shift();
console.log('item removed with shift', removedItem);
console.log('persons after shift', persons);