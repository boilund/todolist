class ToDoList {

  constructor() {
    this.items = [];
    this.doneItems = [];
  }

  // "add" functions
  addToList(item) {
    this.items.push(item);
  }

  addToTopOfList(item) {
    this.items.unshift(item);
  }

  // "remove" functions
  removeFromBottomOfList() {
    this.items.pop();
  }

  removeFromTopOfList() {
    this.items.shift();
  }

  removeFromListByIndex(index) {
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  removeFromDoneListByIndex(index) {
    if (index >= 0) {
      this.doneItems.splice(index, 1);
    }
  }

  removeFromListByName(name) {
    for (let i = 0; i < this.items.length; i++) {
      if (name === this.items[i].name) {
        const removedTodo = this.items[i];
        this.removeFromListByIndex(i);
        return removedTodo;
      }
    }
    return;
  }

  // "move" functions
  removeFromListAndAddToDone(name) {
    const doneItem = this.removeFromListByName(name);
    return this.doneItems.unshift(doneItem);
  }

  moveToTop(name) {
    const moveItem = this.removeFromListByName(name);
    this.addToTopOfList(moveItem);
    return this.items;
  }

  moveToBottom(name) {
    const moveItem = this.removeFromListByName(name);
    this.addToList(moveItem);
    return this.items;
  }

  getIndex(value, arr, prop) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }

  moveUp(name) {
    let index = this.getIndex(name, this.items, 'name');

    if (index > 0) {
      let priority = this.items[index].priority;
      this.items[index].priority = this.items[index - 1].priority;
      this.items[index].name = this.items[index - 1].name;
      this.items[index - 1].priority = priority;
      this.items[index - 1].name = name;
    }
    return this.items;
  }

  moveDown(name) {
    let index = this.getIndex(name, this.items, 'name');

    if (index < this.items.length - 1) {
      let priority = this.items[index].priority;
      this.items[index].priority = this.items[index + 1].priority;
      this.items[index].name = this.items[index + 1].name;
      this.items[index + 1].priority = priority;
      this.items[index + 1].name = name;
    }
    return this.items;
  }

  sortList() {
    this.items.sort(function (a, b) {
      if (a.priority > b.priority) {
        return 1;
      } else if (a.priority < b.priority) {
        return -1;
      }
      return 0;
    });
  }
}