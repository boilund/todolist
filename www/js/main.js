
let toDoList = new ToDoList();

function renderList() {
  $('.to-do-lists').empty();
  let i = 0;
  for (let item of toDoList.items) {
    $('.to-do-lists').append(`
    <li class="list-group-item list-group-item-action" index="${i}">
      <div class="form-check">
        <label class="form-check-label">
          <input id="check" class="form-check-input" type="checkbox" value="${item.name}">
            ${item.name}
        </label>
        <div class="dropdown float-right">
          <button class="btn btn-primary dropdown-toggle mt-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>
          <div class="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
            <p>Priority:  ${item.priority}</p>
            <button id="remove-this" class="dropdown-item　btn btn-secondary mt-2">
            Delete
            </button>
          </div>
        </div>
      </div>
    </li>
    `)
    i++;
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

$(document).on('click','#remove-this', function(){
  let removeItemIndex = $(this).parent().closest('li').attr('index')
  toDoList.removeFromListByIndex(removeItemIndex);
  renderList();
});

// "move" buttons
$('#to-done').on('click', function() {
  let done = $('#move-list').val();
  $('#move-list').val('');
  toDoList.removeFromListAndAddToDone(done);
  renderList();

  $('.done-lists').empty();
  for (let item of toDoList.doneItems) {
  $('.done-lists').append(`
    <li class=list-group-item>${item.name}</li>
    `);
  }
});

$(document).on('click', '#check', function(){
  let done = $('#check:checked').val();
  toDoList.removeFromListAndAddToDone(done);
  renderList();

  $('.done-lists').empty();
  for (let item of toDoList.doneItems) {
  $('.done-lists').append(`
    <li class=list-group-item>${item.name}</li>
    `);
  }
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