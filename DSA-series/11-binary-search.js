var search = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    let mid = parseInt((i + j) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return -1;
};
