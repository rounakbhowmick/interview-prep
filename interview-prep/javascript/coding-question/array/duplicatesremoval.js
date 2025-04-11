// 26. Remove Duplicates from Sorted Array
//leetcode.com/problems/remove-duplicates-from-sorted-array/description/
https: var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(i + 1);
  return i + 1;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
