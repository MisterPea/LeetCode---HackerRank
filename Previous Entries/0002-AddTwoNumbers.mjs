import LinkedListUtil from "./LinkedListUtil.mjs";

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {

  let carry = 0;
  const head = new ListNode('head');
  let newHead = head;

  while (l1 || l2) {
    let localSum = 0;

    if (l1) {
      localSum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      localSum += l2.val;
      l2 = l2.next;
    }

    localSum += carry;

    if (localSum > 9) {
      carry = 1;
      localSum -= 10;
    } else {
      carry = 0;
    }

    newHead.next = new ListNode(localSum);
    newHead = newHead.next;
  }
  if (carry !== 0) newHead.next = new ListNode(carry);
  return head.next;
}

const l1 = new LinkedListUtil().createList([9, 9, 9, 9, 9, 9, 9]);
const l2 = new LinkedListUtil().createList([9, 9, 9, 9]);

const solution = addTwoNumbers(l1, l2);

new LinkedListUtil().printList(solution);