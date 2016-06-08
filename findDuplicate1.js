var findDuplicate = function(nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if(obj[nums[i]]) {
      return nums[i];
    } else {
      obj[nums[i]] = true;
    }
  }
};