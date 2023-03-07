/* 
  This is the suggested solution, where you only need to look at half of the number:
  It's about 10% faster.
*/
// function isPalindrome(x: number): boolean {
//     let reversedNumber = 0;

// the first digit of the number also needs to be 0.
// Only 0 satisfy this property.
// This part solves for 10 
//     if (x < 0 || (x % 10 == 0 && x != 0)) {
//         return false;
//     }
//     while (x > reversedNumber) {
//         reversedNumber = reversedNumber * 10 + x % 10;
//         x /= 10;
//     }
// When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
// For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
// since the middle digit doesn't matter in palindrome(it will always equal to itself), we can simply get rid of it.
//     return x === reversedNumber || x === reversedNumber / 10
// };

/**
 *  Given an integer x, return true if x is a 
    palindrome, and false otherwise.

    # Solution: We generate the mirror image of the number `x` by getting the modulo-10 to
    # get the right-most number, them we remove that last number using floor division.
    # While there exists a number we continually multiply it by 10 to shift all numbers to the left.
    # It's only on the final digit that we don't do that. We then get the difference between the
    # original number and its mirror; if we get 0 then it's a palindrome, else it's not.
 */

function isPalindrome(x: number): boolean {
  let reversedNumber = 0;
  let copiedX = x;
  if (x < 0) {
    return false;
  }
  while (true) {
    reversedNumber += copiedX % 10;
    copiedX = Math.floor(copiedX / 10);
    if (copiedX) {
      reversedNumber *= 10;
    } else {
      return reversedNumber - x === 0;
    }
  }
};