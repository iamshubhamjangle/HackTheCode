// Optimised TC: O(N) SC: O(N) stack space
function dfs(root) {
  if (!root) return 0;

  let left = dfs(root.left);
  let right = dfs(root.right);

  if (left === -1 || right === -1) return -1;
  if (Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
}

var isBalanced = function (root) {
  if (!root) return true;

  if (dfs(root) === -1) return false;
  return true;
};
