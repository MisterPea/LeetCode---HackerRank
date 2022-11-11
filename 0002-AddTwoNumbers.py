from typing import Optional

from LinkedListUtil import LinkedListUtil


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    @classmethod
    def add_two_numbers(cls, l_1: Optional[ListNode], l_2: Optional[ListNode]) -> Optional[ListNode]:
        """Method to add two linked lists"""
        carry = 0
        head = ListNode()
        new_head = head

        while l_1 is not None or l_2 is not None:
            local_value = 0

            if l_1 is not None:
                local_value += l_1.val
                l_1 = l_1.next

            if l_2 is not None:
                local_value += l_2.val
                l_2 = l_2.next

            local_value += carry

            if local_value > 9:
                carry = 1
                local_value -= 10
            else:
                carry = 0

            new_head.next = ListNode(local_value)
            new_head = new_head.next

        if carry != 0:
            new_head.next = ListNode(carry)
        return head.next

S = Solution()
LL = LinkedListUtil()

L1 = LL.create_list([9, 9, 9, 9, 9, 9, 9])
L2 = LL.create_list([9, 9, 9, 9])

OUTPUT = S.add_two_numbers(L1, L2)
LL.print_list(OUTPUT)
