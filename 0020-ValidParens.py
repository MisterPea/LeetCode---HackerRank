"""
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
An input string is valid if:
• Open brackets must be closed by the same type of brackets.
• Open brackets must be closed in the correct order.
• Every close bracket has a corresponding open bracket of the same type.
"""
# Solution: When we find a beginning paren, we add its compliment to a List. 
# when we find a ending paren, we pop() the list, if they match, then we have 
# a match, if not there is no match. At the end we check the List to see if we
# have any un-matched elements.
# Runtime Complexity: 0(n)
# Space Complexity: 0(n)

class Solution:
    """_"""
    def is_valid(self, _s: str) -> bool:
        """Method to determine if parens are balanced"""
        matches = {"{": "}", "(": ")", "[": "]"}
        stack = []
        for char, _ in enumerate(_s):
            if char in matches:
                stack.append(matches[char])
            else:
                is_match = stack.pop()
                if is_match != char:
                    return False
        return len(stack) == 0
