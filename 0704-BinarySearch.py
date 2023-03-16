from typing import List

# Given an array of integers nums which is sorted in ascending order,
# and an integer target, write a function to search target in nums.
# If target exists, then return its index. Otherwise, return -1.
# You must write an algorithm with O(log n) runtime complexity.

# Solution is basic a basic binary search, where we get the index
# of the ends of the list and constantly find the middle. If the
# middle is less than the target, we move the minimum bound + 1 to the
# calculated middle, and we recalculate the middle. Once the min in
# no longer less than the max we return -1, because our search window
# has been shrunk to zero.
# Time Complexity: O(log n) - basic binary searches are always going to be log n
# Space Complexity: O(1) - we're not using extra space - We have 3 pointers and
# they're using constant space.


class Solution:
    """ Solution Class """

    def search(self, nums: List[int], target: int) -> int:
        """Method to find a target number in an ordered list.
        It returns the index of the number or -1 if it doesn't exist"""
        _min = 0
        _max = len(nums)
        while _min < _max:
            mid = (_max + _min) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                _min = mid + 1
            else:
                _max = mid
        return -1