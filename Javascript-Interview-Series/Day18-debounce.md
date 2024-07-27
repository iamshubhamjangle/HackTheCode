# Debouncing

Debouncing ensures that a function is only called once after a specified amount of time has passed since the last time it was invoked. It’s useful for scenarios where you want to wait for the user to stop performing an action before triggering the function.

### Example without debounce

```html
<!-- HTML -->
<div>
  <input id="inputElement" placeholder="search" />
</div>
```

```css
/* CSS */
div {
  background-color: dodgerblue;
}

input {
  padding: 0.5rem 1rem;
  margin: 1rem;
  width: -webkit-fill-available;
  border: none;
  border-radius: 3px;
}
```

```js
// Javascript
function sendApiRequest(e) {
  console.log(e.target.value);
}

const elemt = document.getElementById("inputElement");
elemt.addEventListener("input", sendApiRequest);
```

### Example with debounce

```html
<div>
  <input id="inputElement" placeholder="search" />
</div>
```

```css
div {
  background-color: dodgerblue;
}

input {
  padding: 0.5rem 1rem;
  margin: 1rem;
  width: -webkit-fill-available;
  border: none;
  border-radius: 3px;
}
```

```js
function sendApiRequest(e) {
  console.log(e.target.value);
}

function debounce(fn, delay = 1000) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedApiRequest = debounce(sendApiRequest);

const inputElement = document.getElementById("inputElement");
inputElement.addEventListener("input", debouncedApiRequest);
```

### React Example

```jsx
import "./styles.css";

export default function App() {
  const sendApiRequest = (e) => {
    console.log(e.target.value);
  };

  function debounce(fn, delay = 1000) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const debouncedApiRequest = debounce(sendApiRequest);

  return (
    <div className="App">
      <h1>Debounced API Calls</h1>
      <input placeholder="search" onChange={debouncedApiRequest}></input>
    </div>
  );
}
```
