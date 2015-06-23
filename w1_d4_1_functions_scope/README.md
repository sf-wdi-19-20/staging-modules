# Functions and Scope

| Objectives |
| :--- |
| Explain the significance of calling a function |
| Trace the flow of a program, with function calls, based on its code |
| Create a function definition based on written specifications |
| Write anonymous and named functions |
| Implement functions that incorporate conditionals, loops, and other function calls |
| Explain and use closures |
| Write recursive functions and functions that take other functions as arguments |

## Motivation (Why?)  

Functions give us some pretty cool benefits:

  * _encapsulation_ - Keeping code for the same purpose in the same place makes finding it and updating it easier.
  * _code reuse_ - "Don't Repeat Yourself" is a principle of coding - keep it DRY!  Reusing code makes it easier to change how your program works (don't want to miss one of the 10 times you'e copied the same code block!).
  * _recursion_ - When you call a function from within that same function, that's recursion! Recursion is a powerful algorithm design tool that closely mirrors some real-world situations.
  * _closures_ - In JavaScript, a function "remembers" the scope where it was defined. This allows us to use the closure design pattern.
  * _callbacks_ - In JavaScript, functions are objects that can be passed around like any other. This allows us to use the callback design pattern.

  At the same time, function calls add _overhead_ that slightly decreases the efficiency of our programs, so we shouldn't put every little piece of logic in its own function. To start, if  you find yourself writing the same code 3 times in your program, consider putting that code in a function instead.

## Analogy (What?)  

  Your programs can "hand off" some of their work to functions the way we might hand off tasks to another person. If you take your laundry to a dry cleaner, you can just get clean clothes a day or two later. You don't have to know how to use the dry cleaning machinery, or even exactly what it does (and maybe the dry cleaner wants to protect a secret step in the process!). Plus, many other customers can go to the same dry cleaner. It's so DRY!

## Setup (How?)

## Demo & Learning Activities

## Function Specs and the Call Stack

  Function descriptions may take you back to high school math, but you can always start to approach them by parsing out the function's arguments and what it should return.

  * takes, takes in, expects -> arguments
  * gives back, returns, sends back -> return instructions
  * everything else probably says what the function should do, or what its name should be

  Why do we say the function "takes" and "returns"? This language exactly mirrors how control flow works with functions! You can imagine JavaScript control flow as a person talking on the phone with your program. When you write a function call, it's like JS puts the main program on hold and contacts the function. If another function is called, JS puts the first function on hold to contact the new one. When the function finishes, JS returns to the previous call.

  To keep track of the functions JS has on hold, it uses a _call stack_. Remember the stack data structure? As JS calls a new function, it pushes the function onto the call stack. When a function returns, it pops that function off of the call stack. The control flow stays with the top function on the call stack.

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

  2. Write a `vowels` function that counts the number of vowels in a given string.

  3. Write a function called `explainMather` that takes in three arguments: two numbers and a function called `mather`. The `explainMather` function should pass the two numbers into `mather` and write out a message in the console to show the two number inputs and the output from `mather`. Test `explainMather` by passing in your `multiply` function from challenge #1.

  4. Work through more functions problems [here](more_functions.md).

## Further Reading
