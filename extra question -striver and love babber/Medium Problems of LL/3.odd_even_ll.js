//https://leetcode.com/problems/odd-even-linked-list/description/

//group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

//The first node is considered odd, and the second node is even, and so on.

//Note that the relative order inside both the even and odd groups should remain as it was in the input.
//https://www.youtube.com/watch?v=_VHInOZbp6A


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var oddEvenList = function(head) {
    if (!head) {
        return null;
    }

    let oddh = null,
        evenh = null,
        oddt = null,
        event = null;
    let count = 1;// position, here so first element is  at the position 1(odd)

    while (head !== null) {
        if (count % 2 === 0) {
            if (evenh === null) {//starting element
                evenh = head;
                event = head;
                head = head.next;
            } else {
                event.next = head;
                event = event.next;
                head = head.next;
            }
        } else {
            if (oddh === null) {//starting element
                oddh = oddt = head;
                head = head.next;
            } else {
                oddt.next = head;
                oddt = oddt.next;
                head = head.next;
            }
        }
        count++;
    }

    if (oddh === null) {
        return evenh;
    }

    if (evenh === null) {
        return oddh;
    }

    event.next = null;
    oddt.next = evenh;

    return oddh;
};

// Example usage:
const head = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))));
const result = oddEvenList(head);
console.log(result);

