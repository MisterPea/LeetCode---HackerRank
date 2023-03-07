from typing import List
"""
Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
  - At time t = 1, the number of trips completed by each bus are [1,0,0]. 
    The total number of trips completed is 1 + 0 + 0 = 1.
  - At time t = 2, the number of trips completed by each bus are [2,1,0]. 
    The total number of trips completed is 2 + 1 + 0 = 3.
  - At time t = 3, the number of trips completed by each bus are [3,1,1]. 
    The total number of trips completed is 3 + 1 + 1 = 5.
  So the minimum time needed for all buses to complete at least 5 trips is 3.

Solution: The idea is to use binary search to find out minimum edge. We get our upper bound by
multiplying the largest time by total trip (this gives us enough room). We then perform a basic binary
search, and return the leftmost (min_bound) when the max_bound crosses the min_bound.

Time Complexity (As stated in the solution): O(n * log(m*k)). max_bound is m*k the search space
is cut in half each time yielding O(log(m * k)) - each step is calculated in O(n)
Space Complexity: O(1) - boundaries and mid
"""


class Solution:

    def minimum_time(self, time: List[int], total_trips: int) -> int:
        """Method to determine minimum time to complete trips"""
        if len(time) == 1:
            return time[0] * total_trips
        min_bound = 1
        max_bound = max(time) * total_trips

        while min_bound < max_bound:
            mid = (max_bound + min_bound) // 2
            total_time = sum(mid // t for t in time)

            if total_time >= total_trips:
                max_bound = mid
            if total_time < total_trips:
                min_bound = mid + 1

        return min_bound


S = Solution()
S.minimum_time([1123, 123, 44, 125, 512], 2412)
