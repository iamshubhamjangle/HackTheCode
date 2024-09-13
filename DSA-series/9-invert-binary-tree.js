// TC: O(N) SC: O(1) Stack Space: O(N)
var _invertTree = function (root) {
  if (!root) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

// TC: O(N) SC: O(N)
var invertTree = function (root) {
  if (!root) return null;
  const q = [root]; // queue

  while (q.length) {
    const curr = q.shift();

    const temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }

  return root;
};
