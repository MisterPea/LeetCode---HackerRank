from typing import List

# Solution: We get the number at i index and enter it into an array, while
# we look at the output from i - 1, which is added to the output at index i
# Time complexity: O(n) where n is the length of the array, and because we use
# a single loop
# Space Complexity: O(1) since were doing computation inline, we're not using
# extra space

class Solution:
    """-_-"""

    def runningSum(self, nums: List[int]) -> List[int]:
        """Method to create an array of running sums"""
        output = [nums[0]]
        for i in range(1, len(nums)):
            output.append(nums[i] + output[i - 1])
        return output

