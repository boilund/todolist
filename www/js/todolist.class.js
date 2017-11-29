class ToDoList {

  constructor() {
    this.items = [];
    this.doneItems = [];
  }

  // add function
  addToList(item){

    if (item !== '') { // not work!
      this.items.push(item);
    }
  }

  addToTopOfList(item) {
    if (item !== ''){ // not work!
      this.items.unshift(item);
    }
  }

  // remove function
  removeFromBottomOfList() {
    return this.items.pop();
  }

  removeFromTopOfList() {
    return this.items.shift();
  }

  removeFromListByIndex(index) {
    if(index >= 0) {
      return this.items.splice(index, 1);
    }
  }

  removeFromListByName(name) {
    for (let i = 0; i < this.items.length; i++) {
      // console.log(this.items[i].name);
      if (name === this.items[i].name){
        // console.log(i);
        return removeFromListByIndex(i);
        // return this.items;
      }
    }
  }

 // move function
  removeFromListAndAddToDone(name) {
    // let doneList = [];
    let doneItem = removeFromListByName(name);
    this.doneItems.push(doneItem);
    return doneList;
  }

  moveToTop(name) {
    let moveItem = removeFromListByName(name);
    addToTopOfList(moveItem);
    return this.items;
  }

  moveToBottom(name) {
    let moveItem = removeFromListByName(name);
    addToList(moveItem);
    return this.items;
  }

  moveDown(name) {
    for (let i = 0; i < this.items.length; i++) {
      if (name == this.items[i]) {
        removeFromListByName(name);
        this.items.splice(i + 1, 0, name);
        return this.items;
      }
    }
  }

  moveUp(name) {
    for (let i = 0; i < this.items.length; i++) {
      if (name == this.items[i]) {
        removeFromListByName(name);
        this.items.splice(i - 1, 0, name);
        return this.items;
      }
    }
  }

  // Loop
  logtoDoListsList() {
    for (let i = 0; i < this.items.length; i++) {
      console.log('logga items:', this.items[i]);
    }
  }

  logtoDoListsListVer2() {
    for (let item of this.items) {
      console.log('logga items version 2:', item);
    }
  }

  askForItem() {
    let askItem = prompt('Ange en sak till om du vill');
    addToList(askItem);
  }

}