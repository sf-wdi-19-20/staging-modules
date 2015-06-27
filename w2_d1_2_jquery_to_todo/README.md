#Title

| set up a new web development project to use jQuery |  (Adam covers: CDN)
| change the contents and style of DOM elements using jQuery | (Adam covers)

| add event listeners to DOM elements using jQuery | (Adam covers: click)
[jQuery docs on Selectors](https://api.jquery.com/category/selectors/)


| Objectives |
| :--- |
|  |
| Students will be able to . . . |
| change the structure of the DOM using jQuery (wording?)| (append, remove)
| gather user input from forms |  (submit)



### Motivation

jQuery is a widely-used open source library that makes client-side JavaScript tasks easier.

### Analogy 

For many tasks, using jQuery is faster and more convenient than writing plain JavaScript. It's like driving across the country instead of taking a wagon on the Oregon Trail. 

### Setup 

Include jQuery in your HTML files through a CDN: 

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>`

# Demo & Learning Activities


##Element Creation

Standard DOM API

```
var p = document.createElement('p');
p.appendChild(document.createTextNode('Hello WDI!!!!!'));
p.style.cssFloat = 'left';
p.style.backgroundColor = 'red';
p.style.fontSize = '100px';
var logo = document.querySelector('#header-bottom-left')
logo.appendChild(p)
```

jQuery's API

```
var newP = $('<p>Hello WDI!!!!!</p>');
newP.css({
	'float': 'left',
	'background-color': 'red',
	'font-size': '100px'
});
$('#header-bottom-left').append(newP);
```

---

###Challenge: Translate to jQuery

#####Clone and insert a new button
```
var btn = document.querySelectorAll(".spacer")[2];
var newBtn = btn.cloneNode(true);
var anchorChild = newBtn.children[0].children[0].children[0];
anchorChild.text = "Party like it's 1999";
btn.appendChild(newBtn);
```

---

## [Events](http://api.jquery.com/category/events/)

jQuery makes event handeling easy and consistent across browsers. Events such as `.click()`, `.mousedown()`, `.change()`, `.keydown()`, etc, simply take a function as a parameter. Otherwise use `.bind()` and specify the event and function.

### Example: Hover and Click Events

```
var allPosts = $("body #siteTable > div");
allPosts
.not(":first")
.hover( function() {			//using the event as the function
    $(this).css({"background-color": "orange"});
})
.bind("click", function() {	//using bind and passing in an event
	var rank = $(this).find(".rank").text();
    alert("That's Rank: " + rank);
})
```

##[Animations](http://api.jquery.com/animate/)

We can use `.animate()`, which takes an object and a time (in milliseconds) and will change the existing css to the one passed in that amount of time. See example below. 

```
// Good practice: Prepend $ to indicate that it's a jQuery object
var $allPosts = $('body #siteTable > div');

// the first is the top post
var $topPost = $allPosts.first();

// Let's find the rank
$topPost.find('.rank').text();

// & the title
$topPost.find('.title').text();

// Change it!
$topPost.find('.title').text('WDI students are pretty awesome');

// Collapse the search bar
$("#search").animate({width: '100px'}, 5000)

//Fade out...
$topPost.animate({ opacity: 0.25 }, 5000);
```


#Challenges

### Docs & Resources

[You Might Not Need jQuery](http://youmightnotneedjquery.com/) shows the feature overlap among JavaScript and various JavaScript libraries -- with coded examples!

[jQuery docs on DOM Manipulation](https://api.jquery.com/category/manipulation/)

### Basic Challenges

### Stretch Challenges
