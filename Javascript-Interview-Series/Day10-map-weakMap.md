### Map

Confused between Map & Weakmap in javascript?

Lets start with Map

- A Map is a built-in JavaScript object that allows you to store key-value pairs and they have a search time complexity of O(1)
- Unlike plain objects, where keys can only be strings or symbols, a Map can use any value as a key, including objects, functions, and primitive values.
- Lets set and then get the values, check size and iterate throught the map.

```js
// Plain  Object example. can only have string/symbol as key.
const obj = {
    name: "hackthecode",
    action: subscribe() {},
}
```

```js
// Using Map
const myMap = new Map();

const key1 = {}; // object
const key2 = function () {}; // function
const key3 = "a string"; // string

myMap.set(key1, "value1");
myMap.set(key2, "value2");
myMap.set(key3, "value3");

console.log(myMap.get(key1)); // "value1"
console.log(myMap.get(key2)); // "value2"
console.log(myMap.get(key3)); // "value3"

console.log(myMap.size); // 3

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

### WeakMap

- A WeakMap is similar to a Map, but it only accepts objects as keys and holds those objects weakly.
- This means that if there are no other references to an object used as a key in a WeakMap, the object can be garbage collected, and the entry in the WeakMap will be removed.
- Lets have two keys object, set them and get them.

Now you might have question they still look similar.
If you set key1 object as undefined and iterate through map you still have hard reference to the object. Whereas in weakMap if we set obj1 as undefined. the garbage collector delete the object & will free up the memory as it was weakly reference by the weakSet.

```js
// Map when key1 is set as undefined
const map = new Map();

let key1 = {
  name: "hackthecode",
};

map.set(key1, "value1");

key1 = undefined;

map.forEach((value, key) => {
  console.log(`${JSON.stringify(key)}: ${value}`); // {"name":"hackthecode"}: value1
});
```

```js
// WeakMap when key1 is set as undefined.
const weakMap = new WeakMap();

let key1 = {
  name: "hackthecode",
};

weakMap.set(key1, "value1");

key1 = undefined;

// weakMap.forEach();
```
