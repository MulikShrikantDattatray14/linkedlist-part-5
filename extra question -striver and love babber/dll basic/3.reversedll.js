// Define the Node class for a doubly linked list
class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev; // Fix: Change 'back' to 'prev'
    }
}

// Function to convert an array
// to a doubly linked list
function convertArr2DLL(arr) {
    // Create the head node with 
    // the first element of the array
    let head = new Node(arr[0]);
    // Initialize 'prev' to the head node
    let prev = head;

    for (let i = 1; i < arr.length; i++) {
        // Create a new node with data from
        // the array and set its 'prev' pointer
        // to the previous node
        let temp = new Node(arr[i], null, prev);
        // Update the 'next' pointer of the
        // previous node to point to the new node
        prev.next = temp;
        // Move 'prev' to the newly created
        // node for the next iteration
        prev = temp;
    }
    // Return the head of the
    // doubly linked list
    return head;
}

// Function to print the elements
// of the doubly linked list
function print(head) {
    while (head !== null) {
        // Print the data in the current node
        console.log(head.data + " ");
        // Move to the next node
        head = head.next;
    }
    console.log();
}

// Function to reverse a doubly linked list
function reverseDLL(head) {
    // Check if the list is empty
    // or has only one node
    if (head === null || head.next === null) {
        // No change is needed;
        // return the current head
        return head;
    }
    
    // Initialize a pointer to
    // the previous node
    let prev = null; 
    
    // Initialize a pointer
    // to the current node
    let current = head; 

    // Traverse the linked list
    while (current !== null) {
        // Store a reference to
        // the previous node
        prev = current.prev;

        // Swap the previous
        // and next pointers
        current.prev = current.next;
        current.next = prev;

        // Move to the next node
        // in the original list
        current = current.prev; 
    }

    // The final node in the original
    // list becomes the new head after reversal
    return prev.prev; // Fix: Return 'prev.prev' instead of 'prev'
}

const arr = [12, 5, 6, 8, 4];
// Convert the array to a doubly linked list
let head = convertArr2DLL(arr);
// Print the doubly linked list
console.log("Doubly Linked List Initially:  ");
print(head);

console.log("Doubly Linked List After Reversing :");

head = reverseDLL(head);
print(head);
