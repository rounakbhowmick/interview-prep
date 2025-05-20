//  Maximum Difference Between Increasing Elements
// https://leetcode.com/problems/maximum-difference-between-increasing-elements/

var maximumDifference = function (nums) {
  let min = nums[0];
  let diff = -1;
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
    if (min == nums[i]) {
      continue;
    } else {
      diff = Math.max(diff, nums[i] - min);
    }
  }
  return diff;
};

// better approach

// ✅ Fixed Code (With nums[i] > min):

// if (nums[i] > min) {
//     diff = Math.max(diff, nums[i] - min);
// } else if (nums[i] < min) {
//     min = nums[i];
// }
// // if nums[i] === min, do nothing
// 🔄 On [5, 5, 5, 5]:
// No nums[i] > min, so it never updates diff

// Returns -1, as expected ✅
