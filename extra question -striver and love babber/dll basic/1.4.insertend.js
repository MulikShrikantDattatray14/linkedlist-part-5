// adding a node at the end of a linked list.

// Node class to represent a node in the linked list
class Node {
    constructor(data) {
        this.data = data; // Data to be stored in the node
        this.next = null; // Pointer to the next node in the list
        this.prev = null; // Pointer to the previous node in the list
    }
}

// Add a node at the end of the list
function append(new_data) {
    /* 1. Allocate a new node and put in the data */
    var new_node = new Node(new_data);

    var last = head; /* Used in step 5*/

    /* 2. This new node is going to be the last node, so
    * make next of it as NULL */
    new_node.next = null;

    /* 3. If the Linked List is empty, then make the new
    * node as head */
    if (head == null) {
        new_node.prev = null;
        head = new_node;
        return;
    }

    /* 4. Else, traverse till the last node */
    while (last.next != null)// stop it before end
        last = last.next;

    /* 5. Change the next of the last node */
    last.next = new_node;

    /* 6. Make the last node as the previous of the new node */
    new_node.prev = last;
}

// Function to print the linked list
function printList() {
    var current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

// Assume head is a global variable representing the head of the linked list
var head = null;

// Example usage
append(1);
append(2);
append(3);

// Print the linked list
printList();

