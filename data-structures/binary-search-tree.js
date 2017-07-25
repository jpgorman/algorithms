class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export class BinarySearchTree {
  constructor(value){
    this.current = new Node(value)
  }

  insert(value, current) {
    current = current || this.current
    const direction = value <= current.value ? "left" : "right"
    if(current[direction] === null) {
      current[direction] = new Node(value)
    } else {
      this.insert(value, current[direction])
    }
    return this
  }

  contains(value, current) {
    current = current || this.current
    if (value === current.value) return true
    const direction = value < current.value ? "left" : "right"
    return !!current[direction] && this.contains(value, current[direction])
  }

  /*
  Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
  Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).
  */

  traverseDepthFirstInOrder(callbackFn, current) {
    current = current || this.current
    if(!!current.left) {
      this.traverseDepthFirstInOrder(callbackFn, current.left)
    }

    callbackFn(current.value)

    if(!!current.right) {
      this.traverseDepthFirstInOrder(callbackFn, current.right)
    }
  }
}
