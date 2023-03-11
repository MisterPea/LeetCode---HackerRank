//  Definition for singly-linked list.
export class ListNode {
  constructor(val, next=null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
export default class LinkedList {

  createLinkedList(arr) {
    const head = new ListNode('head', null);
    let next_head = head;
    for (let i = 0; i < arr.length; i += 1) {
      next_head.next = new ListNode(arr[i]);
      next_head = next_head.next;
    }
    return head.next;
  }

  printLinkedList(head) {
    const output= [];

    while (head !== null) {
      output.push(head.val);
      head = head.next;
    }
    console.log(output.join(' -> '))
  }
}
