from typing import List

"""
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
"""

# Solution: While keeping a copy of the previous line, we add at the ith and ith-1 from the
# previous line and append it to the the current line array. At the end of the line we append
# the current line array to the output. This works because the first and last element are always
# one, so when looking at the previous line we're always (effectively) starting on index '1'.
# Time Complexity: O(num_of_rows^2) - because we're creating an equilateral triangle, we multiply
# height * width, which is num_of_rows.
# Space Complexity: O(1) or [maybe something less than O(n)] - we're not using extra space outside
# of what we're returning.


class Solution:
    """Solution Class"""

    def generate_pascal_triangle(self, num_rows: int) -> List[List[int]]:
        """Method to generate a Pascal's Triangle"""
        output = [[1]]
        prev_array = [1]
        for _ in range(0, num_rows - 1):
            i = 0
            current_array = []
            while i < len(output) + 1:
                if i == 0 or i == len(output):
                    current_array.append(1)
                else:
                    current_array.append(prev_array[i] + prev_array[i - 1])
                i += 1
            prev_array = current_array
            output.append(current_array)
        return output
