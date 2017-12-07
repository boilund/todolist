class App {

  constructor() {
    this.toDoList = new ToDoList();
  }

  render() {
    $('.to-do-lists').empty();
    let i = 0;
    for (let item of this.toDoList.items) {
      $('.to-do-lists').append(`
      <li class="list-group-item list-group-item-action" index="${i}">
        <div class="form-check">
          <label class="form-check-label">
            <input id="check" class="form-check-input" type="checkbox" value="${item.name}">
              ${item.name}
          </label>
          <div class="dropdown float-right">
            <button class="btn btn-primary btn-sm dropdown-toggle pl-1" type="button" id="dropdownMenuButton" data-toggle="dropdown">
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

    $('.done-lists').empty();
    for (let item of this.toDoList.doneItems) {
      $('.done-lists').append(`
      <li class="list-group-item list-group-item-action">
        ${item.name}
      </li>
      `)
    };

    JSON._save('to-do-lists', {app: this});
  }

}