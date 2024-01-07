function findPairs(head, target) {
    let result = [];

    let left = head;
    let curr = head;

    // Traverse to the end for right pointer
    let right = null;
    while (curr !== null) {
        right = curr;
        curr = curr.next;
    }

    // left < right
    while (left !== null && right !== null && left !== right && right.next !== left) {
        let sum = left.data + right.data;

        if (sum === target) {
            let temp = [left.data, right.data];
            result.push(temp);
            left = left.next;
            right = right.prev;
        } else if (sum < target) {
            left = left.next;
        } else {
            right = right.prev;
        }
    }

    return result;
}
