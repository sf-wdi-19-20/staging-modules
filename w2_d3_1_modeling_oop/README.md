#Object Oriented Programming

##Objectives

| Objectives: students will be able to . . . |
| :--- |
|  |
| summarize key tenants of the Object Oriented Programming paradigm |
| model real-world data and relationships with JavaScript objects |
| justify choices of which methods and attributes to include, and whether to put them on a constructor, a prototype, or a single object |

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

| Place | Attribute | Method |
| :--- | :--- | :--- |
| constructor: each instance gets a copy at creation | often passed in (name) | access "private" variables |
| prototype: all instances share a lookup copy | commonalities (numWheels on car) | same behavior across instances |
| instance: only one copy, for this instance | singularities (secretCode with a sibling) | interpretSecretCode |



1. Work with your table to list important attributes and methods for a Car object type.

2. Create a constructor for the Car object type.

3. Create a "private" `_price` variable for the Car object.  Create a getter method and a setter for the `_price` property.

4. Create a `drive` method for the Car object. 


##JavaScript Object Notation and `window.localStorage`.


