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

An invariant for my recursive implementation of `fib()` could be that every single element `n` in
the computed array `prev_fib_array` should be larger than the `n` element before it AFTER index 2. In other words, all elements in `prev_fib_array` should always be sorted in order from least at index 0, to largest at index -1.

However simply observing the values are in ascending order does not fully prove correctness. What truly matters is that each new `fib(n)` is the correctly calculated sum value of the two immediately preceding values, `fib(n-1)` and `fib(n-2)`. Checking for ascending order helps detect obvious errors, such as if a later fibonacci number somehow ends up smaller than a previous one, but to confirm every computed value of `fib(n)` is correct, we also rely on the fact that every element in `prev_fib_array` is derived by adding the two previous elements.

Referenced geeksforgeeks' website on fibonacci recursion: https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/#naive-approach-using-recursion-o2n-time-and-on-space

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."


