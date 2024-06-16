### What is callback function?

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function. It is useful when we have to perform task one after the other.

```js
function men(work) {
  console.log("Eat");
  work();
  console.log("Repeat");
}

function work() {
  console.log("Sleep");
}

men(work);
```

#### Complex Example

```js
function fetchTickets(projectId, callback) {
  console.log(`Fetching tickets: ${projectId}`);
  const tickets = ["T1", "T2", "T3"];
  callback(tickets);
}

function createDashboard(tickets, callback) {
  console.log(`Creating dashboard`);
  const dashboardId = "DASHBOARD-1";
  callback(dashboardId);
}

function sendNotification(dashboardId, callback) {
  console.log(`Notifying User: ${dashboardId}`);
  callback();
}

// Using the callback functions
fetchTickets("PROJECT-1", (tickets) => {
  createDashboard(tickets, (dashboardId) => {
    sendNotification(dashboardId, () => {
      console.log("Notification sent");
    });
  });
});
```

```js
// Output
Fetching tickets: PROJECT-1
Creating dashboard
Notifying User: DASHBOARD-1
Notification sent
```
