var rotate = function (nums, k) {
  k = k % nums.length;
  while (k > 0) {
    const temp = nums.pop();
    nums.unshift(temp);
    k--;
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// Optimised
//O(n)
var rotate = function (nums, k) {
  k = k % nums.length; //remember this
  const last = nums.slice(-k);
  const first = nums.slice(0, nums.length - k);
  const res = [...last, ...first];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
  return nums;
};
