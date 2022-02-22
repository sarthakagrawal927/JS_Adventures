# Promises

Special objects built into JS that get returned immediately when we make a call to a web browser API/Feature that's set up to return promises.

Promises act as placeholder for the data we hope to get back from the web browser feature's background work.

We also attach the functionality we want to defer running until that background work is done.

Promise objects will automatically trigger that functionality to run - the value returned from the web browser feature's work will be that function's input/argument.

```js

futureData = fetch(url);

// futureData -> PromiseObject
PromiseObject = {
    val : {}, // undefined in the beginning
    fulfillmentFunctions = [] // all the functions triggered as soon as the value is defined, ie fetched data is ready
}

```

XHR (XMLHttpRequest)- web browser feature that speaks to the internet.
It needs the url (& exact path), method (GET, POST etc, fetch defaults to GET).
On completion of request, we want to assign the value returned to value of the PromiseObject (ie futureData.val), then it proceeds to trigger all the function in the fulfillment functions.

```js

futureData.then(displayData)
// .then does that whatever function we passed to it, it adds the function the fulfillment functions array

```

## Const

You should use const everywhere unless you plan to switch a primitive type value, or completely throw out the obj/array and replace it with new.

```js
function display(data){console.log(data)}
function printHello(){console.log("hello")}
function blockFor300ms(){/*Black-box function - some nasty for loop*/}

setTimeout(printHello,0) // starts a timer (browser feature) with a time period and trigger function
// after 0ms the printHello function is waiting for us in the callback Q, ready to be executed. EventLoop stands their as guard, which has a rule that the call stack should be clear (global is still there)

const futureData = fetch(url); // returns out an object (promise) with {val : undefined, fulfillment array : []}
// gets going XHR browser feature, passed url, path & method (defaults to GET)

futureData.then(display) // store this function in object futureData.fulfillment array

blockFor300ms()

console.log("Me first") // executes first, the printHello & display function were deferred
// JS also have micro-task Q, any function not deferred due to browser feature setTimeout is sent to this Q & not in the callback Q. So once the execution of global context is over, we first execute the micro-task Q, followed by the callback Q.

```

Promises (value, status (visible & responsible for triggering), fulfillment array * 2) , Web APIs, the callback & MicroTask(Job) Queues and the event loop allow us to defer our actions until the work (fetch request, timer etc) is completed & continue running our code line by line in the meantime.

```js
promiseObject = {
    value,
    status, // enum @default(PENDING), REJECTED, RESOLVED
    resolvedFulfillmentArray, // functions added by .then , triggered when status is set to resolved
    rejectedFulfillmentArray, // functions added by .catch, triggered when status is set to rejected depending on result
}

```
