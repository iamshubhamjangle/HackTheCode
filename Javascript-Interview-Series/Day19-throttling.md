Throttling ensures that a function is called at most once in a specified period. This is useful for events that can fire frequently, such as mouse movements. Below is a complete example that demonstrates it.

#### Following is common html, css for both variation given below

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

#### Text Variation

```js
// Text Variation
const input = document.getElementById("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

function debounce(fn, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedSearch = debounce((value) => {
  debounceText.innerText = value;
});

function throttle(fn, delay = 1000) {
  let wait = false;
  return function (...args) {
    if (wait) return;
    fn(...args);
    wait = true;
    setTimeout(() => (wait = false), delay);
  };
}

const throttledSearch = throttle((value) => {
  throttleText.innerText = value;
});

input.addEventListener("input", (e) => {
  defaultText.innerText = e.target.value;
  debouncedSearch(e.target.value);
  throttledSearch(e.target.value);
});
```

#### Counter Variation

```js
// Counter Variation
const input = document.getElementById("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

let defaultCount = 0;
let debounceCount = 0;
let throttleCount = 0;

function debounce(fn, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedSearch = debounce(() => {
  debounceText.innerText = ++debounceCount;
});

function throttle(fn, delay = 1000) {
  let isRunning = false;
  return function (...args) {
    if (isRunning) return;
    fn(...args);
    isRunning = true;
    setTimeout(() => (isRunning = false), delay);
  };
}

const throttledSearch = throttle(() => {
  throttleText.innerText = ++throttleCount;
});

input.addEventListener("input", () => {
  defaultText.innerText = ++defaultCount;
  debouncedSearch();
  throttledSearch();
});
```
