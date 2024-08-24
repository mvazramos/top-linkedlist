// Linked List Implementation

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value, null);
      console.log(this.headNode);
      return;
    }

    let node = this.headNode;
    let nextNode = node.nextNode;
    while (nextNode !== null) {
      node = nextNode;
      nextNode = node.nextNode;
    }

    let newNode = new Node(value, null);
    node.nextNode = newNode;
  }

  prepend(value) {
    let node = new Node(value, this.headNode);
    this.headNode = node;
  }

  size() {
    let count = 0;
    let nextNode = null;

    if (this.headNode !== null) {
      count++;
      nextNode = this.headNode.nextNode;
    }

    while (nextNode !== null) {
      count++;
      nextNode = nextNode.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let previousNode = this.headNode;
    let currentNode = this.headNode.nextNode;
    while (currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return previousNode;
  }

  at(index) {
    let i = 0;
    if (index > this.size() - 1) {
      console.log("Error. Index out of range.");
      return;
    }

    let currentNode = this.headNode;

    while (i !== index) {
      i++;
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    let previousNode = this.headNode;
    let currentNode = this.headNode.nextNode;

    if (previousNode === null) {
      console.log("Linked list is empty");
      return;
    }

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    delete previousNode.nextNode;
    previousNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.headNode;
    if (currentNode === null) {
      console.log("The LinkedList is empty.");
      return;
    }

    let found = false;
    while (!found && currentNode !== null) {
      if (currentNode.value == value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    console.log("Value not found.");
    return false;
  }

  find(value) {
    let currentNode = this.headNode;
    let index = 0;
    if (currentNode === null) {
      console.log("The LinkedList is empty.");
      return;
    }

    let found = false;
    while (!found && currentNode !== null) {
      if (currentNode.value == value) {
        return index;
      }
      index++;
      currentNode = currentNode.nextNode;
    }

    console.log("Value not found.");
    return null;
  }

  insertAt(value, index) {
    if (index > this.size() - 1) {
      console.log("Index out of bounds.");
      return;
    }

    let count = 0;
    let previousNode = null;
    let currentNode = this.headNode;
    let nextNode = this.headNode.nextNode;

    let newNode = new Node();
    newNode.value = value;

    if (currentNode === null) {
      this.headNode = newNode;
      this.headNode.nextNode = null;
      return;
    }

    while (count !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      nextNode = currentNode.nextNode;

      count++;
    }

    if (previousNode === null) {
      newNode.nextNode = currentNode;
      this.headNode = newNode;
      return;
    }

    previousNode.nextNode = newNode;
    newNode.nextNode = currentNode;
  }

  removeAt(index) {
    if (index > this.size() - 1) {
      console.log("Index out of bounds.");
      return;
    }

    let count = 0;
    let previousNode = null;
    let currentNode = this.headNode;
    let nextNode = this.headNode.nextNode;

    if (currentNode === null) {
      console.log("The LinkedList is empty.");
      return;
    }

    while (count !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      nextNode = currentNode.nextNode;

      count++;
    }

    if (previousNode === null) {
      currentNode = null;
      this.headNode = nextNode;
      return;
    }

    delete previousNode.nextNode;
    previousNode.nextNode = nextNode;
  }

  toString() {
    let node = this.headNode;

    if (node === null) {
      console.log("()");
      return;
    }

    let listString = "(" + node.value + ")";

    node = node.nextNode;

    while (node !== null) {
      listString += " -> (" + node.value + ")";
      node = node.nextNode;
    }

    console.log(listString);
  }
}

// Testing

const list = new LinkedList();

list.append("dog");
list.append("cat");

list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("banana");
list.prepend("apple");
list.prepend("july");

list.toString();

list.pop();
console.log(list.contains("cat"));
console.log(list.find("ze"));

/* list.removeAt(1); */
/* list.insertAt("ze", 2); */
list.toString();

/* console.log(list.size());

console.log(list.head().value);
console.log(list.tail().value);
console.log(list.at(3).value); */
