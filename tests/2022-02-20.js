// memory is the global execution context
/*
    when we execute a function er create a new global context comprising
    1) thread of execution, we go through line by line
    2) A local memory (variable context), where anything defined inside a function is stored
*/

const num = 1; // adds num to memory and sets it to 1
function multipleBy2(inputNumber) {
  // adds multipleBy2 to memory and sets it to a function
  const result = inputNumber * 2;
  return result;
}

// until we call a function, we stay in global execution context & the variables in the function are not given a memory

// when the function is called, we create a new local context, with its own memory. Once the function finishes - all memory is released and the local context is destroyed by the garbage collector
const output = multipleBy2(3232423); // output value will have value as return type of the function
// the first value the function stores in its local memory are the parameters passed, followed by other variables

// js is single threaded, so we can only execute one function at a time, it goes through the first function then goes to the next function
const output2 = multipleBy2(1);

// uses stack (stack of calls (execution contexts)) to make sure we get back exactly where we called the function. We start off the stack with the global execution context, and when we call a function, we push the current execution context to the stack, and when we return from the function, we pop the execution context from the stack.

const someValue = someFunction();
// someValue has no interest in someFunction, it is defined undefined in the beginning. someFunction is called (as a command) and someValue is assigned the return value of the function
