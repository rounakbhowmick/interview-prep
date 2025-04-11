//leetcode.com/problems/move-zeroes/submissions/1603121659/

var moveZeroes = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != 0) {
      if (i != j) {
        let c = nums[i];
        nums[i] = nums[j];
        nums[j] = c;
      }
      i++;
    }
  }
  return nums;
};
