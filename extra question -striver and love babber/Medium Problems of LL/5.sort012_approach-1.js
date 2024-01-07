class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function sortLinkedList(head) {
    // Count occurrences of 0, 1, and 2
    let count = [0, 0, 0];
    let temp = head;
    while (temp !== null) {
        count[temp.data]++;
        temp = temp.next;
    }
    // Update linked list with sorted values
    temp = head;
    for (let i = 0; i < 3; i++) {
        while (count[i] > 0) {
            temp.data = i;
            count[i]--;
            temp = temp.next;
        }
    }
    return head;
}

// Example usage:
// Assuming you have a linked list with nodes like this:
// 1 -> 0 -> 2 -> 1 -> 2
// Constructing the linked list for demonstration purposes:
let head = new ListNode(1);
head.next = new ListNode(0);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
head.next.next.next.next = new ListNode(2);

let sortedHead = sortLinkedList(head);

// Printing the sorted linked list values
while (sortedHead !== null) {
    console.log(sortedHead.data);
    sortedHead = sortedHead.next;
}
