let toDo = [
  'Handla',
  'Laga mat',
  'Tvätt',
  'Fixa cykel',
  'Läxa',
  'Klippa hår',
  'Träna'
];

let doneList = [];

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
  const todoText = $('#new-list').val();
  if (todoText === '') {
    return;
  }

  $('#new-list').val('');
  const newToDo = new ToDo(todoText);
  toDoList.addToTopOfList(newToDo);
  renderList();
});

$('#add-last').click(function(){
  const todoText = $('#new-list').val();
  if (todoText === '') {
    return;
  }

  $('#new-list').val('');
  const newToDo = new ToDo(todoText);
  toDoList.addToList(newToDo);
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