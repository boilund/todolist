
let toDoList= new ToDoList();

function renderList() {
  $('.toDoLists').empty();
  for (let item of toDoList.items) {
    $('.toDoLists').append(`
    <li class=list-group-item>${item.name}</li>`)
  };
}
renderList();

// "add" buttons
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

// "remove" buttons
$('#removeFromIndex').click(function(){
  let removeIndex = $('#remove-index').val();
  $('#remove-index').val('');
  toDoList.removeFromListByIndex(removeIndex);
  renderList();
});

$('#removeFromName').click(function(){
  let removeName = $('#remove-name').val();
  $('#remove-name').val('');
  toDoList.removeFromListByName(removeName);
  renderList();
});

$('#remove-first').click(function(){
  toDoList.removeFromTopOfList();
  renderList();
});

$('#remove-last').click(function(){
  toDoList.removeFromBottomOfList();
  renderList();
});


// "move" buttons
$('#to-done').click(function(){
  let done = $('#move-list').val();
  $('#move-list').val('');
  toDoList.removeFromListAndAddToDone(done);
  renderList();

  $('.doneLists').empty();
  for (let item of toDoList.doneItems) {
  $('.doneLists').append(`
    <li class=list-group-item>${item.name}</li>
    `);
  }
});

$('#to-top').click(function(){
  let topList = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveToTop(topList);
  renderList();
});

$('#to-bottom').click(function(){
  let bottomList = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveToBottom(bottomList);
  renderList();
});

$('#ett-upp').click(function(){
  let up = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveUp(up);
  renderList();
});

$('#ett-ner').click(function(){
  let down = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveDown(down);
  renderList();
});