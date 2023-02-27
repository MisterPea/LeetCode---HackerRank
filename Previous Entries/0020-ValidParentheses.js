/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * Solution: We go through the string. If a string element matches a key in matchingParens then we push the
 * corresponding value into an Array. If the string element is not a key, then it's a closing paren. In that
 * case we pop the last value and if it matches the current string element, it's a proper closer. If it doesn't 
 * match or the Array is empty, then it's not a valid parenthesis structure.
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const matchingParens = { '{': '}', '[': ']', '(': ')' };
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] in matchingParens) {
      stack.push(matchingParens[s[i]]);
    } else {
      let lastParen = stack.pop();
      if(lastParen !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0;
};
