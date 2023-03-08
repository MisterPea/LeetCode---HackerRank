/*
 Solution two is to loop over the List, we look at a `seen` dict, if the number is a key
 we immediately return True— else, we add that number to the `seen` dict.
 Time Complexity: O(n) where n is the len of the List -We have O(n) on insertion and O(1) lookup.
 Effective complexity should be less since we'd exit before the end if we find a match.
 Space Complexity: O(1) We use constant space.
*/
function containsDuplicate(nums: number[]): boolean {
  const seen: { [key: number]: number; } = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (seen.hasOwnProperty(nums[i])) {
      return true;
    }
    seen[nums[i]] = 1;
  }
  return false;
};