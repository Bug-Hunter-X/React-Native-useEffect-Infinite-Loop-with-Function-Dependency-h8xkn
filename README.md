# React Native useEffect Infinite Loop with Function Dependency

This repository demonstrates a common error in React Native applications involving the `useEffect` hook.  When a function is included in the dependency array of `useEffect`, the effect runs repeatedly because the function's reference changes on every render. This leads to an infinite loop and performance issues.

## Problem

The provided `bug.js` file shows a simple counter component. The `useEffect` hook is intended to log a message to the console; however, because the `myFunction` is in the dependency array, the effect will run repeatedly.  This is because a new reference to `myFunction` is created on every render. 

## Solution

The solution, demonstrated in `bugSolution.js`, involves using `useCallback` to memoize the function. This ensures that the function's reference remains consistent across renders, preventing the infinite loop.