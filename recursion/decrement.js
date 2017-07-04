function decrement(val) {
  if(val > 0) {
    return decrement(--val)
  }
  return 0
}
