# Intro

## Engines

Multiple Engines (standard provided by ECMA), engines help communication between JS and Computer. Most Popular - V8 (C++).

Its parses the code into an abstract tree. Then is interpreted while being watched by profiler that continuously looks for optimization. This way code is being optimized while being interpreted. Uses Just In Time Compiler

## Helping the engine

Avoiding Inline caching & hidden classes. Making code predictable for compiler.

Web Assembly will rule in future probably.

## DOM

Model of our webpage that js can interact with to change our webpage.

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
// Even if the timer is set to 0, it still first goes through the entire file , making sure the stack is empty before executing it.
// Set timer is web api function

blockFor1Second();
// even due to addition of this function we print 2 first, because the function a() was thrown out of JS env to browser , its only allowed when the global context is over (call stack is empty). Instead the function a() is put on a queue (callback Q - JS engine feature) which are ready to put on the call stack ( the execution stack ). This deferred and allowance of function a() is called event loop.

console.log(2);
```

## Node

Allows to use js on system like that in browser.
