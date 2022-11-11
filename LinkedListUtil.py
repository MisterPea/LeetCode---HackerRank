from typing import List

class ListNode:
    """Singly linked list node"""
    def __init__(self, val):
        self.val = val
        self.next = None


class LinkedListUtil:
    """Basic linked list utilities"""
    @classmethod
    def create_list(cls, array: List[any]):
        """Returns a linked list, which is derived from a List"""
        head = ListNode('head')
        new_head = head
        for list_item in array:
            new_head.next = ListNode(list_item)
            new_head = new_head.next
        return head.next

    @classmethod
    def print_list(cls, linked_list: ListNode):
        """Method to print out the entirety of a singly linked list"""
        output = []
        while linked_list:
            output.append(str(linked_list.val))
            linked_list = linked_list.next
        print(' -> '.join(output))
