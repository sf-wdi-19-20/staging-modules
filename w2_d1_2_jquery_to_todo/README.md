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
1. Curious why we often add stylesheets in the `<head>` and scripts at the end of the `<body>`? See [Yahoo's Performance Rules](https://developer.yahoo.com/performance/rules.html).

##Design

Think about what your user needs. For a shopping list app, we'd like the user to be able to at least:
	* add items to the list
	* see the items that are currently on their list
	* remove items from their list

What does your user need to remember about each item on their list?
	* the item name

A cool additional feature would be to let the user remember how many of each item they need. It'd also be nice to let the user edit the shopping list items, in case, for instance, they decide to change the item name to specify their favorite brand.

These requirements will help us design a *model* and *view* for our user's data.  Today we'll be building our shopping list app from the outside in, so we'll start with the view.

###View

Based on the app's requirments, our view will need a list of items and a form to enter in new items.

First, a form!
	```
          <form id="new_shopping_item">
            <div class="form-group">
              <input class="form-control" id="shopping_text" placeholder="What do you need to get?" autofocus>
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-success" value="Add New Shopping List Item">
            </div>
          </form>
        ```
        
Now, a list of shopping items.  We'll want to add and remove items *programatically* later, but for now let's *hard code* in some examples to get started on an HTML structure.

	```
        <ul id="shopping_list"></ul>
          <li>Apples</li>
          <li>Tea Bags</li>
          <li>July BART pass</li>
        </ul>
        ```
        
Open your `index.html` in your browser to check your progress.
        
###Model  
We want the user to be able to save a shopping list, so we have to model that list somehow. We'll talk more about modeling later, but for now just think of it as deciding what data structure(s) our JavaScript will use for each shopping list item and for the overall list.

How would you model:
	* a shopping list item?
	* the whole shopping list?

###Data Storage

Now that we have these models, where do we actually store the user's shopping list data? 

Eventually, we'll learn more advanced ways to store data. For now, we'll simply store our data in a JavaScript file.


##jQuery [Events](http://api.jquery.com/category/events/) and Form Data

jQuery makes event handeling easy and consistent across browsers. Event handlers with event-type names such as `.click()`, `.mousedown()`, `.change()`, and so on take a function as a parameter. Generally, though, we'll use `.bind()` and specify the event and function.

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

###Challenge: Form Submission

1. Use jQuery to set up your `script.js` file so that your JavaScript will run after the DOM elements are loaded. 
1. Using the console, write a jQuery selector that finds the form in your `index.html`. Save the form in a variable in your console. Copy over your selector to your `script.js` file and save the form in a variable there too.
1. 



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
