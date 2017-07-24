class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

export class LinkedList {
  constructor(data){
    this.head = new Node(data)
    this.tail = this.head
  }

  __walk(item, callback) {
    while(item) {
      callback(item)
      item = item.next
    }
  }

  __findNode(nodeToFind, property) {
    let matched = null
    const matcher = (node) => {
      if (property && node[property] === nodeToFind)
        matched = node
      if (!property && node === nodeToFind) {
        matched = node
      }
    }
    this.__walk(this.head, matcher)
    return matched

  }

  // invoke callback function with the value of each node
  forEach(callbackFn) {
    return this.__walk(this.head, callbackFn)
  }

  // string with all values in list (ex: '0, 1, 2, 3')
  print() {
    const result = []
    const buildString = ({data}) => result.push(data)
    this.__walk(this.head, buildString)
    return result.join(", ")
  }

  // insert new node associated with value passed in after refNode
  insertAfter(refNode, data) {
    const newNode = new Node(data)
    // set new nodes next to match nodes next
    newNode.next = refNode.next
    // set matched next to new node
    refNode.next = newNode

    // check if this is the new tail
    if (newNode.next === null)
      this.tail = newNode
  }

  // remove node after the refNode
  removeAfter(refNode) {
    if (refNode.next !== null) {
      const newNext = refNode.next
      refNode.next = newNext.next
    }

    // check if this is the new tail
    if (refNode.next === null)
      this.tail = refNode

  }

  // insert new head node at the beginning of the list with the value passed in
  insertHead(value) {
    const newHead = new Node(value)
    newHead.next = this.head
    this.head = newHead
  }

  // remove the head node of the linked list
  removeHead() {
    const newHead = this.head.next
    if(newHead !== null)
      this.head = newHead

    // check if this is only item left
    if (this.head.next === null)
      this.tail = this.head
  }

  // first node that has a value matching what was passed in
  findNodeByValue(value) {
    let matched = null
    const matcher = (node) => {
      if (node.data === value) matched = node
    }
    this.__walk(this.head, matcher)
    return matched
  }

  // add a new tail node at the end of the list with the associated value passed in
  appendToTail(value) {
    const newTail = new Node(value)
    const currentTail = (this.tail !== null) ? this.tail : this.head
    currentTail.next = newTail
    this.tail = newTail
  }

  // remove the tail node from the list
  removeTail() {
    const matched = this.__findNode(this.tail, "next")
    matched.next = null
    this.tail = matched

    // check if this is only item left
    if (this.head.next === null)
      this.tail = this.head
  }
}
