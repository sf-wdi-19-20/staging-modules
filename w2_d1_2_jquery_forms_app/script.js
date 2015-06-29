$(function() {

  var toDos = [];

  var $toDoList = $('#todos');

  $('#new_todo').on('submit', function(event) {
    event.preventDefault();
    var listItem = $('#todo_text').val();

    // store our new to do
    toDos.push(listItem);

    // clear the form
    $('#todo_text').val("");

    // append our new to do to the page
    $toDoList.append('<li class="item">' + listItem + '</li>');
  });

  $toDoList.on('click', '.item', function() {
    $(this).addClass('done');
  });

});
