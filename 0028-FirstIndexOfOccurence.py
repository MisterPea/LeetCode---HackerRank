# Given two strings needle and haystack, return the index of the first occurrence of
# needle in haystack, or -1 if needle is not part of haystack.
# Solution: We use python's str indexing to look at fragments of haystack using the len of needle.
# We travel to the end of the haystack string - the length of needle.
# If we find the index we immediately return it. If nothing is found, we return -1

# Time Complexity: O(2n) - I'm guessing it's 2n because the worst case would be a string
# slice the same size as the larger string
# Space Complexity: O(n) - where n is the size of the string slice. 

class Solution:
    """Method that returns the starting index of needle if it's found in haystack"""
    def strStr(self, haystack: str, needle: str) -> int:
        for i in range(0, len(haystack) - len(needle) + 1):
            if haystack[i:i + len(needle)] == needle:
                return i
        return -1
