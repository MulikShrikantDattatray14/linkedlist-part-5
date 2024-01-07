class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function rotateRight(head, k) {
    if (!head || k === 0) {
      return head;
    }
  
    // Step 1: Find the length of the linked list and locate the kth node from the end
    let length = 1;
    let current = head;
    while (current.next) {
      length++;
      current = current.next;
    }
  
    k = k % length; // Handle the case where k is greater than the length of the list
    if (k === 0) {
      return head; // No rotation needed
    }
  
    let kthNodeIndex = length - k;
    current.next = head; // Connect the tail to the head, forming a cycle
  
    // Move to the kth node from the end
    current = head;
    for (let i = 0; i < kthNodeIndex - 1; i++) {
      current = current.next;
    }
  
    // Step 2: Separate the list into two parts and update the head
    const newHead = current.next;
    current.next = null;
  
    return newHead;
  }
  
  // Example usage:
  const list = new ListNode(0, new ListNode(1, new ListNode(2)));
  const k = 4;
  const rotatedList = rotateRight(list, k);
  
  // Display the rotated list
  let result = [];
  let current = rotatedList;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  
  console.log(result); // Output: [4, 5, 1, 2, 3]
  