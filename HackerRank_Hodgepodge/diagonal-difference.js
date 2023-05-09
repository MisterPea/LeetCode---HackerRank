/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:
arr = [
  [1,2,3],
  [4,5,6],
  [9,8,9]
]
Absolute value of (1 + 5 + 9) - (3 + 5 + 9) = 2
*/

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let rightI = arr[0].length - 1;
  let leftI = 0;

  for (let subArray of arr) {
    leftSum += subArray[leftI];
    rightSum += subArray[rightI];
    leftI += 1;
    rightI -= 1;
  }
  const absDiff = Math.abs(leftSum - rightSum);
  return absDiff;
}