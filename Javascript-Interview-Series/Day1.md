```js
/** Object Literal **/
const rohit = {
  girlfriend: "smita",
};

const vikas = {
  friend: "sakshi",
};

vikas.__proto__ = rohit; // we can do this bze __proto__ has get and set for __proto__ property
Object.setPrototypeOf(vikas, rohit); // newer way

console.log(vikas.friend);
console.log(vikas.girlfriend);
console.log(vikas); // gets rohit in __proto__ object

// NOTE: No circular dependencies are allowed. Uncaught TypeError: Cyclic __proto__ value
vikas.__proto__ = rohit;
rohit.__proto__ = vikas;
```

```js
/** 2. Object with Getter and Setter **/
const men = {
  status: "single",
  crush: "yashashree.rao",
  set setCrush(dammm) {
    this.crush = dammm;
  },
};

const you = {};
Object.setPrototypeOf(you, men);
console.log(you.crush); // yashashree.rao
you.setCrush = "payalgamingg";
console.log(you.crush); // payalgamingg

// Get keys of an object
console.log(Object.keys(you)); // ["crush"]

// for...in loop includes inherited props
for (let key in you) console.log(key); // crush, status, setCrush
```
