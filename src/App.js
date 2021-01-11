
import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';


const taskToDo = [
  {
    task: "vacuum",
    id: 1,
    completed: false
  },
  {
    task: "wash dishes",
    id: 2, 
    completed: false
  },
  {
    task: "feed pet",
    id: 3,
    completed: false,
  },
  {
    task: "find sanity",
    id: 4,
    completed: false
  },
  {
    task: "mop",
    id: 5,
    completed: false
  }
];

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        taskToDo : taskToDo
      }
    }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList
        taskToDo={this.state.taskToDo} />
      </div>
    );
  }
}

export default App;
