//  Solution: As we loop through the first word, we add a letter to longestPrefix.
// We then test that against every word. If we encounter a non-match we remover that letter from 
// longestPrefix, and we return that.

//  Time complexity: O(n) where n is the length of the shortest word * number of words
//  Space complexity: O(n) we'd use linear (could be sub linear) space equal to the length of the shortest word


function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = '';
  for (let i = 0; i < strs[0].length; i += 1) {
      longestPrefix += strs[0][i];
      for (let w = 1; w < strs.length; w += 1) {
          if (!strs[w].startsWith(longestPrefix)) {
              return longestPrefix.substring(0, longestPrefix.length - 1);
          }
      }
  }
  return longestPrefix;
};