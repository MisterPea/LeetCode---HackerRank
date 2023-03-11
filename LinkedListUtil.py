from typing import List


class ListNode:
    """Definition for singly-linked list."""

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class LinkedLists:
    """Collection of linked list utilities"""

    @staticmethod
    def create_linked_list(arr: List) -> ListNode:
        """Method to create a linked list from a List"""
        head = ListNode('head')
        next_head = head
        for element in arr:
            next_head.next = ListNode(element)
            next_head = next_head.next
        return head.next

    @staticmethod
    def print_linked_list(head: ListNode) -> None:
        """Method to print the contents of a linked list"""
        output = []
        while head:
            output.append(str(head.val))
            head = head.next
        print(' -> '.join(output))
