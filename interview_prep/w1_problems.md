#Week 1 Warmups

##Problem 1: Swapping varialbles
Write a program that will swap the values of two variables. That is, if we start with
```js
x == "a"; //=> true
y == "b"; //=> true
```
once the program has finished running we will have
```js
x == "b"; //=> true
y == "a"; //=> true
```
*Note:* Think about why we cant just do something like `x=y` followed by `y=x`. What goes wrong when we try to do this?

##Problem 2: Reverse a String
Write a function `reverse` that takes in a string, and returns the reverse of the string. For example:
```js
reverse('Hello'); //=> returns "olleH"
```
*Note:* You cannot use any built-in array or string methods!

##Problem 3: Stacks and Queues

Search for information on "stacks" and "queues." Which would you use to store a list of people who were waiting in line?  Give an example of how you might use the other data structure.

##Problem 4: Number Property

Create a function which checks a number for three different properties.

* is the number even?
* is the number a multiple of 10?
* is the number prime?

Each value should be either true or false, and they should be returned in an array. 

Hint: Can you break up the problem into smaller parts?

*Examples*
```
numberProperty(7)  // ==> [true,  false, false] 
numberProperty(10) // ==> [false, true,  true]
```

##Problem 5: Algorithm Analysis

1. Write a function called `compare` that compares two numbers. The function should return `1` if the first number is greater than the second, `0` if they are equal, or `-1` if the first number is less than the second.    
    How many calculations does your function do?

1. Write a function to find the middle element in an array.  How many calculations (including comparisons) does your function do for:   
    the input array [0,4,5]   
    the input array [2,4,6,8,10,12,14,16,18,20]   
    an input array with 8 elements    
    any input array with `n` elements   
    
1. Write a function to find the maximum element in an array. How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]    
    the input array [2,4,6,8,10,12,14,16,18,20]   
    any input array with 8 elements     
    any input array with `n` elements    

1. Write a function called `indexOf` that takes in a number and an array and searches for the number in the array. If the number is in the array, it should return the array index where it found the number. If the number is not in the array, it should return `null`.  How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]    
    the input array [2,4,6,8,10,12,14,16,18,20]   
    any input array with 8 elements    
    any input array with `n` elements    
