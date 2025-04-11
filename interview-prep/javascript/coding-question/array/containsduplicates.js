var containsDuplicate = function (nums) {
  const dupTracker = {};
  nums.forEach((val) => {
    if (dupTracker[val]) {
      dupTracker[val] += 1;
    } else {
      dupTracker[val] = 1;
    }
  });
  const check = Object.values(dupTracker).some((val) => val > 1);
  return check;
};
//Time took 10 mins

var containsDuplicate = function (nums) {
  const dupTracker = {};
  const p = nums.some((val) => {
    if (dupTracker[val]) {
      return true;
    } else {
      dupTracker[val] = 1;
    }
  });
  return p;
};

// better vers
//short hand trick -- chat gpt
var containsDuplicate = (nums) => new Set(nums).size !== nums.length;

var containsDuplicate = function (nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};
