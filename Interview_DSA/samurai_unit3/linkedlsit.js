class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  //constructor
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //method
  //add
  add(element) {
    var node = new Node(element);
    //if the LinkedListis empty
    if (!this.head) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //insert
  insertAt(element, index) {
    if (index > this.size || (index < 0 && this.size)) {
      return false;
    }
    var node = new Node(element);
    var current = this.head;
    var prev = null;
    var i = 0;
    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      // insert at the index
      prev.next = node;
      //move to the inserted node
      prev = prev.next;
      //add the rest of the current node to the inserted Node
      prev.next = current;
      //increment size of
      this.size++;
    }
  }
  removeElement(element) {
    var current = this.head;
    var prev = null;

    while (current) {
      if (current.element === element) {
        // null
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    }
  }
  //delete
  //print
  //isEmpty
  //size
  isEmpty() {
    return this.size === 0 ? true : false;
  }
  sizeOf() {
    return this.size;
  }

  printList() {
    var current = this.head;
    var index = 0;

    while (current) {
      console.log("element:", current.element, "index:", index++);
      current = current.next;
    }
  }
}
var list = new LinkedList();
list.add(1);
list.add(2);
list.insertAt(5, 1);
list.removeElement(5);
list.printList();
console.log(list.sizeOf());

// const elem = new Node(5)
// console.log(elem)
