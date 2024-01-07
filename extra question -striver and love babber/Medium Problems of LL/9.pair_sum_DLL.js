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

  findPairsWithSum(k) {
    let result = [];
    let left = this.head;
    let right = this.tail;
////left<right
    while (left !=null && right!=null && left !== right && right.next !== left) {
      const sum = left.data + right.data;
      if (sum === k) {
        result.push([left.data, right.data]);
        left = left.next;
        right = right.prev;
      } else if (sum < k) {
        left = left.next;
      } else {
        right = right.prev;
      }
    }

    return result;
  }
}

// Example
const linkedList = new DoublyLinkedList();
linkedList.append(3);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(9);

const k = 6;
const pairs = linkedList.findPairsWithSum(k);

console.log("Pairs with sum", k, ":", pairs);
