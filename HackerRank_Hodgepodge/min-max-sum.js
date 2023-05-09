// Given five positive integers, find the minimum and maximum values that can be calculated 
// by summing exactly four of the five integers. Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.
// (The output can be greater than a 32 bit integer.)
function miniMaxSum(arr) {
  let min = 10n ** 10n;
  let max = 0n;
  let tot = 0n;
  for (let i = 0; i < arr.length; i += 1) {
    const currNum = BigInt(arr[i]);
    tot += currNum;
    if (currNum < min) { min = currNum; };
    if (currNum > max) { max = currNum; };
  }
  const minNum = (tot - max).toString();
  const maxNum = (tot - min).toString();
  console.log(minNum, maxNum);
}