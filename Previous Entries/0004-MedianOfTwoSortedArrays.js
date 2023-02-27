/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * 
 * The overall run time complexity should be O(log (m+n)).
 */
/**
 * Solution: We run through each array, finding the smallest at the current index, then
 * putting that value in a new object/array. We then find the middle or middle 2 values
 * and return that value (middle for odd length, mid +/- 1 for even divided by 2)
 */

function findMedianSortedArrays(nums1, nums2) {
  let i_one = 0;
  let i_two = 0;
  let i = 0;
  const oneLength = nums1.length;
  const twoLength = nums2.length;
  const combinedArray = {};

  while (i_one < oneLength || i_two < twoLength) {
    let one = Infinity;
    let two = Infinity;

    if (i_one < oneLength) {
      one = nums1[i_one];
    }
    if (i_two < twoLength) {
      two = nums2[i_two];
    }

    if (one < two) {
      combinedArray[i] = one;
      i_one += 1;
      i += 1;
    } else if (one > two) {
      combinedArray[i] = two;
      i_two += 1;
      i += 1;
    } else {
      combinedArray[i] = one;
      combinedArray[i + 1] = two;
      i_one += 1;
      i_two += 1;
      i += 2;
    }
  }

  const middle = Math.floor(i / 2);
  if ((oneLength + twoLength) % 2 === 0) {
    const left = combinedArray[middle - 1];
    const right = combinedArray[middle];
    return (left + right) / 2;
  } else {
    return combinedArray[middle];
  }
}


const num1 = [1, 2];
const num2 = [3, 4];
console.log(findMedianSortedArrays(num1, num2));