class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class LinkedListUtil {
  createList(array) {
    let head = new ListNode('head');
    let nextHead = head;
    for (let i = 0; i < array.length; i += 1) {
      nextHead.next = new ListNode(array[i])
      nextHead = nextHead.next;
    }
    return head.next;
  }

  printList(linkedList) {
    const output = [];
    while (linkedList) {
      output.push(linkedList.val);
      linkedList = linkedList.next;
    }
    console.log(output.join(' -> '));
  }
}
