/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
• Open brackets must be closed by the same type of brackets.
• Open brackets must be closed in the correct order.
• Every close bracket has a corresponding open bracket of the same type.
*/

// Solution: When we find a beginning paren, we add its compliment to an Array. 
// when we find a ending paren, we pop() the array, if they match, then we have 
// a match, if not there is no match. At the end we check the Array to see if we
// have any un-matched elements.
// Runtime Complexity: 0(n)
// Space Complexity: 0(n)

function isValid(s: string): boolean {

  const matches = { "{": "}", "[": "]", "(": ")" };
  const stack: string[] = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] in matches) {
      // match
      stack.push(matches[s[i]]);
    } else {
      // no match
      const isMatch = stack.pop();
      if (isMatch !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
