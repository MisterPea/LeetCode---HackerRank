/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
Time Complexity: O(n) [would actually be Ω(n) because that's be best case] - Where n is the length of the array. Insertions will be O(1)
Space Complexity: O(n) [would be Ω(n) because that's be best case] - We're returning a new array of length n. 
*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const innerArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = fn.call(this, arr[i], i);
    innerArray.push(element);
  }
  return innerArray;
};