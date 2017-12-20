let app;

JSON._classes(App, ToDoList);

JSON._load('to-do-lists.json')
  .then((data) => {
    app = data.app;
  })
  .catch(() => {
    app = new App();
    app.renderLists();
  })
  .then(() => {
    app.renderLists();
  });
