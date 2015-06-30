$(function() {

  var toDos = [];

  // form to create a new todo
  var $newTodo = $('#new-todo');
  var $todoText = $('#todo-text');
  var $toDoList = $('#todo-list');

  $newTodo.on('submit', function(event) {
    event.preventDefault();
    var newTodoText = $todoText.val();

    // store our new todo
    toDos.push(newTodoText);

    // clear the form
    $todoText.val("");

    // append our new todo to the page
    $toDoList.append('<li class="todo">' + newTodoText + '</li>');
  });

  // add class to todo on click to mark it as done
  $toDoList.on('click', '.todo', function() {
    $(this).addClass('done');
  });

});