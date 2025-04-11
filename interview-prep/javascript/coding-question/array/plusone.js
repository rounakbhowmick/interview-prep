//leetcode.com/problems/plus-one/
https: var plusOne = function (digits) {
  const p = BigInt(digits.join("")) + 1n;
  return String(p).split("").map(Number);
};
