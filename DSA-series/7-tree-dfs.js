// Tree Structure Definition
function TreeNode(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Preorder
function preorderTraverse(node) {
  if (!node) return;

  console.log(node.val);
  preorderTraverse(node.left);
  preorderTraverse(node.right);
}

// Inorder
function InorderTraverse(node) {
  if (!node) return;

  InorderTraverse(node.left);
  console.log(node.val);
  InorderTraverse(node.right);
}

// Inorder
function PostorderTraverse(node) {
  if (!node) return;

  PostorderTraverse(node.left);
  PostorderTraverse(node.right);
  console.log(node.val);
}
