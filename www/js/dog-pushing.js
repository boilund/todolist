let dogs = [
  'Fido',
  'Bixon',
  'Roger',
  'Lady',
  'Babe'
];

// for...of loops are an easy way to iterate through arrays
function renderDogs() {
  $('.dogs').empty();
  for (let dog of dogs) {
    $('.dogs').append(`
    <li class="list-group-item">${dog}</li>
    `);
  }
}

// renderDogs on load
renderDogs();

$('#remove-first').click(function(){
  dogs.shift();
  renderDogs();
});

$('#remove-last').click(function(){
  dogs.pop();
  renderDogs();
});

$('#add-first').click(function(){
  dogs.unshift($('#new-dog').val());
  $('#new-dog').val('');
  renderDogs();
});

$('#add-last').click(function(){
  dogs.push($('#new-dog').val());
  $('#new-dog').val('');
  renderDogs();
});

// push adds last
// unshift adds first
// pop removes last
// shift removes first


let persons = [
  'Anna',
  'Beata',
  'Cecilia',
  'David',
  'Erik',
  'Fredrik'
];

// .splice (index, numberItemsToRemove itemToAdd anotherItemToAdd)
console.log(persons);

// add a person after Beata (at index 2)
persons.splice(2, 0, 'Gabriel');
console.log(persons);

// remove Beata (the person at index 1)
let removedPersons = persons.splice(1, 1);
console.log('removedPersons(s)', removedPersons);
console.log('persons', persons);

// replace David with Bertil
let replacedPersons = persons.splice(3, 1, 'Bertil');
console.log('replacedPersons', replacedPersons);
console.log('persons', persons);


persons.splice(Infinity, 0, )