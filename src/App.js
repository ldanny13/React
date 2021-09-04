import React from "react"
// import { Component } from "react/cjs/react.production.min"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"
//import InfoCard from "./components/InfoCard"

class App extends React.Component {
  
    constructor(){
    super() 
    this.state = {
        todos: todosData
    }
    this.checkChange = this.checkChange.bind(this)

  }

  checkChange(id)
  {
    this.setState(prevState => {

        const newTodo = prevState.todos.map(todo => {

          if(todo.id === id)
          {
            return{
              ...todo,
              completed: !todo.completed
            }
            
          }
          return todo
        })

        return {
          todos: newTodo
        }

    })
  }

  render() {

      const todoComponent = this.state.todos.map(todo => <TodoItem id = {todo.id} text = {todo.text} completed ={todo.completed}
        
      checkChange ={this.checkChange}/>)
    
      return(
        
      <div className="todo-list">
        <div className="title-div">
            <h2>Todo List</h2>
        </div>
        {todoComponent}
      </div>

    )
  }
}

export default App
