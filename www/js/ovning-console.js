let toDo = [
  'Shopping',
  'Cooking',
  'Cleaning',
  'Fix bicycle',
  'Homework',
  'Hair cut',
  'Running'
];

// 2.
function addToList(addItem) {
  toDo.push(addItem);
  return toDo;
}
console.log('2. add to bottom:',addToList('Meet a friend'));

// 3.
function addToTopOfList(addItemToTop) {
  toDo.unshift(addItemToTop);
  return toDo;
}
console.log('3. add to top:', addToTopOfList('Take a shower'));

// 4.
function removeFromBottomOfList() {
  return toDo.pop();
}
console.log('4. remove from bottom:', removeFromBottomOfList());

// 5.
function removeFromTopOfList() {
  return toDo.shift();
}
console.log('5. remove from top:', removeFromTopOfList());

// 6.ta bort en sak by index
function removeFromListByIndex(index, number) {
  return toDo.splice(index, number);
}
console.log('6. remove index 2 Cleaning', removeFromListByIndex(2, 1));

// 7.ta bort en sak by name
function removeFromListByName(name) {
  for (let i = 0; i < toDo.length; i++) {
    if (name == toDo[i]) {
      removeFromListByIndex(i, 1);
      return name;
    }
  }
}
console.log('remove item:', removeFromListByName('Shopping'));
console.log(toDo);

// 8.ta bort en sak och lägg till den i en lista
let doneList = [];
function removeFromListAndAddToDone(name) {
  let doneItem = removeFromListByName(name);
  doneList.push(doneItem);
  return doneList;
}
console.log(removeFromListAndAddToDone('Hair cut'));
console.log(toDo);

// 9.flytta en sak till toppen av listan
function moveToTop(name) {
  let moveItem = removeFromListByName(name);
  addToTopOfList(moveItem);
  return toDo;
}
console.log('move to top Homework:', moveToTop('Homework'));

// 10.flytta en sak till bottom av listan
function moveToBottom(name) {
  let moveItem = removeFromListByName(name);
  addToList(moveItem);
  return toDo;
}
console.log('move to bottom Cooking:', moveToBottom('Cooking'));


// 11.flytta en sak ett steg ner i listan
function moveDown(name) {
  for (let i = 0; i < toDo.length; i++) {
    if (name == toDo[i]) {
      removeFromListByName(name);
      toDo.splice(i + 1, 0, name);
      return toDo;
    }
  }
}
console.log('flytta ner Homework:',moveDown('Homework'));

// 12.flytta en sak ett steg upp i listan
function moveUp(name) {
  for (let i = 0; i < toDo.length; i++) {
    if (name == toDo[i]) {
      removeFromListByName(name);
      toDo.splice(i - 1, 0, name);
      return toDo;
    }
  }
}
console.log('flytta upp Cooking:', moveUp('Cooking'));

// Loop
// 13.logga listan
function logTodoList() {
  for (let i = 0; i < toDo.length; i++) {
    console.log('logga items:', toDo[i]);
  }
}
logTodoList();

// 14.logga listan 2
function logTodoListVer2() {
  for (let item of toDo) {
    console.log('logga items version 2:',item);
  }
}
logTodoListVer2();

// 15.kräv inmatning
function askForItem() {
  let askItem = prompt('Ange en sak till om du vill');
  addToList(askItem);
}
askForItem();
console.log(toDo);

