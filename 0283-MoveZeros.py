from typing import List

# Given an integer array nums, move all 0's to the end
# of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# Solution: We loop through the array with a while loop. If we encounter a '0'
# we pop() it, thereby shortening the array or passively advancing it. We then 
# append a zero to our zeros array. Once we get to the end of the nums array, 
# we append our zeros array to the end of the nums array.
# Time Complexity: O(n) - We only need to run through once and the time complexity 
# for the final append is O(1)
# Space Complexity: O(1) - We're not using extra space for storage. 

class Solution:
    """ Solution """

    def move_zeroes(self, nums: List[int]) -> None:
        """Do not return anything, modify nums in-place instead."""
        zeros = []
        i = 0
        while i < len(nums):
            if nums[i] == 0:
                nums.pop(i)
                zeros += [0]
            else:
                i += 1
        nums += zeros
