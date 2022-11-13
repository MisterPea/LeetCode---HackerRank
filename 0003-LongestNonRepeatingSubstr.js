/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 */
/**
 * Solution: We use 2 pointers left and right;
 * We really don't need to look at the whole string just the right.
 * If we find the string[right index] is in the Set, that means it's at the left most
 * pointer, or we would have removed it. So, we remove it from the Set advance the left
 * pointer, add the right index string, and calculate the length between right and left + 1
 * Time Complexity: O(n)
 * Space Complexity: O(n) assume linear because we're keeping the Set.
 * Note: Set lookups are O(1), as are insertions
 */

function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let result = 0;
  for (let right = 0; right < s.length; right += 1) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    } 
    charSet.add(s[right]);
    result = Math.max(result, right - left + 1);
  }
  console.log(charSet)
  return result;
}


const s = "pwwkew";
const sOut = lengthOfLongestSubstring(s);
console.log(sOut);