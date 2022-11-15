from typing import List
# Given two sorted arrays nums1 and nums2 of size m and n respectively,
# return the median of the two sorted arrays.
#
# The overall run time complexity should be O(log (m+n)).
# Solution: We run through each array, finding the smallest at the current index, then
# putting that value in a new object/array. We then find the middle or middle 2 values
# and return that value (middle for odd length, mid +/- 1 for even divided by 2)


class Solution:
    def findMedianSortedArrays(self, nums1: List[int],
                               nums2: List[int]) -> float:
        i_one = 0
        i_two = 0
        one_length = len(nums1)
        two_length = len(nums2)
        nums3 = []

        while i_one < one_length or i_two < two_length:
            temp_one = None
            temp_two = None

            if i_one < one_length:
                temp_one = nums1[i_one]

            if i_two < two_length:
                temp_two = nums2[i_two]

            if temp_one is None:
                nums3.append(temp_two)
                i_two += 1
            elif temp_two is None:
                nums3.append(temp_one)
                i_one += 1
            elif temp_one < temp_two:
                nums3.append(temp_one)
                i_one += 1
            elif temp_one > temp_two:
                nums3.append(temp_two)
                i_two += 1
            else:
                nums3.append(temp_one)
                nums3.append(temp_two)
                i_one += 1
                i_two += 1

        middle = (one_length + two_length) // 2
        if ((one_length + two_length) % 2 == 0):
            return (nums3[middle - 1] + nums3[middle]) / 2
        return nums3[middle]


NUMS1 = [1, 2]
NUMS2 = [3,4]

S = Solution()
print(S.findMedianSortedArrays(NUMS1, NUMS2))