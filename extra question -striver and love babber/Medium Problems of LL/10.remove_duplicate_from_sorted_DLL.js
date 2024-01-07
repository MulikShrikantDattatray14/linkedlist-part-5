class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

function removeDuplicates(head) {
    let temp = head;
    while (temp !== null && temp.next !== null) {
        // nextndoe is node that is in front of the current node(temp)
        let nextNode = temp.next;
        while (nextNode !== null && nextNode.val === temp.val) {
            nextNode = nextNode.next;
        }
        temp.next = nextNode;
        if (nextNode !== null) {
            nextNode.prev = temp;
        }
        temp = temp.next;
    }
    return head;
}

// Example usage:
// Create a sorted doubly linked list: 1 <-> 1 <-> 2 <-> 3 <-> 3
const node1 = new Node(1);
const node2 = new Node(1);
const node3 = new Node(2);
const node4 = new Node(3);
const node5 = new Node(3);
const node6 = new Node(3);
const node7 = new Node(3);
const node8 = new Node(3);
const node9 = new Node(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;

// Print the original list
let current = node1;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

// Remove duplicates
removeDuplicates(node1);

// Print the list after removing duplicates
current = node1;
console.log("List after removing duplicates:");
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
