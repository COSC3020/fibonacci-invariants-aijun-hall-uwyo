# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## Aijun Hall

An invariant for my recursive implementation of `fib()` could be that the recursive call `fib(n - 1)` will return a correct array of Fibonacci values up to `n-1`.
Recursion occurs at`n=2`, and the first two base cases that end recursion are the foundation of our assumption that recursion works at smaller inputs. That means the array it gives us is correct at every index: index 0 is 0, index 1 is 1, index 2 is the sum of the values at index 0 and 1, and so on.

Because we know that `fib(n - 1)` gives us a correct list, we can safely use the last two values from that array to calculate the next Fibonacci number `fib(n)`.
```
const current_fib_value = last_fib_array_value + second_last_fib_array_value;
```

Referenced geeksforgeeks' website on fibonacci recursion: https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/#naive-approach-using-recursion-o2n-time-and-on-space

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."


