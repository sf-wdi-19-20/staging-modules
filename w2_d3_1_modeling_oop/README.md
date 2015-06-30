#Object Oriented Programming

##Objectives

| Objectives: students will be able to . . . |
| :--- |
|  |
| summarize key tenants of the Object Oriented Programming paradigm |
| model real-world data and relationships with JavaScript objects |
| justify choices of which methods and attributes to include, and whether to put them on a constructor, a prototype, or a single object |
| use localStorage to store persistent data in a JSON format |

##Programming Paradigms

So far, we've been working with **procedural programming**, putting blocks of code in functions (aka procedures) that we call at various points in the program.


```
data <--> global or local variables

behaviors <--> procedures  (functions)

```


With **object oriented programming**, we encapsulate data and behaviors in objects.  

```
data <--> attributes  ("class" or "instance" variables)

behaviors <--> methods (functions)

```

##Constructor and Prototype Review

**Constructors**

* variables and functions are declared once for each instance
* functions have access to "private" variables declared within the constructor's scope
* when you update the constructor, previously created instances DON'T update
* data is "embedded" in each instance


**Prototypes**
 
* all instances share the same function and variable declarations
* when you update the prototype, previously created instances DO get the updates
* data is "referenced" from the prototype copy

Convention:  `Array.prototype.sort = Array.prototype.sort || mySort;`

##Challenges

*Note to teaching team:  here's a chart of what the challenges will cover:*

| Place | How it Works | Attribute Example | Method Example |
| :-- | :--- | :--- | :--- |
| constructor | each instance gets a copy at creation | often passed in (name) | access "private" variables |
| prototype | all instances share a lookup copy | commonalities (numWheels on car) | same behavior across instances |
| instance | only one copy, for this instance (or overwrites) | singularities (secretCode with a sibling) | interpretSecretCode |



1. Work with your table to list important attributes and methods for a Car object type.

2. Create a constructor for the Car object type.

3. Create a "private" `_price` variable for the Car object.  Create a getter method and a setter for the `_price` property.

4. Create a `drive` method for the Car object. 


##JavaScript Object Notation

Beyond modeling with objects, we sometimes want to store data in objects or send them across the internet. For these purposes, we'll often use JSON (JavaScript Object Notation), which is a standard text representation of JavaScript Objects.  We have a method called `JSON.stringify` to automatically convert JavaScript objects into a JSON string!

What does JSON get us right now today?

Our first opportunity for **persistent** data!

##LocalStorage

`window.localStorage` is a persistent object the browser already has set up for us. Open your developer tools and take a look at your localStorage. (Note: the browser lets us access `window.localStorage` by just typing `localStorage`.)

Try storing an array in localStorage:

`localStorage.testArr = [2,3,4,5];`

Now check what `localStorage.testArr` is.  Like other JavaScript objects, localStorage has keys that are strings. BUT! localStorage also converts all values to strings, which can be bad for some of our data.  Let's try again using the JSON.stringify method first:

`localStorage.testArr = JSON.stringify([2,3,4,5]);`

What is `localStorage.testArr` now?

We're getting closer to keeping our original array. All we need to do is `JSON.parse` the stored object string to turn it back into JavaScript.

**What about functions?**

We can't store functions in localStorage, so we'll have to create new instances of objects programmatically from localStorage when we start up the site. 

##Later this afternoon:

Modeling relationships
More on localStorage





