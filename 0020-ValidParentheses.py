# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
# determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

class Solution:
    def isValid(self, s: str) -> bool:
        matching_key = {'{': '}', '[': ']', '(': ')'}
        stack = []
        for char in s:
            if char in matching_key:
                stack.append(matching_key[char])
            elif len(stack) == 0:
                return False
            else:
                current_char = stack.pop(len(stack) - 1)
                if current_char != char:
                    return False

        return len(stack) == 0
