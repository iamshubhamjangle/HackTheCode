Web standards and JavaScript APIs evolve over time, and newer features may not be available in older browsers. Polyfills enable developers to write modern code and still support users on older browsers. This is crucial for maintaining a wide user base without sacrificing modern development practices.

By leveraging polyfills, you can ensure a broader reach for your web applications and provide a consistent experience across different browsers and environments.

```js
// Built-in Array .map() method
const d = numbers.map((item, index) => item * 2);
console.log(d); // [2, 4, 6, 8, undefined x 6, 68]
```

```js
if (!Array.prototype.newMap) {
  Array.prototype.newMap = function (callback) {
    const result = [];
    const array = this;
    for (let i = 0; i < array.length; i++) {
      // check if array[i] is not undefined
      if (array.indexOf(array[i]) > -1) {
        result[i] = callback(array[i], i, array);
      }
    }
    return result;
  };
}

// usage example
const numbers = [1, 2, 3, 4]; // [1, 2, 3, 4]
numbers[10] = 34; // [1, 2, 3, 4, undefined x 6, 34]

const double = numbers.newMap((item, index) => item * 2);
console.log(double); // [2, 4, 6, 8, undefined x 6, 68]
```
