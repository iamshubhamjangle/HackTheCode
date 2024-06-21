Javascript introduced async/await in ES8 (ECMAScript 2017) to write more readable async code which feels more like synchronous code. Before that we were using callbacks which we saw in last videos then we shifted to promises which was introduced in ES6 (ECMAScript 2015).

### 1. using promises

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

fetchProjectDetails()
  .then((project) => {
    console.log("Project Details:", project.title);
    return fetchTeamMembers();
  })
  .then((teamMembers) => {
    console.log("Team Members:", teamMembers.name);
    return fetchRecentActivities();
  })
  .then((activities) => {
    console.log("Recent Activities:", activities.name);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

### 2. Using async await

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

const fetchAllData = async () => {
  try {
    const project = await fetchProjectDetails();
    console.log("Project Details:", project.title);

    const teamMembers = await fetchTeamMembers();
    console.log("Team Members:", teamMembers.name);

    const activities = await fetchRecentActivities();
    console.log("Recent Activities:", activities.name);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchAllData();
```
