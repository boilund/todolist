let app;

JSON._classes(App, ToDoList);

JSON._load('to-do-lists.json')
.then((data) => {
  app = data.app;
})
.catch(() => {
  app = new App();
  app.render();
})
.then(() => {
  app.render();
});

// "add" buttons
$(document).on('click', '#add-first', function() {
  const todoText = $('#new-list').val();
  if (todoText === '') {
    return;
  }
  const priority = $('#inputPriority').val();
  $('#new-list').val('');
  const newToDo = new ToDo(todoText, priority);
  app.toDoList.addToTopOfList(newToDo);
  app.render();
});

$(document).on('click', '#add-last', function() {
  const todoText = $('#new-list').val();
  if (todoText === '') {
    return;
  }
  const priority = $('#inputPriority').val();
  $('#new-list').val('');
  const newToDo = new ToDo(todoText, priority);
  app.toDoList.addToList(newToDo);
  app.render();
});

$(document).on('click', '#add', function() {
  const todoText = $('#new-item').val();
  if (todoText === '') {
    return;
  }
  const priority = $('#inputPriority').val();
  $('#new-item').val('');
  const newToDo = new ToDo(todoText, priority);
  app.toDoList.addToList(newToDo);
  app.render();
});

// "remove" button
$(document).on('click', '#remove-this', function() {
  let removeItemIndex = $(this).parent().closest('li').attr('index');
  app.toDoList.removeFromListByIndex(removeItemIndex);
  app.render();
});

// "move" buttons
$(document).on('click', '#check', function() {
  let done = $('#check:checked').val();
  app.toDoList.removeFromListAndAddToDone(done);
  app.render();
});

$('#to-top').on('click', function() {
  let topList = $('#move-list').val();
  $('#move-list').val('');
  app.toDoList.moveToTop(topList);
  app.render();
});

$('#to-bottom').on('click', function() {
  let bottomList = $('#move-list').val();
  $('#move-list').val('');
  app.toDoList.moveToBottom(bottomList);
  app.render();
});

$('#one-step-up').on('click', function() {
  let up = $('#move-list').val();
  $('#move-list').val('');
  app.toDoList.moveUp(up);
  app.render();
});

$('#one-step-down').on('click', function() {
  let down = $('#move-list').val();
  $('#move-list').val('');
  app.toDoList.moveDown(down);
  app.render();
});

// "sort" button
$('#sort').on('click', function() {
  app.toDoList.sortList();
  app.render();
});
