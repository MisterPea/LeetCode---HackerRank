from typing import List

# Given an integer array nums, return true if any value appears at least twice
# in the array, and return false if every element is distinct.
# Solutions:
# Solution one is to convert the list into a Set and compare the length to
# the original List. If they're the same size, there are no duplicates, else there are.
# Time Complexity: O(n): O(n) on visiting each element for inclusion into the Set
# Space Complexity: O(1)
#
# Solution two is to loop over the List, we look at a `seen` dict, if the number is a key
# we immediately return True— else, we add that number to the `seen` dict.
# Time Complexity: O(n) where n is the len of the List -We have O(n) on insertion and O(1) lookup.
# Effective complexity should be less since we'd exit before the end if we find a match.
# Space Complexity: O(1) We use constant space.


class Solution:
    """Class for solution"""

    def contains_duplicate_v1(self, nums: List[int]) -> bool:
        """Method to determine if there are duplicate numbers"""
        return len(nums) > len(set(nums))

    def contains_duplicate_v2(self, nums: List[int]) -> bool:
        """Method to determine if there are duplicate numbers"""
        seen = {}
        for n in nums:
            if n in seen:
                return True
            seen[n] = 1
        return False
    