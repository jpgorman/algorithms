export const Queue = function(maxSize) {
  this.storage = {}
  this.size = 0
  this.maxSize = maxSize || Infinity
}

Queue.prototype.enqueue = function(item) {
  if(this.size === this.maxSize)
    return "Max capacity already reached. Remove element before adding a new one."

  this.storage[this.size++] = item
  return this.size
}

Queue.prototype.dequeue = function() {
  if(this.size !== 0) {
    const firstItem = this.storage[0]
    delete this.storage[0]
    this.size--
    return firstItem
  }
}

Queue.prototype.peek = function () {
  return this.storage[0]
}

Queue.prototype.count = function() {
  return this.size
}

Queue.prototype.search = function(target) {
  return Object.keys(this.storage).filter((key) => this.storage[key] === target)
}

Queue.prototype.contains = function(target) {
  return this.search(target).length > 0
}

Queue.prototype.until = function(target) {
  return this.search(target).length > 0 ? parseInt(this.search(target)[0], 10) + 1 : -1
}
