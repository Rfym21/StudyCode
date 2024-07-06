import { Component } from 'react'
import './TodosList.css'
import AddList from './addList'
import ListConrent from './listContent'
import Storage from '../utils/storage'



const instance = Storage.getInstance()

let TodosList_Copy = []

class TodosList extends Component {

  constructor(props) {
    super(props)
    const saveTodos = JSON.parse(instance.getItem('todosList')) || []
    
    this.state = {
      todos: saveTodos
    }

  }

  componentDidUpdate() {
    instance.setItem('todosList', JSON.stringify(this.state.todos))
  }

  addTodos = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: text,
          completed: false
        }
      ]
    })
    TodosList_Copy = [...this.state.todos]
  }

  handleDelete = (index) => {
    const newTodos = [...this.state.todos]
    newTodos.splice(index, 1)
    this.setState({ todos: newTodos })

    // this.setState({
    //   todos: this.state.todos.filter((todo, i) => index !== i)
    // })
    TodosList_Copy = [...this.state.todos]
  }


  handleComplete = (index) => {
    const newTodos = [...this.state.todos]
    newTodos[index].completed = !newTodos[index].completed
    this.setState({ todos: newTodos })

    // this.setState({
    //   todos: this.state.todos.map((todo, i) =>
    //     i === index? {...todo, completed:!todo.completed} : todo
    //   ) 
    // })
  }

  editTodo = (index, newText) => {
    const newTodos = [...this.state.todos]
    newTodos[index].title = newText
    this.setState({ todos: newTodos })
  }

  Search_completed = () => {
    const newTodos = [...this.state.todos].filter(todo => todo.completed)
    this.setState({ todos: newTodos })
    console.log(TodosList_Copy)
  }

  Search_uncompleted = () => {
    const newTodos = [...this.state.todos].filter(todo => !todo.completed)
    this.setState({ todos: newTodos })
  }

  Search_All_Singment = () => {
    console.log(TodosList_Copy)
    this.setState({ todos: [...TodosList_Copy] })
  }

  render() {
    return (
      <div className='box'>
        <h1>Todo List</h1>
        <AddList addTodos={this.addTodos} />
        <ListConrent todos={this.state.todos}
          handleDelete={this.handleDelete}
          handleComplete={this.handleComplete}
          editTodo={this.editTodo}
        />
        <div className="search">
          <button onClick={this.Search_All_Singment}>ALL_Signment</button>
          <button onClick={this.Search_uncompleted}>uncompleted</button>
          <button onClick={this.Search_completed}>completed</button>
        </div>
      </div>
    )
  }
}
export default TodosList
