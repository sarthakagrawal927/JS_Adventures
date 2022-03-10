# Generators

JS builtin iterators are actually objects with a next method which when called returns the next element from the 'stream'/flow.

```js
function createFlow(arr){
  let i = 0
  const inner = {
    // method on an object, still gets the same bond with all the surroundings - using scope property
    next: function(){
      const element = arr[i]
      i++
      return element
    }
  }
  return inner
}
const returnNextElement = createFlow([1,3,4,5])
const ele1 = returnNextElement.next()
```

Once we start thinking of our data as flows ( where we can pick of an element one=by-one ) we can rethink how we produce these flows - JS now lets us produce the flows using a function.

```js
function *createFlow(){ // we can create a generator function using a *
  yield 4 // super powerful keyword (like return) - which instead of ending the execution context, it pauses/suspends it
  yield 5
  yield 6
}
const returnNextElement = createFlow()
const ele1 = returnNextElement.next()
```

generator function return an object with next() function

Allows us to dynamically set what data to flow to us

```js
function *createFlow(){ // es7 feature
  const num = 10
  const newNum = yield num // yield will just throw us out of the function, leaving newNum undefined and waiting for value
  // it will return the value and the exact position we leave the function, giving us the opportunity to pass some constant in the next call, here we are passing '2' in the next call, thereby making newNum = 2;
  yield 5 + newNum
  yield 6
}
const returnNextElement = createFlow()
const ele1 = returnNextElement.next() // command to begin the execution context of createFlow - gives 10
const ele2 = returnNextElement.next(2) // returns much more under the hood, like status, position, value etc
```

ele1 : {
  done: bool
  val: returnValue of function
}

returnNextElement is a special object ( a generator object ) that when its next method is invoked, it starts (or continues) running createFlow until it hits yield and returns out the value being 'yielded'

We end up with a 'stream'/flow of values that we can get one-by-one by running returnNextElement.next()

## Async generators

We can use the ability to pause createFlow's running and then restart it only when our data returns

```js
function doWhenDataReceived(value){
  returnNextElement.next(value)
}

function* createFlow(){
  const data = yield fetch(url)
  console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next()
futureDate.then(doWhenDataReceived)
```

We get to control when we return back to createFlow & continue executing - by setting up the trigger to do so
(returnNextElement.next()) to be run by our function that was triggered by promise resolution (when the value returned from twitter)
