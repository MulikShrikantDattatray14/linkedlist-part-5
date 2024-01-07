// Your code defines a Node class for a doubly linked list and a function InsertAfter to insert a new node with given data after a specified node. The example usage creates a doubly linked list with three nodes (1 <-> 2 <-> 3) and then inserts a new node with data 4 after the second node.
// Definition of Node class
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Function to insert a new node after a given node
function InsertAfter(next_Node, new_data) {
    // Check if the given next_Node is NULL
    if (next_Node == null) {
       console.log("The given next node cannot be NULL <br>");
        return;
    }

    // 1. Allocate node 
    // 2. Put in the data
    let new_node = new Node(new_data);

    // 3. Make previous of new node as previous of next_node
    new_node.prev = next_Node.prev;

    // 4. Make the previous of next_node as new_node
    next_Node.prev = new_node;

    // 5. Make next_node as next of new_node
    new_node.next = next_Node;

    // 6. Change next of new_node's previous node
    if (new_node.prev != null)
        new_node.prev.next = new_node;// come back to previous note and connect to it the new_node
    else
        head = new_node;  // Assuming 'head' is a global variable representing the head of the linked list
}

// Example usage
// Creating a doubly linked list with three nodes: 1 <-> 2 <-> 3
let head = new Node(1);
let secondNode = new Node(2);
let thirdNode = new Node(3);

head.next = secondNode;
secondNode.prev = head;
secondNode.next = thirdNode;
thirdNode.prev = secondNode;

// Inserting a new node with data 4 before the secondNode
InsertAfter(secondNode, 4);

// Displaying the modified linked list
let current = head;
while (current != null) {
   console.log(current.data + " ");
    current = current.next;
}


