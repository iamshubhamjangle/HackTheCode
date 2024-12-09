// worker.js
self.onmessage = (e) => {
  const { type, payload } = e.data;

  if (type === "expensiveCalculation") {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += Math.sin(i) * Math.cos(i);
    }
    postMessage(result); // Send the result back to the main thread
  }
};
