
import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import './components/Todo.css'

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

    handleItemToggle = (itemId) => {
      this.setState({
        taskToDo : this.state.taskToDo.map(item => {
          if(item.id === itemId) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return(item)
       })
      });
    };

    handleTaskAdd = (taskName) => {
      const task = {
        task: taskName,
        id: this.state.taskToDo.length,
        completed: false
      };

      const newTask = [...this.state.taskToDo, task];

      this.setState({
        taskToDo: newTask
      })
    };

    handleTaskCompleted = () => {
      const endTask = this.state.taskToDo.filter(item => {
        return(!item.completed);
      });

      this.setState({
        taskToDo: endTask
      });
    };
    

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        handleTaskAdd={this.handleTaskAdd}/>
        <TodoList
        taskToDo={this.state.taskToDo} handleItemToggle={this.handleItemToggle} handleTaskCompleted={this.handleTaskCompleted} />
      </div>
    );
  }
}

export default App;
