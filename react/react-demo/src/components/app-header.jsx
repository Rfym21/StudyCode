
import { Component } from 'react'

// 类组件
// es6 Component基类 继承
class AppHeader extends Component {
  // 构造函数
  constructor(props) {
    // super 父类的构造函数
    super(props)
    // 数据 props 之外 还有state 自有状态
    // state 状态
    this.state = {
      emoji: '😊'
    }
    // setInterval(() => {
    //   this.changeEmoji()
    // }, 3000)

    console.log('AppHeader constructor')
  }

  // 生命周期函数 组件挂载到页面后触发
  componentDidMount() {
    console.log('AppHeader componentDidMount')
    // 组件已挂载
    setInterval(() => {
      this.changeEmoji()
    }, 3000)
  }

  componentDidUpdate(){
    console.log(`AppHeader componentDidUpdate:${this.state.emoji}`)
  }

  changeEmoji = () => {
    // Component 内置方法
    this.setState({
      emoji: this.state.emoji === '😊' ? '😢' : '😊'
    })
  }

  // 类里的abstract方法,必须要实现
  // 没有render 就没有html
  render() {
    const { name } = this.props
    const { emoji } = this.state
    return (<div className='app-header' >
      <h1 className='title'>{name}:{emoji}</h1>
    </div >)
  }

}

export default AppHeader