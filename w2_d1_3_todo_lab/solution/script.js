$(function() {

  var toDos = [];
  var $newTodo = $('#new-todo');
  var $todoText = $('#todo-text');
  var $toDoList = $('#todo-list');

  $newTodo.on('submit', function(event) {
    event.preventDefault();
    var newTodoText = $todoText.val();

    // store our new to do
    toDos.push(newTodoText);

    // clear the form
    $todoText.val("");

    // append our new to do to the page
    $toDoList.append('<li class="todo">' + newTodoText + '</li>');
  });

  $toDoList.on('click', '.todo', function() {
    $(this).addClass('done');
  });

});