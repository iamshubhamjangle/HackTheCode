## Throttle Extended Version

Throttling ensures that a function is called at most once in a specified period. This is useful for events that can fire frequently, such as mouse movements. Below is a complete example that demonstrates it.

```html
<!-- HTML -->
<body>
  <div id="input-wrapper">
    <input id="input" type="text" placeholder="search" />
  </div>
  <ul>
    <li>Default: <span id="default"></span></li>
    <li>Debounce: <span id="debounce"></span></li>
    <li>Throttle: <span id="throttle"></span></li>
  </ul>
</body>
```

```css
/* CSS */
#input-wrapper {
  background-color: dodgerblue;
}

input {
  padding: 0.5rem 1rem;
  margin: 1rem;
  width: -webkit-fill-available;
  border: none;
  border-radius: 3px;
}

.text {
  margin: 0.5rem 0;
}
```

```js
const input = document.getElementById("input");
const throttleText = document.getElementById("throttle");

function throttle(fn, delay = 1000) {
  let wait = false;
  let waitingArgs;

  return function (...args) {
    if (wait) {
      waitingArgs = args;
      return;
    }
    fn(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
      if (waitingArgs) {
        fn(...waitingArgs);
        waitingArgs = null;
      }
    }, delay);
  };
}

const throttledSearch = throttle((value) => {
  throttleText.innerText = value;
});

input.addEventListener("input", (e) => {
  throttledSearch(e.target.value);
});
```
