
var MinStack = function () {
  this.stack = []
  this.min = []   // 辅助栈：存储最小值
};

MinStack.prototype.push = function (x) {
  let len = this.min.length
  if (!len || x <= this.min[len - 1]) {
    this.min.push(x)
  }
  this.stack.push(x)
};

MinStack.prototype.pop = function () {
  if (this.stack.pop() === this.min[this.min.length - 1]) {
    this.min.pop()
  }

};

MinStack.prototype.top = function () {
  let len = this.stack.length
  if (!len) {
    return
  }
  return this.stack[len - 1]
};

MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
};