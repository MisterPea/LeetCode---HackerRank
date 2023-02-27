from typing import List

# Given an array of integers nums and an integer target,
# return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution,
# and you may not use the same element twice.
# You can return the answer in any order.
# Solution: Keep track of the remainder for each number, and store it in a Dict.
# For each iteration check the current array value to see if its compliment exists in the Dict
# Time Complexity: O(n)
# Space Complexity: O(1)

class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        remainder_dict = {}
        for i, num in enumerate(nums):
            if num in remainder_dict:
                return [remainder_dict[num], i]
            remainder = target - num
            remainder_dict[remainder] = i


S = Solution()
NUMS = [2, 7]
TARGET = 9
print(S.two_sum(NUMS, TARGET))
