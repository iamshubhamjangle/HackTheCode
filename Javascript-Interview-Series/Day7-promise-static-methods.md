JavaScript's Promise object has several static methods that are useful for handling multiple asynchronous operations and managing their results. These methods are Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any().

1. Promise.all()

   - Takes an array of promises
   - Resolves when all of the promises in the array have resolved.
   - Rejects if any of the promises reject.
   - In this example, Promise.all() waits for all three fetch operations to complete before proceeding. If any of the fetch operations fail, it will catch the error.

```js
const fetchProjectDetails = () =>
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  );
const fetchTeamMembers = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  );
const fetchRecentActivities = () =>
  fetch("https://jsonplaceholder.typicode.com/comments/1").then((res) =>
    res.json()
  );

Promise.all([
  fetchProjectDetails(),
  fetchTeamMembers(),
  fetchRecentActivities(),
])
  .then(([project, team, activities]) => {
    console.log("Project Details:", project);
    console.log("Team Members:", team);
    console.log("Recent Activities:", activities);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Output
// success
Project Details: { ... }
Team Members: { ... }
Recent Activities: { ... }

// on error
Error fetching data: TypeError: Failed to fetch
    at fetchTeamMembers (_display/?editor_console=true:115:3)
    at _display/?editor_console=true:125:3
```

2. Promise.any()

   - Takes an array of promises
   - Resolves as soon as any of the promises resolve.
   - It rejects only if all the promises reject.
   - In this example, Promise.any() resolves as soon as any of the promises resolve. This can be useful for getting the fastest successful response from multiple sources.

```js
const fetchPrimaryData = () =>
  fetch("https://jsonplaceholder.typicode.com/albums/1").then((res) =>
    res.json()
  );
const fetchSecondaryData = () =>
  fetch("https://jsonplaceholder.typicode.com/albums/2").then((res) =>
    res.json()
  );
const fetchTertiaryData = () =>
  fetch("https://jsonplaceholder.typicode.com/albums/3").then((res) =>
    res.json()
  );

Promise.any([fetchPrimaryData(), fetchSecondaryData(), fetchTertiaryData()])
  .then((data) => {
    console.log("Fetched data from one of the sources:", data);
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });

// Output
// Success
Fetched data from one of the sources: { ... }

// Error
All promises rejected: AggregateError: All promises were rejected
```

3. Promise.allSettled()

   - Takes an array of promises
   - Returns a promise that resolves after all of the given promises have either resolved or rejected. It returns an array of objects describing the outcome of each promise.
   - In this example, Promise.allSettled() allows us to know the outcome of all the promises regardless of whether they resolved or rejected.

```js
const fetchMainData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  );
const fetchAuxiliaryData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
    res.json()
  );
const fetchIncorrectURLData = () =>
  fetch("https://jsonplaceholder123.typicode.com/posts/3").then((res) =>
    res.json()
  );

Promise.allSettled([
  fetchMainData(),
  fetchAuxiliaryData(),
  fetchIncorrectURLData(),
]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index} fulfilled:`);
      console.log(`Value:`, result.value);
    } else {
      console.log(`Promise ${index} rejected`);
      console.log("Reason:", result.reason);
    }
  });
});

// Output on success/failure
"Promise 0 fulfilled with value:", [object] { ... }
"Promise 1 fulfilled with value:", [object] { ... }
"Promise 2 rejected with reason:", [object Error] { ... }
```

4. Promise.race()

   - Takes an array of promises
   - Resolves or rejects as soon as one of the promises resolves or rejects.
   - In this example, Promise.race() will resolve as soon as either the main API or the backup API returns a response. This can be useful for redundancy and improving reliability.

```js
const fetchFromMainAPI = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  );
const fetchFromBackupAPI = () =>
  fetch("https://jsonplaceholder.typicode.com/albums/1").then((res) =>
    res.json()
  );

Promise.race([fetchFromMainAPI(), fetchFromBackupAPI()])
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


//   Output
// Sucess
Fetched data: { ... }

// Error
Error fetching data: TypeError: Failed to fetch
```
