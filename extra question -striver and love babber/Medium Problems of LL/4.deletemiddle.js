//It looks like you have a code snippet for removing the N-th node from the end of a singly-linked list. The removeNthFromEnd function uses the size function to find the position of the node to be removed and the remove function to perform the removal.
// Definition for singly-linked list.

function Node(data) {
  this.data = data;
  this.next = null;
}

function size(head) {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    temp = temp.next;
    count++;
  }
  return count;
}

// Function to remove the middle node from the linked list
function removeMiddle(head) {
  let length = size(head);
  if (length <= 1) {
    return null; // or head, depending on your specific requirements
  }
  let middlePosition = Math.floor(length / 2);
  let temp = head;
  for (let curr = 0; curr < middlePosition - 1; curr++) {
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
//head.next.next.next.next = new Node(5);
// Remove the middle node

// Example usage
// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5

console.log("Before deleting ");
// Printing the modified linked list
let temp1 = head;
while (temp1 !== null) {
  console.log(temp1.data);
  temp1 = temp1.next;
}

console.log("After deleting ");
// Removing the 2nd node from the end (B = 2)
let newHead = removeMiddle(head);
// Printing the modified linked list
let temp = newHead;
while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}


////////////////////////////////////////////////////////////////////////
// Function to find the middle element using the hare-tortoise algorithm
var deleteMiddle = function(head) {
  if (!head || !head.next) {
 // No or only one node, nothing to delete
 return null;
}

let slow = head;
let fast = head;
let prev = null;

// Use Hare and Tortoise algorithm to find the middle
while (fast != null && fast.next != null) {
 prev = slow;
 slow = slow.next;
 fast = fast.next.next;
}

// Remove the middle node
if (prev != null) {
 prev.next = slow.next;
} else {
 // If the head itself is the middle node
 head = head.next;
}

return head;
};