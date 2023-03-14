# Solution: With python, we're able to adjust the List as we iterate. The idea is that we start
# on the first index and look backwards by one (we could go the other way too n+1).
# If we encounter a match, we pop() it and shorten the List length. We then return that
# final length.
# Time Complexity: O(n) - We only have to loop through once but pop(n) is O(n) ... so O(n * n)?
# Space Complexity: O(1) - We're not using extra space.

class Solution:
    """ Solution Class """

    def remove_duplicates(self, nums):
        """Method to remove duplicates from an ordered array"""
        i = 1
        while i < len(nums):
            if nums[i] == nums[i - 1]:
                nums.pop(i)
            else:
                i += 1
        return len(nums)
