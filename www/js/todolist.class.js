class ToDoList {

  constructor(item, priority, limit) {
    // this.toDoLists = [];
    this.item = item;
    this.priority = priority;
    this.limit = limit;
  }

  // 2.
  addToList(item) {
    toDo.push(item);
    return toDo;
  }

  // 3.
  addToTopOfList(item) {
    toDo.unshift(item);
    return toDo;
  }

  // 4.
  removeFromBottomOfList() {
    return toDo.pop();
  }

  // 5.
  removeFromTopOfList() {
    return toDo.shift();
  }

  // 6.ta bort en sak by index
  removeFromListByIndex(index) {
    if(index >= 0) {
      return toDo.splice(index, 1);
      // return toDo.splice(index, 1)[0]; []を省いて'string'だけ取るため
    }
  }

  // 7.ta bort en sak by name
  removeFromListByName(name) {
    for (let i = 0; i < toDo.length; i++) {
      if (name == toDo[i]) {
        removeFromListByIndex(i, 1);
        return name;
      }
    }
  }

  // 8.ta bort en sak och lägg till den i en lista
  removeFromListAndAddToDone(name) {
    let doneItem = removeFromListByName(name);
    doneList.push(doneItem);
    return doneList;
  }

  // 9.flytta en sak till toppen av listan
  moveToTop(name) {
    let moveItem = removeFromListByName(name);
    addToTopOfList(moveItem);
    return toDo;
  }

  // 10.flytta en sak till bottom av listan
  moveToBottom(name) {
    let moveItem = removeFromListByName(name);
    addToList(moveItem);
    return toDo;
  }

  // 11.flytta en sak ett steg ner i listan
  moveDown(name) {
    for (let i = 0; i < toDo.length; i++) {
      if (name == toDo[i]) {
        removeFromListByName(name);
        toDo.splice(i + 1, 0, name);
        return toDo;
      }
    }
  }

  // 12.flytta en sak ett steg upp i listan
  moveUp(name) {
    for (let i = 0; i < toDo.length; i++) {
      if (name == toDo[i]) {
        removeFromListByName(name);
        toDo.splice(i - 1, 0, name);
        return toDo;
      }
    }
  }

  // Loop
  // 13.logga listan
  logTodoList() {
    for (let i = 0; i < toDo.length; i++) {
      console.log('logga items:', toDo[i]);
    }
  }

  // 14.logga listan 2
  logTodoListVer2() {
    for (let item of toDo) {
      console.log('logga items version 2:',item);
    }
  }

  // 15.kräv inmatning
  askForItem() {
    let askItem = prompt('Ange en sak till om du vill');
    addToList(askItem);
  }

}