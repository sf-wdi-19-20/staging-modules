#The DOM and Vanilla JS

| Objectives |
| :--- |
| Manipulate the DOM using plain vanilla Javascript |

### Motivation (Why?)

Vanilla JS underlies all Javascript frameworks. Understanding basic JS is an important interview competence.

### Analogy (What?)

* HTML = Skeleton
* Javascript = Muscles, Brain, and Organs
* CSS = Skin and Clothes

![muscles](http://www.anselm.edu/homepage/jpitocch/genbio/antagmusc.JPG)

### Demo (How?)

#### Select Elements

Get DOM element by selector
```
var h1Elements = document.querySelector("h1")
var myId = document.querySelector("#myId")
var primaryButtons = document.querySelector("btn-primary")
```

#####Or

Get DOM element by id
```
var el = document.getElementById("#myId");
```

Get DOM elements by class
```
var arr = document.getElementsByClassName(".myclass");
```

Get DOM elements by HTML tag
```
var el = document.getElementsByTagName(".myclass");
```

#### Add Dynamic Changes to Events with Functions
Add a function
```
el.addEventListener("click", function() {
  alert("you clicked a button");
});
```

Change or add a style attribute value
```JS
el.style.color = "red"
el.style.display= "none" // hide the element
```

Change text
```
el.innerText = "New Text!"
```

Add class
```
el.classList.add("danger")
```

Prevent Default Behavior
```
var button = document.querySelector("a#san-francisco_cta");
button.onclick = function(event){
    event.preventDefault(); // SUPER IMPORTANT PART
    alert("Hahah! Now you get me instead")
};
```


#Challenges

### Docs & Resources

* [Document Object Model docs (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/API/document)
* [Document Object Model docs (W3Schools)](http://www.w3schools.com/jsref/dom_obj_document.asp)
* [List of DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)

###Basic Challenges:

1. Create a directory called 'vanilla-dom'
2. Inside 'vanilla-dom', make a file called `index.html` and `scripts.js`
3. Copy and Paste this code into the collections.html:

```
  <!doctype html>
<html>
  <head>
    <title>Hello, Walter!</title>
  </head>
  <body>
    <h1 id="title">DOM Collections</h1>
    <ul>
      <li class="datatype">Number</li>
      <li class="datatype">Boolean</li>
      <li class="datatype">String</li>
      <li class="loop">for</li>
      <li class="loop">while</li>
      <li class="loop">for...in</li>
      <li class="function">push()</li>
      <li class="function">pop()</li>
      <li class="function">shift()</li>
    </ul>
  </body>
</html>
```

Do these Exercises inside console in Chrome
  (hint: Command + Option + J)

#####Part 1

1. Select all of the list elements (`<li>`).
2. Loop over them to add a border to the bottom of each.
3. You'll need to loop over each element to do this.

#####Part 2

1. Retrieve all the elements with the class `datatype`.
2. Use '.style.color' and change the font color to green.
3. You'll need to loop over each element.

#####Part 3

1. Use '.querySelectorAll' to retrieve all of the elements with a class of 'function'.
2. Using a loop change the color of each element to blue.

###Stretch Challenges:

1. Inside your `vanilla-dom` directory, create a new directory called `events`.
2. Create `style.css`, `index.html` and `app.js` files inside the `events` directory.
3. Copy and paste this code into `index.html`

```
<!doctype html>
  <head>
    <title>Hello, Wanda!</title>
    <link rel="stylesheet" type="text/css" href="style.css"></link>
  </head>
  <body>
    <button id="clicker">Click</button>

    <div id="mouser">Mouse Over</div>

    <form id="former">
      <input type="text" name="term" placeholder="search term">
      <input type="submit" value="Submit">
    </form>


    <h1>Vegetables</h1>
    <ul id="vegetables">
      <li>Carrots</li>
      <li>Kale</li>
      <li>Broccoli</li>
      <li>Chard</li>
    </ul>

    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```
###Do these Exercises inside "events.js" and then test code in Chrome console.

####Part 1
 1. Use `.addEventListener`t to listen for the 'click' event on the `<button>`.
 2. Pop up an `alert()` whenever a click occurs.

####Part 2
 1. Change the `backgroundColor` of the box to 'yellow' when the mouse is over it.
 2. Change the back to 'green' when the mouse leaves the box.<br>
    (hint: 'mouseover' and 'mouseout' events may be of use.)

####Part 3
 1. Listen for the 'submit' event on the `<form>`
 2. `alert()` the text that is typed into the text field.


####Part 4
 **Notice that the page refreshes (see the URL bar)**
1. Use `event.preventDefault()` to stop the page from refreshing.

####Part 5

1. Listen for the 'click' event on the `<ul>` element
2. Use `event.target` to see which `<li>` was clicked.
   a. 'alert()' the specific vegetable that was selected.
  **Make sure you only use one event listener instead of adding an event
  handler to each `<li>`**

# Further Reading
