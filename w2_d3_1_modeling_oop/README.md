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


```
function Person (name, realAge, feelsOld){
  this.name = name; 
  
  var realAge = realAge;  // this variable will be "private", not accessible
  
  this.getAge = function(realAge, feelsOld){
    if (feelsOld){
     return realAge - 10
    } else {
     return realAge;
    }
  }
}

var grandpa = new Person("Jim", 72, true);

console.log(grandpa.realAge);  // undefined

console.log(grandpa.getAge());  // 62 :D
```


**Prototypes**
 
* all instances share the same function and variable declarations
* when you update the prototype, previously created instances DO get the updates
* data is "referenced" from the prototype copy

Convention:  `Array.prototype.sort = Array.prototype.sort || mySort;`

**Instance variables and functions**

* adds variable or function directly to the instance
* overwrites constructor properties/methods by replacing them
* overwrites prototype properties/methods by being earlier on the lookup chain!


##Modeling with Constructors, Prototypes, Instances

| Place | How it Works | Attribute Example | Method Example |
| :-- | :--- | :--- | :--- |
| constructor | common, each instance gets a copy at creation | usually passed in (name), sometimes calculated | rare, can access "private" variables |
| prototype | all instances share a lookup copy | commonalities (numWheels on car), or shared data (inventoryID) | common, same behavior across instances |
| instance | only one copy, for this instance | singularities (secretCode with a sibling) | interpretSecretCode |

##Challenges

1. Work with your table to list important attributes and methods for a Car object type.

1. Create a constructor for the Car object type.

1. Create a "private" `_markup` variable for the Car object type (don't want customers to see this!).  

1. Create a getter method and a setter for the `_markup` variable.  Should these methods be on the constructor or the prototype?

1. Create a "public" (normal) `location` attribute for the Car object type.

1. Create a `drive` method for the Car object. Should this be on the constructor or the prototype?


##JavaScript Object Notation

Beyond modeling with objects, we sometimes want to store data in objects or send them across the internet. For these purposes, we'll often use JSON (JavaScript Object Notation), which is a standard text representation of JavaScript Objects.  We have a method called `JSON.stringify` to automatically convert JavaScript objects into a JSON string!

What does JSON get us right now today?

Our first opportunity for **persistent** data!

##LocalStorage

`window.localStorage` is a persistent object the browser already has set up for us. Open your developer tools and take a look at your localStorage. (Note: the browser lets us access `window.localStorage` by just typing `localStorage`.)

Try storing an array in localStorage:

`localStorage.setItem(testArr, [2,3,4,5]);`

Now check what `localStorage.getItem(testArr)` returns.  Like other JavaScript objects, localStorage has keys that are strings. BUT! localStorage also converts all values to strings, which can be bad for some of our data.  Let's try again using the JSON.stringify method first:

`localStorage.setItem(testArr, JSON.stringify([2,3,4,5]));`

What is `localStorage.testArr` now?

We're getting closer to keeping our original array values. We need to `JSON.parse` the stored object string to turn it back into JavaScript.

`var originalVals = JSON.parse(localStorage.getItem(testArr));`

Note we still don't actually have the original array. Since arrays (and all JS objects) are reference types, their identity is tied to the location they're stored in your computer's memory. We only got back the values.

`originalVals == testArr       // false`


**What about functions?**

We can't store functions in localStorage, so we'll have to create new instances of objects programmatically from localStorage when we start up our site. 

So if we have car data:

```
$form.on("submit", function(event){
  // create new object 
  new car = {
      make: $makeInput.val(), 
      model: $modelInput.val(),
      price: $priceInput.val(),
      sold: false 
  }
  // push into array

});
```

You can use `localStorage.clear()` to get rid of you localStorage data.

##Later this afternoon: Modeling relationships

```
function Person (first_name, last_name, money){
  this.first_name = first_name;
  this.last_name = last_name; 
  
  this.money = money;
  this.stuff = [];
  
}

Person.prototype.buyStuff = function(newStuff, cost){
 this.money = this.money - cost;
 this.stuff.push(newStuff);
}
```

```
function CellPhone(make, model, price){
 this.make = make;
 this.model = model;
 this.price = price;
}
```

```
var gal = new Person("Annie", "Oakley", 828);

var iPhone6 = new CellPhone("iPhone", "6", 649.99);

gal.buyStuff(iPhone6);

```





