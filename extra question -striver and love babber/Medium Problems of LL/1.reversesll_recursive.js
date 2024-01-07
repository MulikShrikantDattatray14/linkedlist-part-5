// Problem Statement: Problem Statement: Given the head of a singly linked list, write a program to reverse the linked list, and return the head pointer to the reversed list.


class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  // Function to reverse a singly
  // linked list using recursion
  function reverseLinkedList(head) {
      // Base case:
      // If the linked list is empty or has only one node,
      // return the head as it is already reversed.
      if (head === null || head.next === null) {
          return head;
      }
      
      // Recursive step:
      // Reverse the linked list starting
      // from the second node (head.next), bcz from here we are considering the LL of size>=2
      var newHead = reverseLinkedList(head.next);
      
      // Save a reference to the node following
      // the current 'head' node.
      var front = head.next;
      
      // Make the 'front' node point to the current
      // 'head' node in the reversed order.
      front.next = head;
      
      // Break the link from the current 'head' node
      // to the 'front' node to avoid cycles.
      head.next = null;
      
      // Return the 'newHead,' which is the new
      // head of the reversed linked list.
      return newHead;
  }
  
  // Function to print the linked list
  function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
      process.stdout.write(temp.data + ' ');
      temp = temp.next;
    }
    console.log();
  }
  
  // Create a linked list with
  // values 1, 3, 2, and 4
  let head = new Node('S');
  head.next = new Node('H');
  head.next.next = new Node('R');
  head.next.next.next = new Node('I');
  
  // Print the original linked list
  process.stdout.write('Original Linked List: ');
  printLinkedList(head);
  
  // Reverse the linked list
  head = reverseLinkedList(head);
  
  // Print the reversed linked list
  process.stdout.write('Reversed Linked List: ');
  printLinkedList(head);

  