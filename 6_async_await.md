# Async Await

It simplifies everything and finally fixes the inversion of control problems of callbacks

```js
async function createFlow(){
  console.log("Me first")
  const data = await fetch("twitter url") // await behaves similar to yield, throws out of the function, async keeps looking for the value of the promise to be set, then starts executing the rest of the function
  console.log(data)
}

createFlow()

console.log("Me second")
```

No need for a triggered function on the promise resolution, instead we auto trigger the resumption of the createFlow execution (this functionality is still added to the microTask queue)

All the feature of async await we had implemented in async generators - this just makes it much more readable.
This snipped is equivalent to last piece of code written in [generators](5_generators.md)
