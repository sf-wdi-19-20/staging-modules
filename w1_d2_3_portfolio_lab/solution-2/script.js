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



  // Trying to implement pill tabs manually

  // var about = document.getElementById("about");

  // var aboutInfo = document.getElementById("aboutInfo");

  // var projects = document.getElementById("projects");

  // var projectsInfo = document.getElementById("projectsInfo");

  // projects.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   // turn about off
  //   aboutInfo.style.visibility = "hidden";
  //   // turn projects on
  //   projectsInfo.style.visibility = "visibile";
  // });

  // about.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   // turn projects off
  //   projectsInfo.style.visibility = "hidden";
  //   // turn about on
  //   aboutInfo.style.visibility = "visible";
  // });



})

