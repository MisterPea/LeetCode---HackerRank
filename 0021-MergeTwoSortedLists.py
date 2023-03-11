from typing import Optional
from LinkedListUtil import ListNode


class Solution:
    """ solution class """

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        """Method to combine two, ordered linked lists into one"""
        head = ListNode()
        next_head = head
        while list1 and list2:
            if list1.val <= list2.val:
                next_head.next = list1
                list1 = list1.next
            else:
                next_head.next = list2
                list2 = list2.next
            next_head = next_head.next
        
        if (list1):
            next_head.next = list1

        if (list2):
            next_head.next = list2

        return head.next
