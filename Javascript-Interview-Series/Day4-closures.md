A closure is combination of function and it's lexical environment in which function was created.

```js
// Closures
function outerFunction() {
  let outerVariable = "I'm outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Output: "I'm outside!"
```

```js
// Example 1: Having Private variables
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

```js
// Example 2: With event listeners
function setupButton() {
  let clickCount = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

setupButton();
```
