// 为了让js更好的适合大型企业级开发,原型式的面向对象,升级为传统面向对象
// 拥抱更多其他语言程序员
// class extends implement 面向对象能力
// 虽是es5没有的class,本质仍然是原型式的面向对象,只是语法糖

class EditInPlace {
  constructor(storageKey, container, value = '这个家伙很懒，什么都没留下') {
    this.storageKey = storageKey
    this.container = container
    this.value = value
    // 将动态创建文本和编辑input的dom封装,易于代码管理
    this.createElement()
    // console.log(this.container, this.value)
    this.attachEvents()
  }

   // 就地编辑需要的动态DOM
   createElement() {
    // DOM树
    // 创建一个div
    this.editElement = document.createElement('div')
    // 添加一个子元素
    this.container.appendChild(this.editElement)

    // signature 文本值
    this.staticElement = document.createElement('span')
    this.staticElement.innerHTML = this.value
    this.editElement.appendChild(this.staticElement)

    // input
    this.fieldElement = document.createElement('input')
    this.fieldElement.type = 'text'
    this.fieldElement.value = this.value
    this.editElement.appendChild(this.fieldElement)

    // 确定按钮
    this.saveButton = document.createElement('input')
    this.saveButton.type = 'button'
    this.saveButton.value = '保存'
    this.editElement.appendChild(this.saveButton)

    // 取消按钮
    this.cancelButton = document.createElement('input')
    this.cancelButton.type = 'button'
    this.cancelButton.value = '取消'
    this.editElement.appendChild(this.cancelButton)

    // 初始文本状态
    this.convertToText()
  }
  // 文本状态
  convertToText() {
    this.staticElement.style.display = 'inline'
    this.fieldElement.style.display = 'none'
    this.saveButton.style.display = 'none'
    this.cancelButton.style.display = 'none'
  }
  // 编辑状态
  convertToEdit () {
    this.staticElement.style.display = 'none'
    this.fieldElement.style.display = 'inline'
    this.saveButton.style.display = 'inline'
    this.cancelButton.style.display = 'inline'
  }
  // 事件监听
  attachEvents() {

    // let that =this
    // this.staticElement.addEventListener('click', () => {
    //   // this 指向元素
    //   // this丢失
    //   that.convertToEdit()
    // })

    this.staticElement.addEventListener('click', () => {
      this.convertToEdit()
    })

    this.saveButton.addEventListener('click', () => {
      this.save()
    })

    this.cancelButton.addEventListener('click', () => {
      this.convertToText()
    })
  }

  save() {
    this.value = this.fieldElement.value
  }

  get value() {
    return this.value
  }

  set value(Value) {
    this.value = Value
    this.staticElement.innerHTML = this.value
    this.convertToText()
    // localStorage
    localStorage.setItem(this.storageKey, this.value)
  }
}