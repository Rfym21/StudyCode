import { Component} from 'react'
import TodosList from './components/TodosList'

class App extends Component{
  constructor(props){
  super(props)
  this.state = {

  }
  }


  render(){
    return (
      <div>
      <TodosList />
      </div>
    )
  }
}
export default App