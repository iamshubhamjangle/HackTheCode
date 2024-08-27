// Brute
// TC: O(N*N) SC: O(1)
var _twoSum = function (nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

// Map, and find the remainder in map if exist, return its index
// TC: O(N), SC: O(N)
var twoSum = function (nums, target) {
  let n = nums.length;
  const mp = new Map();

  for (let i = 0; i < n; i++) {
    if (mp.has(target - nums[i])) {
      return [i, mp.get(target - nums[i])];
    } else {
      mp.set(nums[i], i);
    }
  }

  return [-1, -1];
};

const res = twoSum([3, 2, 4], 6);
console.log(res);
