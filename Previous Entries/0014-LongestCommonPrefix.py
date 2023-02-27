from typing import List

# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".
#
# The solution is a brute force-esq one, where we append the current string after every successful
# traversal.
#
# Time complexity: O(n^2)
# Space complexity: O(s) where s is the length of the longest string

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        output = ''
        strs.sort()
        for letter_index in range(0, len(strs[0])):
            current_letter = strs[0][letter_index]
            for i in range(0, len(strs)):
                if current_letter != strs[i][letter_index]:
                    return output
            output += current_letter
        return output
