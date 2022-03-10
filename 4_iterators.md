# Iterators

Programs store data & apply functionality to it. But there are 2 parts to applying functions to collections of data.

1) The process of accessing each element
2) What we want to do each element

Iterators automate the accessing of each element, so we can focus on what to do with each element - and make it available us in a smooth way.

If we could create a function that stored numbers and each time we ran the function it would return out an element (the next one) from the numbers Note: It would have to remember which element was next up somehow.

This would let us think of our array/list as a stream flow of data with out function returning the next element from the stream - making our code more readable and more functional.
It all starts from a function returning a function.

```js
function createNewFunction(){ // functions can be returned from JS
  function add2(num){
    return num+2;
  }
  return add2;
}

const newFunction = createNewFunction() // newFunction = add2, ie they are labels to the same function
const result = newFunction(3)
```

We want to create a function that holds both our array, the position we are currently at in our stream of elements and has the ability to return the next element.

```js
function createFlow(array){
  let i = 0
  // the inner function got a bond to all the surrounding data, so when it returned it took that data with it in a backpack (intuitive name).
  // backpack is called - [persistent lexical scoped referenced data], as memory is called variable env. - it is also called [closed over variable environment].
  // backpack is more commonly known as CLOSURE.
  function inner(){
    const element = array[i]
    // it tries to find array and i, does not find them in the local execution context, then it goes to the function definition to look at the persistent data in its backpack, before going to the global context
    i++
    return element
  }
  return inner
}
const returnNextElement = createFlow([4,5,6])
const element1 = returnNextElement() // it goes to function inner and executes it
const element2 = returnNextElement()
```

## The bond

- When the function inner is defined, it gets a bond to the surrounding local memory in which it was defined.
- When we return out inner, that surrounding live data is returned out too - attached on the 'back' of the function definition itself. (Which we give a global label called returnNextElement)
- When we call returnNextElement and don't find the array por i in immediate execution context (local), we look into function definition's 'backpack' of persistent live data
- The 'backpack' is officially known as the C.O.V.E or 'closure'

The returnNextElement has everything we need all bundled up in it :

1. Our underlying array
2. The position we are currently at in our stream
3. The ability to return the next element

This relies completely on the special property of functions in JS that when they are born inside other functions and returned - they get a backpack ( closure )

The posh name for returnNextElement is Iterators

### So iterators turn our data into streams of actual values we can access one after another

Now we have functions that hold our underlying array, the position we're currently at in the array, & e=return out the next item in the 'stream' of elements from our array when run

This lets us have for loops that show us the element itself in the body on each loop and more deeply allows us to rethink arrays as flows of elements themselves which we can interact by calling a function that switches that flow on to give us our next element.

We have truly decoupled the process of accessing each element from what we want to do to each element.
