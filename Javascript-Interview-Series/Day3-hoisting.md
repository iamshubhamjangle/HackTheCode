Hoisting is a mechanism in JavaScript that moves all variable and function declarations to the top of their scope before code execution. This means that a variable or function can be used before it has been declared.

- var: only declaration hoisted
- let and const: Declarations hoisted but not initialized, leading to a temporal dead zone (this is the period between variable declaration and the initialization).
- Functions: Function declarations are fully hoisted, except functions initializations.

```js
console.log(dog); // undefined
var dog = "🐶"; // var
console.log(dog); // "🐶"
```

```js
console.log(rabbit); // ReferenceError: Cannot access 'rabbit' before initialization
let rabbit = "🐇"; // let
console.log(rabbit); // "🐇"
```

```js
console.log(her); // ReferenceError: Cannot access 'her' before initialization
const her = "💃"; // const
console.log(her); // "💃"
```

```js
console.log(foo()); // "Hello, world!"

function foo() {
  return "Hello, world!";
}
```

```js
console.log(car()); // TypeError: car is not a function

var car = function () {
  return "🚗 Starting!";
};

console.log(car()); // "🚗 Starting!"
```
