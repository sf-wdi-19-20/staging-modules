window.addEventListener("DOMContentLoaded", function() {

  var submit = document.getElementById("submit");

  var name = document.getElementById("name");

  var email = document.getElementById("email");

  var message = document.getElementById("message");

  name.addEventListener("onfocus", function(event) {
    console.log("hi");
  });

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    alert(message.value);

  });

  var mouseover = document.getElementById("mouseover");

  var dontMouseover = document.getElementById("dontMouseover");

  mouseover.addEventListener("mouseover", function(event) {
    mouseover.style.webkitTransform = "rotate(360deg)";
    mouseover.style.transitionDuration = "1s";
    setTimeout(function() { mouseover.style.color = "red";}, 1000);
  });



  dontMouseover.addEventListener("mouseover", function(event) {
    alert("See, I told you not to mouseover me...");
  });

})

