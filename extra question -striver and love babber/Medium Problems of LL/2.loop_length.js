//Given a linked list, check if the linked list has a loop (cycle) or not. The below diagram shows a linked list with a loop. 
//logic : if slow==fast , there is a cycle . if fast=null or fast.next=null , there is no cycle .
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (this.head == null) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    hasCycle() {
        let tortoise = this.head;
        let hare = this.head;
        let loopLength = 0;
    
        while (hare !== null && hare.next !== null) {
          tortoise = tortoise.next;
          hare = hare.next.next;
    
          if (tortoise === hare) {
            // Cycle detected
            loopLength = this.calculateLoopLength(tortoise,hare);
            return { hasCycle: true, length: loopLength };
          }
        }
    
        return { hasCycle: false, length: 0 }; // No cycle found
      }
    //The logic used to calculate the length of the loop is based on the fact that once the tortoise and hare meet inside the loop, you can keep one of them fixed and move the other until they meet again. The number of steps it takes for them to meet again will be equal to the length of the loop.
    calculateLoopLength(tortoise,hare) {
        let length = 1;
        let current = tortoise;
    
        while (current.next !== hare) {
            length++;
            current = current.next;
        } 
    
        return length;
    }
    }
    
    // Example usage:
    const linkedList = new LinkedList();
    linkedList.append(4);//head
    linkedList.append(10);//head.next
    linkedList.append(3);//head.next.next
    linkedList.append(5);//head.next.next.next
    linkedList.append(10);//head.next.next.next.next
    //input-2 : 4 -> 10 -> 3 -> 5 -> 10
    // Creating a cycle for testing
    linkedList.head.next.next.next.next = linkedList.head.next;
    
    const result = linkedList.hasCycle();
    console.log(result.hasCycle); // Output: true
    console.log(result.length);   // Output: 4 (length of the loop)
    
  
  ///////////////////////////////////////////////////////////
 // find the length of loop 
  function hasCycle(head) {
    let tortoise = head;
    let hare = head;
    let loopLength = 0;

    while (hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) {
            // Cycle detected
            loopLength = calculateLoopLength(tortoise, head);
            return loopLength; // Return loop length when a cycle is detected
        }
    }

    return 0; // No cycle found
}

function calculateLoopLength(tortoise, head) {
    let length = 1;
    let current = tortoise;

    while (current.next !== tortoise) {
        length++;
        current = current.next;
    }

    return length;
}

// Example usage:
// Assuming 'head' is the head of your linked list
// const result = hasCycle(head);
// console.log(result);
