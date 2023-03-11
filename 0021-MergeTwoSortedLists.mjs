import LinkedList from "./LinkedListUtils.mjs";
import { ListNode } from "./LinkedListUtils.mjs";

var mergeTwoLists = function (list1, list2) {
  const head = new ListNode('head');
  let next_head = head;
  while (list1 && list2) {

    if (list1.val <= list2.val) {
      next_head.next = list1;
      list1 = list1.next;
    } else {
      next_head.next = list2;
      list2 = list2.next;
    }
    next_head = next_head.next;
  }
  if (list1) {
    next_head.next = list1;
  }
  if (list2) {
    next_head.next = list2;
  }
  return head.next;
};

const LL = new LinkedList();
const list1 = LL.createLinkedList([]);
const list2 = LL.createLinkedList([1, 3, 4]);
const rtn = mergeTwoLists(list1, list2);
LL.printLinkedList(rtn);