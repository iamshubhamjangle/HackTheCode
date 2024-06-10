```js
/\*_ 1. Constructors Functions _/;
// Vehicle constructor function
function Vehicle() {
  this.wheels = 2;
}

// Add the ready method to Vehicle's prototype
Vehicle.prototype.ready = function () {
  return "Ready to go!";
};

// Car constructor function
function Car() {
  Vehicle.call(this); // Call the Vehicle constructor so Vehicle's varibles are initialized, similar to super(this);
  this.wheels = 4;
}

// Add the boost method to Car's prototype
Car.prototype.boost = function () {
  return "boosted!";
};

Object.setPrototypeOf(Car.prototype, Vehicle.prototype); // Set up inheritance - Similar to extends keyword in other languages

// Create an instance of Car
const porche = new Car();

console.log(porche); // { wheels: 4 }
console.log(porche.ready()); // "Ready to go!"
console.log(porche.boost()); // "boosted!"
```

```js
/\*_ 2. ES6 Classes - inheritance _/;
class Vehicle {
  constructor() {
    this.wheels = 2;
  }

  ready() {
    return "Ready to go!";
  }
}

class Car extends Vehicle {
  constructor() {
    super(); // as we are using this.wheels we need to have super() first so this.wheels is correctly initialized in Vehicle.
    this.wheels = 4;
  }

  boost() {
    return "boosted!";
  }
}

const tesla = new Car();
console.log(tesla); // { wheels: 4 }
console.log(tesla.ready());
console.log(tesla.boost());
```
