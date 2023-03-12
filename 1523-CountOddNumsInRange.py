# Solution: When we are calculating the high (high + 1)//2 we're finding all the odd nums from high to zero.
# With the subtraction of low//2 we're removing all the odd numbers from zero to low.
# Time Complexity: O(1) - These arithmetic computations should be constant or near-constant time
# Space Complexity: O(1) - We're not using any extra space

class Solution:
    """ Solution Class"""

    def countOdds(self, low: int, high: int) -> int:
        """Method to find the number of odd nums in range"""
        return ((high + 1) // 2) - (low // 2)
