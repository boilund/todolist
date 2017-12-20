// Global variable used in Base constructor
let appObject = undefined;

class App {

  constructor() {
    this.toDoList = new ToDoList();
    this.setupEventHandling();
    appObject = this;
  }

  renderHTML() {
    $('main').html(`
    <div class="container">
      <div class="row mt-2">

        <div class="col-md-6">
          <div class="bg-light mt-4 p-3 list-holder">
            <h5>To do</h5>
            <ul class="to-do-lists list-group">
              <!-- add lists from js -->
            </ul>
            <div class="mt-4">
              <div id="add-group" class="input-group">
                <input type="text" id="new-item" class="form-control" placeholder="Add a list">
                <select id="inputPriority" class="form-control">
                  <option selected>Priority</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div class="input-group-btn">
                  <button type="button" id="add" class="btn btn-warning">
                    <i class="fa fa-plus text-white" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="bg-light mt-4 p-3 list-holder">
            <h5>Done</h5>
            <ul class="done-lists list-group">
              <!-- add lists from js -->
            </ul>
          </div>
        </div>

      </div>
    </div>
    `);
  }

  renderLists() {
    $('.to-do-lists').empty();
    let i = 0;
    for (let item of this.toDoList.items) {
      $('.to-do-lists').append(`
      <li class="list-group-item list-group-item-action pr-0" index="${i}">
        <div class="form-check">
          <label class="form-check-label">
            <input id="check" class="form-check-input" type="checkbox" value="${item.name}">
              ${item.name}
          </label>
          <div class="btn-toolbar float-right">
            <div>
              <button id="priority" class="btn btn-sm btn-primary rounded-circle">
              ${item.priority}
              </button>
              <button id="remove-this" class="btn btn-link text-dark">
              <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </li>
      `)
      i++;
    };

    $('.done-lists').empty();
    for (let item of this.toDoList.doneItems) {
      $('.done-lists').append(`
      <li class="list-group-item list-group-item-action">
        ${item.name}
      </li>
      `)
    };

    JSON._save('to-do-lists', {
      app: this
    });
  }

  // Global eventhandling
  setupEventHandling() {
    // only run this code once
    let lastEvent

    if (appObject === undefined) {
      $(document).on(
        // react on events on all elements in the DOM
        'click keyup mouseenter mouseleave change',
        '*',
        function (e) {
          // stop propagation of the event to parent elements
          // (but only within our event handler)
          if (lastEvent === e) {
            return;
          }
          lastEvent = e;
          // e.type = type of event (click, keyup etc)
          // e.target = the element clicked
          let me = $(e.target);

          if (e.type === 'click') {
            appObject.click(me);
          }

          if (e.type === 'keyup') {
            appObject.keyup(me, e);
          }
        }
      );
    }
  }

  click(element) {
    if (element.closest('button').is('#add')) {
      const todoText = $('#new-item').val();
      if (todoText === '') {
        return;
      }
      let priority = $('#inputPriority').val();
      if (priority === 'Priority') {
        priority = 1;
      }
      const newToDo = new ToDo(todoText, priority);
      this.toDoList.addToList(newToDo);
      this.renderLists();
      $('#new-item').val('');
    } else if (element.closest('button').is('#remove-this')) {
      const removeItemIndex = element.parent().closest('li').attr('index');
      this.toDoList.removeFromListByIndex(removeItemIndex);
      this.renderLists();
    } else if (element.is('#check')) {
      const done = $('#check:checked').val();
      this.toDoList.removeFromListAndAddToDone(done);
      this.renderLists();
    } else if (element.closest('button').is('#one-step-up')) {
      const up = $('#move-list').val();
      this.toDoList.moveUp(up);
      this.renderLists();
      $('#move-list').val('');
    } else if (element.closest('button').is('#one-step-down')) {
      const down = $('#move-list').val();
      this.toDoList.moveDown(down);
      this.renderLists();
      $('#move-list').val('');
    } else if (element.parent('li').is('#sort')) {
      this.toDoList.sortList();
      this.renderLists();
    }
  }

  keyup(element, event) {
    if (element.closest('#add-group') && event.which == 13) {
      $('#add').click();

    } else if (element.closest('button') && event.which == 13) {
      $('#one-step-up').click();

    } else if (element.closest('button') && event.which == 13) {
      $('#one-step-down').click();
    }
  }
}