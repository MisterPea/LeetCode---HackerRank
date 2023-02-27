# Given a string s, find the length of the longest substring
# without repeating characters.

# Solution: We use 2 pointers left and right;
# We really don't need to look at the whole string just the right.
# If we find the string[right index] is in the Set, that means it's at the left most
# pointer, or we would have removed it. So, we remove it from the Set advance the left
# pointer, add the right index string, and calculate the length between right and left + 1
# Time Complexity: O(n)
# Space Complexity: O(n) assume linear because we're keeping the Set.
# Note: Set lookups are O(1), as are insertions

class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    char_set = set()
    left = 0
    result = 0

    for right in range(len(s)):
      while s[right] in char_set:
        char_set.remove(s[left])
        left += 1
      char_set.add(s[right])
      result = max(result, right - left + 1)
    return result


SOL = Solution()
STRING = 'pwwabw'
print(SOL.lengthOfLongestSubstring(STRING))
