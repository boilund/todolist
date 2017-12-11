class App {

  constructor() {
    this.toDoList = new ToDoList();
  }

  render() {
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
              <button id="primary" class="btn btn-sm btn-dark rounded-circle">
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

}