import './listContent.css'
import {Component} from 'react'


class listContent extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  // handEditChange=(e)=>{
  //   this.setState({
  //     editText:e.target.value
  //   })
  // }

  renderList = () => {
    // 使用map遍历todos，为每个item创建一个li元素
    return this.props.todos.map((item, index) => (
      <li key={index} className={`item  ${item.completed?'completed':''}` }>
       <span>{item.title}</span>
       {/* <input type="text" 
              value={item.title}
              onChange={this.props.editTodo(index)}
       /> */}
         {/* {item.completed?'(已完成)':''} */}
        <button onClick={() => this.props.handleDelete(index)}>del</button>
        <button onClick={() => this.props.handleComplete(index)}>{item.completed?'completed':'unCompleted'}</button>
      </li>
    ));
  }

  handleDelete = (index) => {
    // 实现删除功能的处理逻辑
   this.props.handleDelete(index)
    // 这里可以调用从父组件传递过来的删除函数，例如： this.props.deleteTodo(index);
  }

  handleComplete = (index) => {
    // 实现标记完成的处理逻辑
    this.props.handleComplete(index)

    // 这里可以调用从父组件传递过来的完成函数，例如： this.props.completeTodo(index);
  }
  render(){
  return(
    <div>
      <ul className='content'>
      {this.renderList()}
      </ul>
    </div>
  )
}
}
export default listContent