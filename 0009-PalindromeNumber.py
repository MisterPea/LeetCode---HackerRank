# Solution: We generate the mirror image of the number `_x` by getting the modulo-10 to
# get the right-most number, them we remove that last number using floor division.
# While there exists a number we continually multiply it by 10 to shift all numbers to the left.
# It's only on the final digit that we don't do that. We then get the difference between the
# original number and its mirror; if we get 0 then it's a palindrome, else it's not.

# Time Complexity: I was thinking it would be O(n) but it's stated to be O(log10(n)) which would be sub-linear.
# "We divided the input by 10 for every iteration, so the time complexity is O(log⁡10(n))
# Space Complexity: O(1) - We're not using any extra space

class Solution:
    """
    Given an integer x, return true if x is a
    palindrome, and false otherwise.
    """

    def is_palindrome(self, _x: int) -> bool:
        """Method to determine if a number is a palindrome"""
        if _x < 0:
            return False
        reversed_number = 0
        copied_x = _x
        while True:
            reversed_number += copied_x % 10
            copied_x = copied_x // 10
            if copied_x:
                reversed_number *= 10
            else:
                return reversed_number - _x == 0