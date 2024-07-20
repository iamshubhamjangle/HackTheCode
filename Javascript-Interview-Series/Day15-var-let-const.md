Understanding var, let, and const is crucial for managing variable scope and immutability in JavaScript. Use var for function-scoped variables, let for block-scoped variables, and const for block-scoped constants. The choice between them affects the behavior and maintainability of your code.

### Differences

Scope:

- var is function-scoped.
- let and const are block-scoped.

Hoisting:

- var variables are hoisted and initialized to undefined.
- let and const variables are hoisted but not initialized, causing a temporal dead zone.

Reassignment:

- var and let variables can be reassigned.
- const variables cannot be reassigned, but the contents of objects and arrays declared with const can be modified.

Redeclaring

- var can be redeclared
- let, const cannot be redeclared

```js
// Scoping
function scopeExample() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;

    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
  }

  console.log(x); // 1
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
}

scopeExample();
```
