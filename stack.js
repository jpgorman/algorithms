export const Stack = function(maxSize) {
  this.storage = {}
  this.size = 0
  this.maxSize = maxSize || Infinity
}

Stack.prototype.push = function(item) {
  if(this.size === this.maxSize)
    return "Max capacity already reached. Remove element before adding a new one."

  this.size++
  this.storage[this.size] = item
  return this.size
}

Stack.prototype.pop = function() {
  const lastItem = this.storage[this.size]
  delete this.storage[this.size]
  this.size--
  return lastItem
}

Stack.prototype.peek = function () {
  return this.storage[this.size]
}

Stack.prototype.count = function() {
  return this.size
}

Stack.prototype.search = function(target) {
  return Object.keys(this.storage).filter((key) => this.storage[key] === target)
}

Stack.prototype.contains = function(target) {
  return this.search(target).length > 0
}

Stack.prototype.until = function(target) {
  return this.search(target).length > 0 ? this.size - this.search(target)[0] : -1
}
