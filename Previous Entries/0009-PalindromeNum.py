import math


class Solution:
    def isPalindrome_v1(self, x: int) -> bool:
        if x < 0:
            return False
        if x == 0:
            return True

        num = x
        reversed_num = 0
        log10e = 0.4342944819
        num_length = math.floor(math.log(x) * log10e + 1)

        while num:
            temp_num = num % 10
            num //= 10

            if num_length != 1:
                temp_num *= pow(10, num_length - 1)
                num_length -= 1

            reversed_num += temp_num

        return reversed_num - x == 0

    def isPalindrome_v2(self, x: int) -> bool:
        num = x
        reversed_num = 0
        if x < 0:
            return False

        while num:
            temp_num = num % 10
            reversed_num = reversed_num * 10 + temp_num
            num //= 10

        return reversed_num == x
