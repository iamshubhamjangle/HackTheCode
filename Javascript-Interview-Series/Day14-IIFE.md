An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```js
(function () {
  var lol = "I am LOL 😂😂😂";
  console.log(lol); // "I am local"
})();

(() => {
  var lmao = "LMAO 🤣🤣🤣";
  console.log(lmao);
})();

console.log(lmao); // ReferenceError: localVar is not defined
```

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

- The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
- The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

Uses:

- Avoid polluting the global namespace
- An async IIFE allows you to use await and for-await even in older browsers and JavaScript runtimes that have no top-level await:
- Also used to create private and public variables and methods.
