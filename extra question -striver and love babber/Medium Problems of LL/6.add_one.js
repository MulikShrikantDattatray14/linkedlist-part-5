// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Function to reverse a linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Function to add 1 to the linked list representing a number
function addOneToList(head) {
  // Reverse the linked list
  let reversedHead = reverseLinkedList(head);
  //console.log(reversedHead);
  let temp = reversedHead;
  let carry = 1;

  while (temp !== null && carry > 0) {
    temp.val += carry;
    carry = Math.floor(temp.val / 10);
    temp.val = temp.val % 10;

    if (temp.next === null && carry > 0) {
      temp.next = new ListNode(carry);
      break;
    }

    temp = temp.next;
  }

  // Reverse the linked list again
  //console.log(reverseLinkedList(reversedHead))
  return reverseLinkedList(reversedHead);
}

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example usage
let initialList = [1,2,3,4,5];
let linkedListInitial = arrayToLinkedList(initialList);
let modifiedList = addOneToList(linkedListInitial);

console.log(linkedListToArray(modifiedList)); // Output: [1, 5, 3]
