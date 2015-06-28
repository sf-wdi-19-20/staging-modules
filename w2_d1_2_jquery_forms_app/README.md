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
          <li class="item">Apples</li>
          <li class="item">Tea Bags</li>
          <li class="item">July BART pass</li>
        </ul>
        ```
        
Open your `index.html` in your browser to check your progress.

##jQuery [Events](http://api.jquery.com/category/events/) and Form Data

jQuery makes event handeling easy and consistent across browsers. Event handlers with event-type names such as `.click()`, `.mousedown()`, `.change()`, and so on take a function as a parameter. Generally, though, we'll use `.on()` and specify the event and function.

### Example: Hover and Click Events

```
var allPosts = $("body #siteTable > div");
allPosts
.not(":first")
.hover( function() {			//using the event as the function
    $(this).css({"background-color": "orange"});
})
.on("click", function() {	//using on method and passing in an event (preferred)
	var rank = $(this).find(".rank").text();
    alert("That's Rank: " + rank);
})
```

###Basic Challenges
  
1. Use jQuery to set up your `script.js` file so that your JavaScript will run after the DOM elements are loaded. 

Goal: Get form data upon submission.   
1. Write a jQuery selector that finds the form in your `index.html`. Save the form in a variable. **Note: it's good practice to start variable names with $ to indicate that the variables store jQuery objects.**    
1. Add a "submit" event handler to your form. The event handler should `console.log` the text the user entered into the form. Hint: this is the input element's `value`. Look up how to access it by searching "jQuery form value."   

###Stretch Challenges

Goal: Click items to mark them purchased.    
1. Write a jQuery selector that finds the unordered list in your `index.html`. Save the unordered list in a varible.   
1. We won't delete items yet, but let's give users a way to check items off. Add a "click" event handler to the unordered list that add the class "purchased" to each list item that is clicked.    
	Hint: Reference the jQuery docs for [`on`](http://api.jquery.com/on/). You'll want to give the `on` method an event, a selector, and a handler instead of just an event and handler.    
1. Create a custom style in your `style.css` to give a different appearnce to items with the "purchased" class.   


**Why do we add one event handler to the whole list instead of adding one event handler for each element? Read about [event delegation](http://learn.jquery.com/events/event-delegation/).**


        
##Model  
We want the user to be able to save a shopping list, so we have to model that list somehow and store the data somewhere. We'll talk more about modeling later, but for now just think of it as deciding what data structure(s) our JavaScript will use for each shopping list item and for the overall list.

How would you model:   
	* a shopping list item?   
	* the whole shopping list?   

###Data Storage

Now that we have these models, where do we actually store the user's shopping list data? 

Eventually, we'll learn more advanced ways to store data. For now, we'll simply store our data in our `script.js` file.

###Challenge

1. Hard code three shopping list items into a data structure in your `script.js` file.
	

##Element Creation

We've seen that JavaScript gives us tools to change the contents and style of existing DOM elements. It also lets us change the structure of the DOM - adding and removing elements while the site is running. Of course, jQuery gives us a way to do this too. What do the code samples below do?

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

### Challenge

1. Select the `ul` from your `index.html` and save it in a variable.
2. Create a new `li` for the first item your shopping list data, and append the new list item to the `ul`. 



##Connect the Model and View!

We can get user's data in through the form. We can display the data we have saved in our JavaScript file. Let's connect the two. 

###Challenge

1. Update your form's submit event handler to add new shopping list items into your array of shopping list items instead of just `console.log`ing them. 
2. Update your form's submit event handler to add the new shopping list items to the view by making `li`s for them and appending them to the `ul`.


##[Animations](http://api.jquery.com/animate/)

We can use `.animate()`, which takes an object representing a CSS style and a time (in milliseconds). The method then changes the existing CSS to the new style in the given amount of time. See example below. 

	```
	// Collapse a search bar
	$("#search").animate({width: '100px'}, 5000)
	```
	
###Stretch Challenge: Animation

1. Update your list click event handler to also fade out a list item to 0.5 opacity when it's clicked.


##Challenges

Goal: Instead of just storing the name of each item, store its quantity as well. 

1. Think about the places where you'll have to make changes:    
	* the list item view will have to display the quantity    
	* the item input form will need another blank for the quantity    
	* the data model will have to include the quantity    

2. Change the hard coded list items in your HTML to display both the name and quantity. 
3. Update the form to ask for a quantity.
4. Update the form submit event handler to create list items that match the updated list item HTML.
5. Change the data model to store both an item's name and its quantity. Hint: You'll probably need to change how you're storing each item. 


Goal: When the page loads, display all of the starter items hard coded into your `scripts.js` file.     
1. Create a new `li` for each of the items in your shopping list data. Hint: use a loop or an iterator!   
2. Update the loop you wrote above so that it also appends each new list item to the `ul`.    
3. Encapsulate your loop code in a function called `displayItems`. Call the function in your code.   



##Docs & Resources

[You Might Not Need jQuery](http://youmightnotneedjquery.com/) shows the feature overlap among JavaScript and various JavaScript libraries -- with coded examples!

[jQuery docs on DOM Manipulation](https://api.jquery.com/category/manipulation/)
