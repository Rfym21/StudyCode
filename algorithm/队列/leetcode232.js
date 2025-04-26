
var MyQueue = function () {
  this.stack1 = []    //主栈
  this.stack2 = []    //辅助栈
}

MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
}

MyQueue.prototype.pop = function () {
  if (this.stack1.length === 1 && !this.stack2.length) {
    return this.stack1.pop()
  }

  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
}

MyQueue.prototype.peek = function () {
  const top=this.pop()
  this.stack2.push(top)
  return top
}

MyQueue.prototype.empty = function () {
  return !this.stack1.length && !this.stack2.length
}

const myQueue = new MyQueue()