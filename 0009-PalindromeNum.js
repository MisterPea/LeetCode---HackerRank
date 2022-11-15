/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */
/**
 * Solution: We first eliminate negative numbers (they're false), then we find out how 
 * many digits are in the number via log(x) * log10 + 1. We use this number as the 
 * exponent for multiplying based on digit location. We reverse the number via modulo
 * then test if it's equal with the original. If it is, it's a palindrome.
 * 
 * Time complexity: O(n) where n is the number of digits in the number
 * Space complexity: O(1) 
 */
function isPalindrome_v1(x) {
  let num = x;
  let reversed = 0;

  if (x < 0) {
    return false;
  }

  // this will return the number of digits for a positive number
  let numberLength = Math.floor(Math.log(x) * Math.LOG10E + 1);

  if (numberLength === 1) {
    return true;
  }
  while (num) {
    let tempNum = num % 10;

    num = Math.floor(num / 10);

    if (numberLength !== 1) {
      tempNum = (10 ** (numberLength - 1)) * tempNum;
      numberLength -= 1;
    }

    reversed += tempNum;
  }
  return reversed === x
};


function isPalindrome_v2(x){
  if(x < 0) {
    return false;
  }

  let num = x
  let reversed = 0

  while(num) {
    let temp_num = num % 10;
    num = Math.floor(num / 10)
    reversed = reversed * 10 + temp_num
  }
  return x === reversed;
}
