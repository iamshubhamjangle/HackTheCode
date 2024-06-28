Generator functions are a special type of function that can be paused and resumed, allowing you to manage asynchronous or iterative operations more effectively. They are defined using the `function*` syntax and use the `yield` keyword to pause the function execution and return a value.

```js
function* numberGenerator() {
  console.log("Before 1");
  yield 1;
  console.log("Before 2");
  yield 2;
  console.log("Before 3");
  yield 3;
  console.log("Before 4");
}

const ref = numberGenerator();

console.log(ref.next()); // Before 1   {value: 1, done: false}
console.log(ref.next()); // Before 2   {value: 2, done: false}
console.log(ref.next()); // Before 3   {value: 3, done: false}
console.log(ref.next()); // Before 4   {value: undefined, done: true}
```

Some advantages of Generators are

1. Lazy Evaluation - This delays the evaluation of an expression until its value is needed.Memory
2. Efficient - Due to Lazy Evaluation, generators are memory efficient.

An interesting use case for a javascript generator: generating an infinite number of unique identifiers!

```js
function* generateId() {
  let i = 0;
  while (true) yield i++;
}

const getId = generateId();

console.log(getId.next().value); // 0
console.log(getId.next().value); // 1
console.log(getId.next().value); // 2
```
