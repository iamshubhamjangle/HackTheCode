function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Recursive
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

// Iterative
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    let curr = root.val;
    if (curr < p.val && curr < q.val) root = root.right;
    else if (curr > p.val && curr > q.val) root = root.left;
    else return root;
  }
  return null;
};
