from typing import List

# Solution: We only need to look at the length of letters for the shortest word.
# So, if we have ['ab', 'abcdef'...], we only need to search up to length 2 for each List index.
# The maximum string length is capped at 200, so on our first pass we look at all the lengths and
# set the max length (shortest) to the shortest word. If at any point we find an disparity in the
# current letter, we return what we have `longest_prefix`.

# Time complexity: O(n) where n is the length of the shortest word * number of words
# Space complexity: O(n) we'd use linear (could be sub linear) space equal to the length of the shortest word

class Solution:
    """Class for LCP"""

    def longest_common_prefix(self, strs: List[str]) -> str:
        """Method to return the longest common prefix amongst a List of strings"""
        longest_prefix = ''
        shortest = 201
        i = 0
        while i < shortest:
            current_prefix = ''
            for word in strs:
                # we're only looking for shortest word on the first pass
                if i == 0:
                    shortest = min(shortest, len(word))
                    if shortest == 0:
                        return ''
                # we set the current letter at the beginning of each pass: if current_prefix len = 0
                if len(current_prefix) == 0:
                    current_prefix = word[i]
                elif current_prefix != word[i]:
                    return longest_prefix
            # if we're here, we've passed the equivalency for this index c
            longest_prefix += current_prefix
            i += 1
        return longest_prefix
