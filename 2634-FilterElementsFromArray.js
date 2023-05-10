/* 
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.  
The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.
Time Complexity: Should be O(n) where n is the length of the input array
Space Complexity: Should be O(n)...We're not using extra space but we are return (at most)
the length of the input array.
*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const output = []
  for (let i = 0; i < arr.length; i += 1) {
      const val = fn.call(this, arr[i], i)
      if (val) {
          output.push(arr[i]);
      }
  }
  return output;
};