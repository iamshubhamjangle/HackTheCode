# Set & WeakSet

### Set

- The Set object lets you store unique values of any type (A value in the set may only occur once), whether primitive values or object references.
- You can iterate through the elements of a set in insertion order.
- Could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup)

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate value, won't be added
mySet.add("Hello");
mySet.add({ a: 1, b: 2 });
mySet.add({ a: 1, b: 2 }); // Duplicate obj will be added as this is reference type
mySet.delete(1);

console.log(mySet); // Set { 5, 'Hello', { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log(mySet.has(1)); // false
console.log(mySet.size); // 4
mySet.forEach((value) => console.log(value)); // 5, 'Hello', { a: 1, b: 2 }, { a: 1, b: 2 }
```

### Weakset

- A value in the WeakSet may only occur once, It is unique in the WeakSet's collection.
- It can contain objects and symbols only.
- Objects in a WeakSet are held weakly meaning, If no other references to a value stored in the WeakSet exist, those values can be garbage collected.
- Memory efficient

```js
const weakSet = new WeakSet();

const obj1 = { a: 1 };
const obj2 = { b: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false

// WeakSet does not have .size, .keys(), .values(), or .forEach() methods
```
