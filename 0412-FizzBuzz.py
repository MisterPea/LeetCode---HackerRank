from typing import List

# Given an integer n, return a string array answer (1-indexed) where:
# • answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
# • answer[i] == "Fizz" if i is divisible by 3.
# • answer[i] == "Buzz" if i is divisible by 5.
# • answer[i] == i (as a string) if none of the above conditions are true.

# Solution: Loop, append, return
# Time Complexity: O(n) where n is the size of the number to parse
# Space Complexity: O(n) where n is the number of iterations
class Solution:
    def fizzBuzz(self, _n: int) -> List[str]:
        """Method that takes a number and outputs either Fizz, Buzz, or a Number at each index"""
        output = []
        for i in range(1, _n + 1):
            local_out = ''
            if i % 3 == 0:
                local_out += 'Fizz'
            if i % 5 == 0:
                 local_out += 'Buzz'
            if len(local_out) == 0:
                local_out = f'{i}'
            output.append(local_out)
        return output
            