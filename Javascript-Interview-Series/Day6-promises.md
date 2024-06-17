## Promise

A Promise is a proxy for a value not necessarily known when the promise is created.
It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.

#### Example 1

```js
const myPromise = new Promise((resolve, reject) => {
  // async task
  const status = 200;
  if (status === 200) {
    return resolve("😉");
  } else {
    return reject("🥵");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Operation Completed"));

// Output
// 😉
// Operation Completed
```

#### Example 2

```js
function fetchTickets(projectId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching tickets: ${projectId}`);
    const tickets = ["T1", "T2", "T3"];
    resolve(tickets);
  });
}

function createDashboard(tickets) {
  return new Promise((resolve, reject) => {
    console.log(`Creating dashboard`);
    const dashboardId = "DASHBOARD-1";
    resolve(dashboardId);
  });
}

function sendNotification(dashboardId) {
  return new Promise((resolve, reject) => {
    console.log(`Notifying User: ${dashboardId}`);
    resolve();
  });
}

fetchTickets("PROJECT-1")
  .then((tickets) => createDashboard(tickets))
  .then((dashId) => sendNotification(dashId))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));

// Output
// Fetching tickets: PROJECT-1
// Creating dashboard
// Notifying User: DASHBOARD-1
// Done
```
