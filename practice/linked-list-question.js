/**
 * Definition for singly-linked list.
 * 
}
 */

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(node) {
  let arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let current = head;
  let curry = 0;

  while (l1.next !== null || l2.next !== null || curry !== 0) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + curry;

    curry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return head.next;
};

let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);

console.log(listToArray(result));
