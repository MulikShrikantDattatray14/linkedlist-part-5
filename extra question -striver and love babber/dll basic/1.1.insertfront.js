// Doubly Linked List Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Initialize the head of the linked list
let head = null;

// Function to add a node at the front of the list
function push(new_data) {
    // 1. Allocate a new node
    // 2. Put in the data
    let new_Node = new Node(new_data);

    // 3. Make next of the new node as head and previous as NULL
    new_Node.next = head;
    new_Node.prev = null;

    // 4. Change the prev of the head node to the new node
    if (head !== null) {
        head.prev = new_Node;
    }

    // 5. Move the head to point to the new node
    head = new_Node;
}

// Example usage
push(5)
push(4)
push(3);
push(2);
push(1);


// Display the doubly linked list
let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}


//Time Complexity: O(1)
//Auxiliary Space: O(1)