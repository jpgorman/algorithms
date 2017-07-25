class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export class BinarySearchTree {
  constructor(value){
    this.root = new Node(value)
  }

  insert(value, current) {
    current = current || this.root
    const direction = value <= current.value ? "left" : "right"
    if(current[direction] === null) {
      current[direction] = new Node(value)
    } else {
      this.insert(value, current[direction])
    }
    return this
  }

  contains(value, current) {
    current = current || this.root
    if (value === current.value) return true
    const direction = value < current.value ? "left" : "right"
    return !!current[direction] && this.contains(value, current[direction])
  }

  /*
  Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
  Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).
  */

  traverseInOrder(callbackFn, current) {
    current = current || this.root
    if(!!current.left) {
      this.traverseInOrder(callbackFn, current.left)
    }

    callbackFn(current.value)

    if(!!current.right) {
      this.traverseInOrder(callbackFn, current.right)
    }
  }

  /*
  Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)
  */

  traversePreOrder(callbackFn, current) {
    current = current || this.root
    callbackFn(current.value)
    if(!!current.left) {
      this.traversePreOrder(callbackFn, current.left)
    }

    if(!!current.right) {
      this.traversePreOrder(callbackFn, current.right)
    }
  }

  /*
  Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)
  */

  traversePostOrder(callbackFn, current) {
    current = current || this.root
    if(!!current.left) {
      this.traversePostOrder(callbackFn, current.left)
    }

    if(!!current.right) {
      this.traversePostOrder(callbackFn, current.right)
    }
    callbackFn(current.value)
  }

  deleteMin(current, parent) {
    current = current || this.root

    // delete single left node
    if(!current.left && !current.right)
      parent.left = null

    // swap single right into parent position
    if(!current.left && current.right) {
      if(parent === undefined) {
        this.root = current.right
      } else {
        parent.left = current.right
      }
    }

    // recurse as their are children
    if(current.left)
      this.deleteMin(current.left, current)
  }

}
