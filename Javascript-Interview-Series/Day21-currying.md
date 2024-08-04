# Currying

Currying is transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

console.log(curriedAdd(2)(3)); // 5
```

## Infinite currying

Infinite currying refers to a technique where a function continues to return new functions until a certain condition is met, often when no arguments are passed, at which point it performs a final operation using all accumulated arguments.

```js
function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

console.log(sum(1)()); // 1
console.log(sum(1)(9)()); // 10
console.log(sum(5)(10)(-3)(2)()); // 14
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Logging with Colors</title>
    <style>
      .log {
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        color: white;
        font-family: Georgia, serif;
      }
      .log.info {
        background-color: skyblue;
        color: black;
      }
      .log.warn {
        background-color: coral;
      }
      .log.error {
        background-color: darkred;
      }
    </style>
  </head>
  <body>
    <div id="logContainer"></div>
    <script>
      function curriedLog(level) {
        return function (message) {
          const logContainer = document.getElementById("logContainer");
          const logDiv = document.createElement("div");
          logDiv.className = `log ${level}`;
          logDiv.innerText = `[${level.toUpperCase()}] ${message}`;
          logContainer.appendChild(logDiv);
        };
      }

      const infoLog = curriedLog("info");
      const warnLog = curriedLog("warn");
      const errorLog = curriedLog("error");

      // Example usage:
      infoLog("This is an informational message");
      warnLog("This is a warning message");
      errorLog("This is an error message");
    </script>
  </body>
</html>
```
