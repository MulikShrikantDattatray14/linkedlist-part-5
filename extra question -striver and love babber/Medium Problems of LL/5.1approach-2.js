function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function sortLinkedList(head) {
  if (!head) {
    return null;
  }

  let zeroHead = null,
    oneHead = null,
    twoHead = null,
    zeroTail = null,
    oneTail = null,
    twoTail = null;

  while (head !== null) {
    if (head.val === 0) {
      if (zeroHead === null) {
        zeroHead = zeroTail = head;
      } else {
        zeroTail.next = head;
        zeroTail = zeroTail.next;
      }
    } else if (head.val === 1) {
      if (oneHead === null) {
        oneHead = oneTail = head;
      } else {
        oneTail.next = head;
        oneTail = oneTail.next;
      }
    } else {
      if (twoHead === null) {
        twoHead = twoTail = head;
      } else {
        twoTail.next = head;
        twoTail = twoTail.next;
      }
    }
    head = head.next;
  }

  // Resetting the next property of the last node in each category to null
  if (zeroTail != null) zeroTail.next = null;
  if (oneTail != null) oneTail.next = null;
  if (twoTail != null) twoTail.next = null;

  if (zeroHead === null) {
    if (oneHead === null) {
      return twoHead;
    } else {
      oneTail.next = twoHead;
      return oneHead;
    }
  }

  zeroTail.next = oneHead;
  if (oneHead !== null) {
    oneTail.next = twoHead;
  }

  return zeroHead;
}

// Example usage:
// Assuming you have a linked list with nodes like this:
// 2 -> 1 -> 3 -> 5 -> 6 -> 4 -> 7
// Constructing the linked list for demonstration purposes:
const head = new ListNode(
  2,
  new ListNode(
    2,
    new ListNode(
      2,
      new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(2))))
    )
  )
);

let sortedHead = sortLinkedList(head);

// Printing the sorted linked list values
while (sortedHead !== null) {
  console.log(sortedHead.val);
  sortedHead = sortedHead.next;
}
