from typing import List

# Solution: We loop through the arrays. Starting with 1, if we encounter that number
# in the array at the i-th index, we advance the index and the number.
# If we don't find that number, then we increment the missing index and advance n, but not i.
# If either k == missing or i == len(arr) -1, we calculate what the missing number is.
#
# Time complexity: O(n) where n is the length of the array
# Space complexity: O(1) we don't use any extra space


class Solution:
    """
    Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
    Return the kth positive integer that is missing from this array.
    Input: arr = [2,3,4,7,11], k = 5
    Output: 9
    Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
    The 5th missing positive integer is 9.
    """

    def find_kth_positive(self, arr: List[int], k: int) -> int:
        """Method that returns the Kth missing string"""
        missing = 0
        i = 0
        _n = 1
        while i < len(arr):
            if arr[i] == _n:
                i += 1
            else:
                missing += 1
            _n += 1
            if (missing == k):
                return _n - 1
        return _n + (k - missing - 1)
