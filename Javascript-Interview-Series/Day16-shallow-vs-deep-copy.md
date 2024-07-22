When dealing with objects and arrays in JavaScript, understanding the concepts of deep copy and shallow copy is crucial.

If you remember, objects are reference type. That means when we declare an object we are basically storing the pointer reference to the object.

Knowing that...

### Shallow Copy

A shallow copy of an object or array is a copy where only the immediate values are duplicated. However, nested objects or arrays within the copied object or array are still references to the same objects in memory. Hence in this example c2 was level 2 nested and it got updated in both original and shallowCopied object.

```js
let original = {
  a: 1,
  b: 2,
  c: {
    c1: 1,
    c2: 2,
  },
};

let shallowCopy = { ...original };

shallowCopy.a = 10;
shallowCopy.c.c2 = 20;

console.log(original); // Output: { a: 1, b: 2, c: { c1: 1, c2: 20 } }
console.log(shallowCopy); // Output: { a: 10, b: 2, c: { c1: 1, c2: 20 } }
```

### Deep Copy

A deep copy of an object or array creates a completely independent clone, including all nested objects or arrays. This ensures that modifications to the copied object do not affect the original object.

```js
let original = {
  a: 1,
  b: 2,
  c: {
    c1: 1,
    c2: 2,
  },
};
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.a = 10;
deepCopy.c.c2 = 20;

console.log(original); // Output: { a: 1, b: 2, c: { c1: 1, c2: 2 } }
console.log(deepCopy); // Output: { a: 10, b: 2, c: { c1: 1, c2: 20 } }

// alternate method
const _ = require("lodash");
const deepCopyLodash = _.cloneDeep(original);

deepCopyLodash.a = 10;
deepCopyLodash.c.c2 = 20;

console.log(original); // Output: { a: 1, b: 2, c: { c1: 1, c2: 2 } }
console.log(deepCopyLodash); // Output: { a: 10, b: 2, c: { c1: 1, c2: 20 } }
```

### Differences

- References:

  - Shallow Copy: Copies immediate properties but references nested objects.
  - Deep Copy: Copies all properties, including nested objects, ensuring complete independence from the original.

- Methods of Copying:

  - Shallow Copy: Spread operator ({...obj}), Object.assign().
  - Deep Copy: JSON.parse(JSON.stringify(obj)), custom recursive functions, libraries like lodash (\_.cloneDeep).

- Performance:
  - Shallow Copy: Generally faster as it involves copying fewer references.
  - Deep Copy: Slower, especially for deeply nested objects.
