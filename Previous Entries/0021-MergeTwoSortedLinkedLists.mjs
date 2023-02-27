import LinkedListUtil from "./LinkedListUtil.mjs";

//  * Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  const head = new ListNode();
  let newHead = head;

  while (list1 || list2) {
    if (list1 === null) {
      newHead.next = list2;
      return head.next;

    } else if (list2 === null) {
      newHead.next = list1;
      return head.next;
    }

    const list1Val = list1.val;
    const list2Val = list2.val;

    if (list1Val <= list2Val) {
      newHead.next = list1;
      newHead = newHead.next;
      list1 = list1.next;
    }

    if (list2Val <= list1Val) {
      newHead.next = list2;
      newHead = newHead.next;
      list2 = list2.next;
    }
  }
  return head.next;
};

const LL = new LinkedListUtil();
const list1 = LL.createList([1, 2, 4]);
const list2 = LL.createList([1, 3, 4]);
const output = mergeTwoLists(list1, list2);
LL.printList(output);