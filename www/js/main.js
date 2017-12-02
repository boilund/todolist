
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
$('#add-first').on('click', function() {
  const todoText = $('#new-list').val();
  if (todoText === '') {
    return;
  }

  const priority = $('#inputPriority').val();

  $('#new-list').val('');
  const newToDo = new ToDo(todoText, priority);
  toDoList.addToTopOfList(newToDo);
  renderList();
});

$('#add-last').on('click', function() {
  const todoText = $('#new-list').val();
  if (todoText === '') {
    return;
  }

  const priority = $('#inputPriority').val();

  $('#new-list').val('');
  const newToDo = new ToDo(todoText, priority);
  toDoList.addToList(newToDo);
  renderList();
});

// "remove" buttons
$('#removeFromIndex').on('click', function() {
  let removeIndex = $('#remove-index').val();
  $('#remove-index').val('');
  toDoList.removeFromListByIndex(removeIndex);
  renderList();
});

$('#removeFromName').on('click', function() {
  let removeName = $('#remove-name').val();
  $('#remove-name').val('');
  toDoList.removeFromListByName(removeName);
  renderList();
});

$('#remove-first').on('click', function() {
  toDoList.removeFromTopOfList();
  renderList();
});

$('#remove-last').on('click', function() {
  toDoList.removeFromBottomOfList();
  renderList();
});


// "move" buttons
$('#to-done').on('click', function() {
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

$('#to-top').on('click', function() {
  let topList = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveToTop(topList);
  renderList();
});

$('#to-bottom').on('click', function() {
  let bottomList = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveToBottom(bottomList);
  renderList();
});

$('#one-step-up').on('click', function() {
  let up = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveUp(up);
  renderList();
});

$('#one-step-down').on('click', function() {
  let down = $('#move-list').val();
  $('#move-list').val('');
  toDoList.moveDown(down);
  renderList();
});

$('#more-btn').on('click', function() {
  $('.hide').toggle();
  $('.show-more').toggle();
  $('.hide-more').toggle();
});