#jQuery Continued

| Objectives |
| :--- |
|  |
| Students will be able to . . . |
| set up a new web development project to use jQuery |
| change the structure of the DOM using jQuery | 
| gather user input from forms |



## Motivation

jQuery is a small, feature-rich JavaScript library. It makes things like DOM manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers. It allows us to write expressive code and overcome browser compatibility issues in a way that is faster and more convenient than writing plain JavaScript. 

## Setup 

###CDN

As we've seen with Bootstrap, Content Delivery Networks (CDNs) serve distributed files to users that are visiting websites. CDNs are an alternative to serving files yourself, and they offer a few significant benefits versus serving your own copy of popular libraries:

- Auto-updating: Most CDNs allow you to link to the "latest" version of a library, so you don't have to monitor for updates
- Faster load times through caching: When you visit a website, your browser may "cache" its content, saving it so it's faster and easier to access later.  It's likely your users have been on other sites that link to CDNs for a popular library, so the file may already be cached by their browser.
- Reduced hosting costs: Hosting a website (making it available online) often gets more expensive as you serve more data yourself. 

Include jQuery in your projects with a CDN. Find the jQuery CDN either by googling "JQuery CDN" or heading to [cdnjs](https://cdnjs.com/) and searching for the JS library you're looking for.


###Documentation

It is necessary to reference the [jQuery Documentation](http://api.jquery.com) in order to get the most out of the library.

The website refers to its **API Documentation**.


###APIs

An *Application Programming Interface* is a set of predefined functions that can be called on in order to execute specific commands. API's will typically have documentation outlining proper usage.

Thinking of a restaurant: the menu is the API, ordering is executing an API call, the food is your output.


###Challenge: Project Setup

Feel free to reference this morning's lesson!

1. In class today we'll be working on a Shopping List app. Start a project by creating a directory with the necessary files for your site.
	```
	shopping
	├── README.md
	├── index.html
	├── script.js
	└── style.css
	```

1. Add jQuery to your project with a CDN.  
1. Add Bootstrap's CSS to your project, and create a `div` with class `container` to hold the page's content.
1. Why do we tend to add stylesheets in the `<head>` and javascripts at the end of the `<body>`? See [Yahoo's Performance Rules](https://developer.yahoo.com/performance/rules.html).

##Design

Think about what your user needs. For a shopping list app, we'd like the user to be able to at least:
	* add items to the list
	* see the items that are currently on their list
	* remove items from their list

What does your user need to remember about each item on their list?
	* the item name
	* how many of the item they need

A cool additional feature would be to let the user edit the shopping list items, in case, for instance, they need more or fewer of the item than they thought. 

These requirements will help us design a *model* and *view* for our user's data.

###View

The view is just what your user sees. Based on the app's requirments, our view will need a list of items and a form to enter in new items. 

	<div class="text-center">
          <h1>To Do List</h1>
          <hr>
          <form id="new_todo">
            <div class="form-group">
              <input class="form-control" id="todo_text" placeholder="What do you need to do today?" autofocus>
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-success" value="Add New To Do">
            </div>
          </form>
          <hr>
        </div>

##Element Creation

JavaScript gives us tools to change the contents and style of existing DOM elements. It also lets us change the structure of the DOM - adding and removing elements while the site is running. Of course, jQuery gives us a way to do this too. What do the code samples below do?

Standard DOM API

```
var p = document.createElement('p');
p.appendChild(document.createTextNode('Hello WDI!!!!!'));
var logo = document.querySelector('#header-bottom-left');
logo.appendChild(p);
```

jQuery's API

```
var newP = $('<p>Hello WDI!!!!!</p>');
$('#header-bottom-left').append(newP);
```

###Challenge: Translate to jQuery

The JavaScript code sample below clones an existing button and inserts the new button into the DOM.  Use the jQuery API docs to translate this into jQuery.

Hint: Take it a line at a time. Remember to look to Google or docs for any function names or terms you're not familiar with. 

```
var btn = document.querySelectorAll(".spacer")[2];
var newBtn = btn.cloneNode(true);
var anchorChild = newBtn.children[0].children[0].children[0];
anchorChild.text = "Party like it's 1999";
btn.appendChild(newBtn);
```



## [Events](http://api.jquery.com/category/events/)

jQuery makes event handeling easy and consistent across browsers. Event handlers with event-type names such as `.click()`, `.mousedown()`, `.change()`, and so on take a function as a parameter. Generally, though, use `.bind()` and specify the event and function.

### Example: Hover and Click Events

```
var allPosts = $("body #siteTable > div");
allPosts
.not(":first")
.hover( function() {			//using the event as the function
    $(this).css({"background-color": "orange"});
})
.bind("click", function() {	//using bind and passing in an event (preferred)
	var rank = $(this).find(".rank").text();
    alert("That's Rank: " + rank);
})
```

##[Animations](http://api.jquery.com/animate/)

We can use `.animate()`, which takes an object representing a CSS style and a time (in milliseconds). The method then changes the existing CSS to the new style in the given amount of time. See example below. 

```
// Good practice: Start variable names with $ to indicate that the variables store jQuery objects
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


### Docs & Resources

[You Might Not Need jQuery](http://youmightnotneedjquery.com/) shows the feature overlap among JavaScript and various JavaScript libraries -- with coded examples!

[jQuery docs on DOM Manipulation](https://api.jquery.com/category/manipulation/)
