/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Solution: We do a simple merge of the two arrays
After that we find the middle number or in the case of even
length arrays, the average of the 2 middle numbers
Time complexity should be: O(n + m) with n being the length of the 
array and any splicing.
Space complexity should be: O(1) as we're not using extra space in the output.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  // const newArray = nums1.concat(nums2);
  // newArray.sort((a, b) => a - b);
  const newArray = [];
  let index1 = 0;
  let index2 = 0;

  // Merge the 2 arrays
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] === nums2[index2]) {
      newArray.push(nums1[index1], nums2[index2]);
      index1 += 1;
      index2 += 1;
    }
    else if (nums1[index1] < nums2[index2]) {
      newArray.push(nums1[index1]);
      index1 += 1;
    }
    else {
      newArray.push(nums2[index2]);
      index2 += 1;
    }
  }

  // If there's some array left over
  if (index1 < nums1.length) {
    const leftOver = nums1.slice(index1)
    newArray.push(...leftOver)
  }
  if (index2 < nums2.length) {
    const leftOver = nums2.slice(index2)
    newArray.push(...leftOver)
  }

  // Calculate the median
  if (newArray.length % 2 === 0) {
    const val1 = newArray.length / 2;
    const val2 = val1 - 1;
    return (newArray[val1] + newArray[val2]) / 2;
  } else {
    return newArray[Math.trunc(newArray.length / 2)];
  }
};

const num1 = [1, 3, 4];
const num2 = [1, 2];
console.log(findMedianSortedArrays(num1, num2));