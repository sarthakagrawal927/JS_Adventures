# Intro

## Engines

Multiple Engines (standard provided by ECMA), engines help communication between JS and Computer. Most Popular - V8 (C++).

Its parses the code into an abstract tree. Then is interpretted while being watched by profiler that coninuosly looks for optimization. This way code is being optimized while being interpreted. Uses Just In Time Compiler

## Helping the engine

Avoiding Inlince caching & hidden classes. Making code predictable for compiler.

Web Assembly will rule in future prolly.

## Call Stack & Memory Heap

Memory Heap - just a place for use to store data, key value pairs. (Automatic Garbage Collection by Mark n Sweep Algorithm - Giving new value, local variables) [ Memory Leak - Global Variables, Event Listeners, setInterval -> keeps running infinitely ]
Call Stack - FIFO - Stores Functions/Variables acc to need. [StackOverflow OP -  Max Call Stack Size exceeded]

## Single Threaded

1 call stack, 1 instruction at a time. Synchronous. Solution :

## JS Runtime - Event Loop

Browsers uses web-apis to help us, let us use some asynchronous functions (like setTimeOut). Letting us do some work in background.

```js
console.log(1);

function a() {
  console.log(3);
}

setTimeout(a, 0);
// Even if the timer is set to 0, it still first goes through the entire file , making sure the stack is empy befor executing it
console.log(2);
```

## Node

Allows to use js on system like that in browser.
