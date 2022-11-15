/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * The solution is a brute force-esq one, where we append the current string after every successful
 * traversal.
 * 
 * Time complexity: O(n^2)
 * Space complexity: O(s) where s is the length of the longest string
 * 
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let output = '';
 
  for (let indexOfLetter = 0; indexOfLetter < strs[0].length; indexOfLetter += 1) {
    let currentLetter = strs[0][indexOfLetter];

    for (let i = 1; i < strs.length; i += 1) {
      if (strs[i][indexOfLetter] !== currentLetter) {
        return output;
      }
    }
    output += currentLetter;
  }
  return output;
}


const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));