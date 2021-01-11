import React from "react"

class TodoForm extends React.Component {
    render() {
        return(
            <form>
                <input
                type="text"
                name="item"
                />
                <button>Add Task</button>
            </form>
            
        )
    }
};

export default TodoForm;