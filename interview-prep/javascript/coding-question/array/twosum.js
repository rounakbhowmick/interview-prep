// Two Sum: Given an array of integers and a target, find two numbers that add up to the target.
//leetcode.com/problems/two-sum/

// sol 1
https: var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// sol 2
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (obj.hasOwnProperty(diff)) {
      // alternative      if(diff in obj)
      return [obj[diff], i];
    } else {
      obj[nums[i]] = i;
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
