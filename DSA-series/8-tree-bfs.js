// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function bfs(root) {
  if (!root) return [];

  const queue = [root];
  const res = [];

  while (queue.length) {
    const front = queue.shift();
    res.push(front.val);
    if (front.left) queue.push(front.left);
    if (front.right) queue.push(front.right);
  }

  return res;
}

// Test cases
function runTests() {
  // Test Case 1: Full binary tree
  //      1
  //     / \
  //    2   3
  //   / \   \
  //  4   5   6
  let root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  root1.left.left = new TreeNode(4);
  root1.left.right = new TreeNode(5);
  root1.right.right = new TreeNode(6);

  console.log("BFS Test Case 1:", bfs(root1));
  // Expected Output: [1, 2, 3, 4, 5, 6]

  // Test Case 2: Tree with only one node
  //    7
  let root2 = new TreeNode(7);

  console.log("BFS Test Case 2:", bfs(root2));
  // Expected Output: [7]

  // Test Case 3: Empty tree
  let root3 = null;

  console.log("BFS Test Case 3:", bfs(root3));
  // Expected Output: [1, 2, 3, 4]

  // Test Case 4: Left-skewed binary tree
  //      1
  //     /
  //    2
  //   /
  //  3
  // /
  // 4
  let root4 = new TreeNode(1);
  root4.left = new TreeNode(2);
  root4.left.left = new TreeNode(3);
  root4.left.left.left = new TreeNode(4);

  console.log("BFS Test Case 4:", bfs(root4));
  // Expected Output: [1, 2, 3, 4]

  // Test Case 5: Right-skewed binary tree
  //  1
  //   \
  //    2
  //     \
  //      3
  //       \
  //        4
  let root5 = new TreeNode(1);
  root5.right = new TreeNode(2);
  root5.right.right = new TreeNode(3);
  root5.right.right.right = new TreeNode(4);

  console.log("BFS Test Case 5:", bfs(root5));
  // Expected Output: [1, 2, 3, 4]
}

// Run the test cases
runTests();
