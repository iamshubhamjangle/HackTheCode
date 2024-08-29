// Merge the linked lists
// TC: O(M+N), SC: O(1)
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let curr = dummy;

  while (list1 && list2) {
    if (list2.val <= list1.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }

  curr.next = list1 || list2;

  return dummy.next;
};

// Merge the linked lists - Recursive
// TC: O(M+N), SC: O(M+N) call stack space
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
