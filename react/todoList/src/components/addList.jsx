import './addList.css'
import { Component } from 'react'

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //私有状态
      inputText: ''
    }
  }

  //修改状态
  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  handleAdd = (e) => {
    e.preventDefault()
    if (this.state.inputText.trim()) {
      this.props.addTodos(this.state.inputText)
      this.setState({
        inputText: ''
      })
    }
  }


  render() {

    return (
      <div className='container'>
        <form onSubmit={this.handleAdd}>
          <input
            type="text" placeholder="添加任务"
            id="addInp"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <button
            type='submit'
            id='add'
          >添加</button>
        </form>
      </div>
    )
  }
}
export default AddList