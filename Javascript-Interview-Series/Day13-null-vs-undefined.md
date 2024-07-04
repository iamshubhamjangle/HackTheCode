In JavaScript, "undefined" and "null" are both primitive datatypes representing the absence of a value.
However, "undefined" is used to indicate an uninitialized variable or a non-existent property.
On the other hand, "null" is used by developers to indicate that a variable intentionally has no value.

Consider the following example:
Here we return an object if id === 1, when id === 2 we return null to indicate user doesn't exist
for other id javascript will return undefined as it is not handled by developer.

```js
function getUser(id) {
  if (id === 1) {
    return { id: 1, name: "HackTheCode" };
  } else if (id === 2) {
    return null; // User not found. Intentional value by developer is null
  }
  // No return statement for other cases, so it returns undefined
}

console.log(getUser(1)); // Output: { id: 1, name: "HackTheCode" }
console.log(getUser(2)); // Output: null
console.log(getUser(3)); // Output: undefined
```

Apart from this typeof undefined is undefined and typeof null is object.

- `typeof undefined` returns "undefined".
- `typeof null` returns "object".

Abstract equality for these values is true, strict equality is false as types are different

- `undefined == null` returns true (abstract equality)
- `undefined === null` returns false (strict equality)
