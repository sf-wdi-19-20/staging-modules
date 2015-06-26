$(function() {

  var toDos = [];

  $('#new_todo').on('submit', function(event) {
    event.preventDefault();
    var listItem = $('#todo_text').val();
    
    // store our new to do
    toDos.push(listItem);

    // clear the form
    $('#todo_text').val("");

    // append our new to do to the page
    $('#todos').append('<li class="item">' + listItem + '</li>');
  });

  $(document).on('click', '.item', function() {
    $(this).addClass('done');
  });

});