// JavaScript program to delete a node from
// Doubly Linked List

// Class for Doubly Linked List
var head; // head of list

/* Doubly Linked list Node */
class Node {
  // Constructor to create a new node
  // next and prev is by default initialized
  // as null
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

// Adding a node at the front of the list
function push(new_data) {
  // 1. allocate node
  // 2. put in the data
  let new_Node = new Node(new_data);

  // 3. Make next of new node as head
  // and previous as NULL
  new_Node.next = head;
  new_Node.prev = null;

  // 4. change prev of head node to new node
  if (head != null) head.prev = new_Node;

  // 5. move the head to point to the new node
  head = new_Node;
}

// This function prints contents of linked list
// starting from the given node
function printlist(node) {
  last = null;

  while (node != null) {
    console.log(node.data + " ");
    last = node;
    node = node.next;
  }

  console.log("<br/>");
}

// Function to delete a node in a Doubly Linked List.
// head_ref --> pointer to head node pointer.
// del --> data of node to be deleted.
function deleteNode(del) {
  // Base case
  if (head == null || del == null) {
    return;
  }

  // If node to be deleted is head node
  //ensures that if the node to be deleted is the head node, the head pointer is updated to point to the next node (del.next). Additionally, if there is a next node, its prev pointer is set to null to correctly update the doubly linked list.
  if (head == del) {
    head = del.next;
    if (head != null) {
      head.prev = null;
    }
  }

  // Change next only if node to be deleted
  // is NOT the last node

  if (del.next != null) {
    del.next.prev = del.prev;
  }

  // Change prev only if node to be deleted
  // is NOT the first node
  if (del.prev != null) {
    del.prev.next = del.next;
  }

  // Finally, free the memory occupied by del
  return;
}

// Driver Code

// Start with the empty list

// Insert 2. So linked list becomes 2->NULL
push(2);

// Insert 4. So linked list becomes 4->2->NULL
push(4);

// Insert 8. So linked list becomes 8->4->2->NULL
push(8);

// Insert 10. So linked list becomes 10->8->4->2->NULL
push(10);

console.log("Created DLL is: ");
printlist(head);

// Deleting first node
deleteNode(head);
//deleteNode(head.next);
//deleteNode(head.next);

console.log("Modified Linked list: ");
printlist(head);
