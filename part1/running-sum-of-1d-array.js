/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  var result  = new Array();
  result[0] = nums[0];
  for (let  i = 1; i < nums.length; i++) {
      result[i] = result[i-1] + nums[i];
  }
  return result;
};
