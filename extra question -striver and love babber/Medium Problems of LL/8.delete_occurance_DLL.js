class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  deleteOccurrences(key) {
    let temp = this.head;

    while (temp !=null) {
      if (temp.data === key) {
        if (temp.prev != null) {//skipping the key node
            temp.prev.next = temp.next;
        } else {// directly take head to head.next i.e temp.next( thus skipping the first node)
          this.head = temp.next;
        }

        if (temp.next != null) {
            temp.next.prev = temp.prev;
        } else {// directly come back ( thus skipping the last node)
          this.tail = temp.prev;
        }
      }

      temp = temp.next;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(2);
dll.append(4);
dll.append(2);

console.log("Original Doubly Linked List:");
dll.display();

const keyToRemove = 2;
dll.deleteOccurrences(keyToRemove);

console.log(`Doubly Linked List after removing occurrences of ${keyToRemove}:`);
dll.display();


/////////////////////////////////////////////////////////////////////////////////
//Delete all occurrences of a given key in a doubly linked list
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.prev = null;
//     this.next = null;
//   }
// }

// function deleteAllOccurrences(head, key) {
//   let temp = head;

//   while (temp !== null) {
//     if (temp.data === key) {
//       if (temp.prev !== null) {
//         temp.prev.next = temp.next;
//       } else {
//         head = temp.next;
//       }

//       if (temp.next !== null) {
//         temp.next.prev = temp.prev;
//       }
//     }

//     temp = temp.next;
//   }

//   return head;
// }

// // Example usage:
// // Assuming you have a doubly linked list and a key you want to delete
// // Replace 'yourDoublyLinkedListHead' and 'yourTargetKey' with actual values
// //let yourDoublyLinkedListHead = /* Initialize with your head */;
// //const yourTargetKey = /* Replace with your actual target key */;
// yourDoublyLinkedListHead = deleteAllOccurrences(yourDoublyLinkedListHead, yourTargetKey);
