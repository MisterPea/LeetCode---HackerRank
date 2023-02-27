from typing import List

class Solution:
    """Method to find the indices of numbers that add up to the target"""
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        opposite = {}
        for i, num in enumerate(nums):
            if num in opposite:
                return [i, opposite[num]]
            opposite[target - num] = i


S = Solution()
print(S.twoSum([3, 2, 4], 6))
