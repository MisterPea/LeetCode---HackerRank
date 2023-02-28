from typing import List

# Solution: Keep track of the number of times a value comes up;
# then compare the lengths of the resultant dict and the Set of dict values.
# If the lengths match, then there is a unique number of occurrences, because
# every value for every key would be unique. If it were false, then 2 or
# more values would be the same, and the Set of values would be shorter than
# the length of the hash_dict.

# Runtime Complexity: O(n) We iterate over the array and constant-time insert into the Object
# Space Complexity: O(n) We're storing the length of the hashValues


class Solution:
    """
    Given an array of integers arr, return true if the number of
    occurrences of each value in the array is unique or false otherwise.
    """

    def uniqueOccurrences(self, arr: List[int]) -> bool:
        """Method to determine if array has unique number of numeric occurrences"""
        hash_dict = {}
        for num in arr:
            if num in hash_dict:
                hash_dict[num] += 1
            else:
                hash_dict[num] = 1
        hash_list = hash_dict.values()
        return len(hash_list) == len(set(hash_list))
