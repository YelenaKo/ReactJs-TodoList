import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid'

class App extends Component {
  state = {
    todos: []
  }

  // Toggle Complete
  markComplete = (id) =>{
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })  });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] })
  }
  
  //Add Todo
  addTodo = (title) => {
    if(title){
      const newTodo = {
        id:uuid.v4(),
        title,
        completed: false
      }
      this.setState({todos: [...this.state.todos, newTodo]});
    }
  }

  render(){
    return(
      <Router>
        <div className = "App">
          <div className = 'container'>
            <Header />
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} /> 
                </React.Fragment>
              )} />
              <Route path= '/about' component={ About } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
