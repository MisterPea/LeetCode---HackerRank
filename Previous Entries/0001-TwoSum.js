/**
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Solution: Keep track of the remainder for each number, and store it in an Object.
 * For each iteration check the current array value to see if its compliment exists in the Object
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const remainderObj = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const remainder = target - nums[i];
    if (remainderObj.has(nums[i])) {
      const keyVal = remainderObj.get(nums[i])
      return [keyVal, i]
    } else {
      remainderObj.set(remainder,i);
    }
  }
};

const nums = [1,1]
const target = 2;

console.log(twoSum(nums,target))