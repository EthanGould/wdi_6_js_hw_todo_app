var TodoApp = {

  todoArray: [],

  addNewItem: function(event){
    var newTodo = new TodoItem($('#thingToDo').val());
    if(newTodo.name !== ''){
      newListItem = $('<li>').text(newTodo.name);
      $('.todo-list').append(newListItem);
      $('#thingToDo').val('');
      TodoApp.todoArray.push(newTodo);
    }
    event.preventDefault();
  }
};
