## Event loop

- Did you know that JavaScript is single-threaded? This means it can only do one thing at a time.
- But how does JavaScript handle multiple tasks, like making asynchronous calls and rendering pages smoothly? That's where the Call Stack & Event Loop comes into play!
- Let's start with the Call Stack. The Call Stack is stack data structure which means its first in last out. When a function is called, it's added to the top of the stack. Once it's done, it's removed from the stack.
- But what happens when you make an asynchronous call, like fetching data from an API? These calls are handled by another component like "Web APIs" (Browser) or "libuv library" (Node.js).
- Once they finishes their task (except promises), the callback is sent to the Event Queue, also known as the Task Queue.
- But Promises are handled with a higher priority. They go to the Micro-task Queue (Priority Queue), which ensures they are processed faster than tasks in the Event Queue.
- The Event Loop is the hero here. It keeps an eye on the Call Stack. When the Call Stack is empty, the Event Loop takes the next callback from the Event Queue or the Micro-task Queue and pushes it onto the Call Stack.
- Remember, blocking the Call Stack is a bad idea because it also handles rendering tasks as well. If the Call Stack is - blocked, your page can get stuck.

```js
function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}

logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();
```

[Click here](https://www.jsv9000.app/?code=ZnVuY3Rpb24gbG9nQSgpIHsgY29uc29sZS5sb2coJ0EnKSB9CmZ1bmN0aW9uIGxvZ0IoKSB7IGNvbnNvbGUubG9nKCdCJykgfQpmdW5jdGlvbiBsb2dDKCkgeyBjb25zb2xlLmxvZygnQycpIH0KZnVuY3Rpb24gbG9nRCgpIHsgY29uc29sZS5sb2coJ0QnKSB9Cgpsb2dBKCk7CnNldFRpbWVvdXQobG9nQiwgMCk7ClByb21pc2UucmVzb2x2ZSgpLnRoZW4obG9nQyk7CmxvZ0QoKTs%3D) to visualize the above example.
