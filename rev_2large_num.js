class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    findSecondLargest() {
      if (!this.head || !this.head.next) {
        return null; 
      }
  
      let firstMax = -Infinity;
      let secondMax = -Infinity;
      let current = this.head;
  
      while (current !== null) {
        if (current.data > firstMax) {
          secondMax = firstMax;
          firstMax = current.data;
        } else if (current.data > secondMax && current.data < firstMax) {
          secondMax = current.data;
        }
  
        current = current.next;
      }
  
      return secondMax;
    }
  }
  
  const linkedList = new LinkedList();
  
  const userInput = prompt("Enter numbers: ");
  const numbers = userInput.split(" ").map(Number);
  
  numbers.forEach((number) => {
    linkedList.insertFirst(number);
  });
  
  linkedList.reverse();
  
  const secondLargest = linkedList.findSecondLargest();
  
  console.log("Reversed Linked List:", linkedList);
  console.log("Second Largest Number:", secondLargest);
  
  
  
  
  
  
  