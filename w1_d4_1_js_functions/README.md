# JavaScript Functions

| Objectives |
| :--- |
| Explain the significance of calling a function |
| Trace the flow of a program, with function calls, based on its code |
| Create a function definition based on written specifications |
| Write anonymous and named functions |
| Implement functions that incorporate conditionals, loops, and other function calls |
| Explain and use closures |
| Write recursive functions and functions that take other functions as arguments |

## What are functions?
  * Computer science can essentially be divided into two core elements: **data structures** and **algorithms**.

  * A **data structure** organizes information.

  ```
  "hello world", 6.287364, 76, { name: "General Assembly", streetAddress: "255 Bush Street", floor: 5 }
  ```

  * An **algorithm** abstractly describes how to manipulate data to solve a problem.

  ```
  Take a number, multiply it by itself, and return the product.
  ```

  * A [**function**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) is a concrete implementation of an algorithm in a computer language. *It is a "subprogram" that encapsulates a specific behavior.*

  ```
  var square = function(num) {
      return num * num;
  }
  ```

#### Analogy: Dry Cleaner
  Your programs can "hand off" some of their work to functions the way you might hand off tasks to another person. When you take your laundry to a dry cleaner, the dry cleaner returns clean clothes to you a day or two later. You don't have to know how to use the dry cleaning machinery, or even exactly what it does (and maybe the dry cleaner wants to protect a secret step in the process!). Plus, many other customers can go to the same dry cleaner. It's so DRY!

## Why use functions?
  > "Functions are the bread and butter of JavaScript programming.

  > The concept of wrapping a piece of program in a value has many uses.

  > It is a tool to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other."

  > -Marjin Haverbeke, *Eloquent Javascript*

#### Benefits of Using Functions
  * **Encapsulation** - Keeping code for the same purpose in the same place makes finding it and updating it easier.

  * **Code Reuse** - "Don't Repeat Yourself" is a principle of coding - keep your programs **DRY**! Reusing code makes it easier to change how your program works, since you only have to make updates in one place. If you find yourself writing the same code two or more times, a good rule of thumb is to move it into a function!

## Defining a Function

  * **Function declaration:** A function declaration is [hoisted](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/#hoisting) to the top of your code. This means that function calls can live above function definitions in your code, since the definitions will be hoisted to the top when your code runs.
  ```
  function greet() {
      console.log("Hello, there!");
  }
  ```

  * **Function expression:** When using a function expression, you must define the function above where you call it in your code.
  ```
  var greet = function() {
      console.log("Hello, there!");
  }
  ```

It is acceptable to use either function declarations or function expressions to define your functions, but make sure to consistently stick to the same convention.

### Componenets of a Function
  * diagram a function on the whiteboard

  Function descriptions may take you back to high school math, but you can always start to approach them by parsing out the function's arguments and what it should return.

  * takes, takes in, expects -> arguments
  * gives back, returns, sends back -> return instructions
  * everything else probably says what the function should do, or what its name should be

  Why do we say the function "takes" and "returns"? This language exactly mirrors how control flow works with functions! You can imagine JavaScript control flow as a person talking on the phone with your program. When you write a function call, it's like JS puts the main program on hold and contacts the function. If another function is called, JS puts the first function on hold to contact the new one. When the function finishes, JS returns to the previous call.

  To keep track of the functions JS has on hold, it uses a _call stack_. Remember the stack data structure? As JS calls a new function, it pushes the function onto the call stack. When a function returns, it pops that function off of the call stack. The control flow stays with the top function on the call stack.

  * show returning vs. printing in console
  * Stop here for challenges 1-2

### Scope

  ```
  var x = 1;

  var changeNum = function (x) {
      x = 2;
  }

  changeNum(x);

  console.log(x)
  // logs what?
  ```

  * _closures_ - In JavaScript, a function "remembers" the scope where it was defined. This allows us to use the closure design pattern.

### Callbacks

    * _callbacks_ - In JavaScript, functions are objects that can be passed around like any other. This allows us to use the callback design pattern.


## Challenges

  1. Write a `multiply` function that finds the product of two numbers.

  ```
  multiply(5, 7) => 35
  ```

  2. Write a function that swaps two values at two different indexes in an array.

  ```
  swap(["moe", "larry", "curly"], 0, 2) => ["curly", "larry", "moe"]
  ```

  3. Write a function that generates a random number in a specified range.

  ```
  getRand(5, 10) => 8 (any number between 5 and 10)
  ```

  4. Write a function that generates an array of specified length that contains random numbers from 1 to 100.

  ```
  randArr(3) => [23, 11, 82]
  ```

## Stretch Challenges

  1. Write a `getMax` function that finds the maximum number in an array.

  2. Write a function called `explainMather` that takes in three arguments: two numbers and a function called `mather`. The `explainMather` function should pass the two numbers into `mather` and write out a message in the console to show the two number inputs and the output from `mather`. Test `explainMather` by passing in your `multiply` function from challenge #1.

  3. Write a `vowels` function that counts the number of vowels in a given string.

  4. Work through more functions problems [here](more_functions.md).

## Further Reading
  * [Functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
  * [Functions - Eloquent JavaScript](http://eloquentjavascript.net/03_functions.html)
  * [Demystifying JavaScript Variable Scope and Hoisting](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting)
