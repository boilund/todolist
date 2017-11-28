let toDo = [
  'Handla',
  'Laga mat',
  'Tvätt',
  'Fixa cykel',
  'Läxa',
  'Klippa hår',
  'Träna'
];
// console.log(toDo);

// 2.
function addToList(addItem) {
  toDo.push(addItem);
  return toDo;
}
// console.log('2. add to bottom:',addToList('Meet a friend'));

// 3.
function addToTopOfList(addItemToTop) {
  toDo.unshift(addItemToTop);
  return toDo;
}
// console.log('3. add to top:', addToTopOfList('Take a shower'));

// 4.
function removeFromBottomOfList() {
  return toDo.pop();
}
// console.log('4. remove from bottom:', removeFromBottomOfList());

// 5.
function removeFromTopOfList() {
  return toDo.shift();
}
// console.log('5. remove from top:', removeFromTopOfList());

// 6.ta bort en sak by index
function removeFromListByIndex(index, number) {
  if(index >= 0) {
    return toDo.splice(index, number);
    // return toDo.splice(index, 1)[0]; []を省いて'string'だけ取るため
  }
}
// console.log('6. remove index 2 Cleaning', removeFromListByIndex(2, 1));

// 7.ta bort en sak by name
function removeFromListByName(name) {
  for (let i = 0; i < toDo.length; i++) {
    if (name == toDo[i]) {
      removeFromListByIndex(i, 1);
      return name;
    }
  }
  //let index = toDo.indexOf(item);
  //return removeFromListByIndex(index);
}
// console.log('remove item:', removeFromListByName('Shopping'));
// console.log(toDo);

// 8.ta bort en sak och lägg till den i en lista
let doneList = [];
function removeFromListAndAddToDone(name) {
  let doneItem = removeFromListByName(name);
  doneList.push(doneItem);
  return doneList;
}
// console.log(removeFromListAndAddToDone('Hair cut'));
// console.log(toDo);

// 9.flytta en sak till toppen av listan
function moveToTop(name) {
  let moveItem = removeFromListByName(name);
  addToTopOfList(moveItem);
  return toDo;
}
// console.log('move to top Homework:', moveToTop('Homework'));

// 10.flytta en sak till bottom av listan
function moveToBottom(name) {
  let moveItem = removeFromListByName(name);
  addToList(moveItem);
  return toDo;
}
// console.log('move to bottom Cooking:', moveToBottom('Cooking'));


// 11.flytta en sak ett steg ner i listan
function moveDown(name) {
  for (let i = 0; i < toDo.length; i++) {
    if (name == toDo[i]) {
      removeFromListByName(name);
      toDo.splice(i + 1, 0, name);
      return toDo;
    }
  }
}
// console.log('flytta ner Homework:',moveDown('Homework'));

// 12.flytta en sak ett steg upp i listan
function moveUp(name) {
  for (let i = 0; i < toDo.length; i++) {
    if (name == toDo[i]) {
      removeFromListByName(name);
      toDo.splice(i - 1, 0, name);
      return toDo;
    }
  }
}
// console.log('flytta upp Cooking:', moveUp('Cooking'));

// Loop
// 13.logga listan
function logTodoList() {
  for (let i = 0; i < toDo.length; i++) {
    console.log('logga items:', toDo[i]);
  }
}
// logTodoList();

// 14.logga listan 2
function logTodoListVer2() {
  for (let item of toDo) {
    console.log('logga items version 2:',item);
  }
}
// logTodoListVer2();

// 15.kräv inmatning
function askForItem() {
  let askItem = prompt('Ange en sak till om du vill');
  addToList(askItem);
}
// askForItem();
// console.log(toDo);



function renderList() {
  $('.toDoLists').empty();
  for (let list of toDo) {
    $('.toDoLists').append(`
    <li class=list-group-item>${list}</li>`)
  };
}

renderList();

// Lägga till button
$('#add-first').click(function(){
  let newList = $('#new-list').val();
  $('#new-list').val('');
  addToTopOfList(newList);
  renderList();
});

$('#add-last').click(function(){
  newList = $('#new-list').val();
  $('#new-list').val('');
  addToList(newList);
  renderList();
});

// Ta bort button
$('#removeFromIndex').click(function(){
  let removeIndex = $('#remove-index').val();
  $('#remove-index').val('');
  removeFromListByIndex(removeIndex, 1);
  renderList();
});

$('#removeFromName').click(function(){
  let removeName = $('#remove-name').val();
  $('#remove-name').val('');
  removeFromListByName(removeName);
  renderList();
});

$('#remove-first').click(function(){
  removeFromTopOfList();
  renderList();
});

$('#remove-last').click(function(){
  removeFromBottomOfList();
  renderList();
});


// Flytta button
$('#to-done').click(function(){
  let done = $('#move-list').val();
  $('#move-list').val('');
  removeFromListAndAddToDone(done);
  renderList();

  $('.doneLists').empty();
  for (let done of doneList) {
  $('.doneLists').append(`
    <li class=list-group-item>${done}</li>
    `);
  }
});

$('#to-top').click(function(){
  let topList = $('#move-list').val();
  $('#move-list').val('');
  moveToTop(topList);
  renderList();
});

$('#to-bottom').click(function(){
  let bottomList = $('#move-list').val();
  $('#move-list').val('');
  moveToBottom(bottomList);
  renderList();
});

$('#ett-upp').click(function(){
  let up = $('#move-list').val();
  $('#move-list').val('');
  moveUp(up);
  renderList();
});

$('#ett-ner').click(function(){
  let down = $('#move-list').val();
  $('#move-list').val('');
  moveDown(down);
  renderList();
});