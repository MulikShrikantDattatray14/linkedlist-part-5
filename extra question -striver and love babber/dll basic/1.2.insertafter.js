//insert a new node with given data after a specified node in the doubly linked list.
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function InsertAfter(prev_Node, new_data) {
  // Check if the given prev_node is NULL
  if (prev_Node == null) {
    console.log("The given previous node cannot be NULL <br>");
    return;
  }

  // 1. allocate node
  // 2. put in the data
  let new_node = new Node(new_data);

  // 3. Make next of new node as next of prev_node
  new_node.next = prev_Node.next; // creating link at front

  // 4. Make the next of prev_node as new_node
  prev_Node.next = new_node; // creating link a back

  // 5. Make prev_node as previous of new_node
  new_node.prev = prev_Node;

  // 6. Change previous of new_node's next node
  //Change the pointer of the new node’s previous pointer to new_node.
  if (new_node.next != null) new_node.next.prev = new_node; // go ahead and connect it back
}

// Example usage:
// Assuming you have a doubly linked list with nodes: A <-> B <-> C

// Creating nodes
let nodeA = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");

// Linking nodes
nodeA.next = nodeB;
nodeB.prev = nodeA;
nodeB.next = nodeC;
nodeC.prev = nodeB;

// Inserting a new node with data 'X' after nodeB
InsertAfter(nodeB, "X");

// Printing the doubly linked list
let currentNode = nodeA;
while (currentNode != null) {
  console.log(currentNode.data + " <-> ");
  currentNode = currentNode.next;
}
console.log("null");

// Time Complexity: O(1)
// Auxiliary Space: O(1)
