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
    const direction = value <= current.value ? "left" : "right"
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

    callbackFn(current)

    if(!!current.right) {
      this.traverseInOrder(callbackFn, current.right)
    }
  }

  /*
  Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)
  */

  traversePreOrder(callbackFn, current) {
    current = current || this.root
    callbackFn(current)
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
    callbackFn(current)
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

  deleteMax(current, parent) {
    current = current || this.root

    // delete single right node
    if(!current.left && !current.right)
      parent.right = null

    // swap single right into parent position
    if(!current.right && current.left) {
      if(parent === undefined) {
        this.root = current.left
      } else {
        parent.right = current.left
      }
    }

    // recurse as their are children
    if(current.right)
      this.deleteMax(current.right, current)
  }

  /*
  returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.
  */
  isValid() {
    let result = false
    const isValid = (node) => {
      result = node.value !== null && node.value !== undefined
      if(node.left !== null)
        result = node.value > node.left
      if(node.right !== null)
        result = node.value < node.right
    }
    this.traverseInOrder(isValid)
    return result
  }

  /*
  returns true if every node has either zero or two children (no nodes have only one child)
  */
  isFull() {
    let result = true
    const isFull = (node) => {
      if(node.left === null && node.right)
        result = false
      if(node.left && node.right === null) {
        result = false
      }
    }
    this.traverseInOrder(isFull)
    return result

  }

  __deleteLeaf(current, parent, deletionSide) {
    if(!current.left && !current.right) {
      parent[deletionSide] = null
      return true
    }
    return false
  }

  __deleteOneSide(current, parent, deletionSide) {
    // swap right
    if(!current.left && current.right) {
      if(parent === undefined) {
        this.root = current.right
      } else {
        parent[deletionSide] = current.right
      }
      return true
    }
    // swap left
    if(!current.right && current.left) {
      if(parent === undefined) {
        this.root = current.left
      } else {
        parent[deletionSide] = current.left
      }
      return true
    }
    return false
  }

  __findMinumum(current, parent) {
    if(current.left === null)
      return {current, parent}
    this.__findMinumum(current.left, current)
  }

  __deleteBothSides(current) {
    if(current.right && current.left) {
      /*
      find smallest value in right subtree -- go left until null
      50
            70
        -60      80
          65   75  85
      */
      const smallestValueInRight = this.__findMinumum(current.right, current)
      /*
      replace current value with find smallest value in right subtree
      -50
            75
        -60      80
          65   75  85
      */
      current.value = smallestValueInRight.current.value
      /*
      remove smallest value in right subtree
      -50
            75
        *66      80
          65        85
      */
      this.deleteNode(smallestValueInRight.current.value, smallestValueInRight.current, smallestValueInRight.parent)
    }
  }

  deleteNode(value, current, parent) {
    current = current || this.root
    parent = parent || this.root
    if (value === current.value)  {
      let isDeleted = false
      const deletionSide = parent.right && current.value === parent.right.value ? "right" : "left"
      if(!isDeleted)
        isDeleted = this.__deleteLeaf(current, parent, deletionSide)
      if(!isDeleted)
        isDeleted = this.__deleteOneSide(current, parent, deletionSide)
      if(!isDeleted)
        this.__deleteBothSides(current)

    } else {
      const direction = value <= current.value ? "left" : "right"
      return this.deleteNode(value, current[direction], current)
    }
  }

}
