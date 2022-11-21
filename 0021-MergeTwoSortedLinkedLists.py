from typing import Optional
from LinkedListUtil import LinkedListUtil


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode],
                      list2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        new_head = head

        while list1 or list2:
            if list1 is None:
                new_head.next = list2
                return head.next
            if list2 is None:
                new_head.next = list1
                return head.next

            list1_val = list1.val
            list2_val = list2.val
            
            if list1_val >= list2_val:
                new_head.next = list2
                new_head = new_head.next
                list2 = list2.next

            if list1_val <= list2_val:
                new_head.next = list1
                new_head = new_head.next
                list1 = list1.next
        return head.next


LL = LinkedListUtil()
LIST1 = LL.create_list([1, 2, 4, 5, 6])
LIST2 = LL.create_list([1, 3])

S = Solution()
OUTPUT = S.mergeTwoLists(LIST1, LIST2)

LL.print_list(OUTPUT)