import React, { Component } from 'react';
import '../App.css';

class AppTODO extends Component {
    state = {
        value:'',
        addValue:'',
        todos:[
            { text: "Learn about React" , isCompleted : false },
            { text: "Learn BestPractices", isCompleted : false },
            { text: "Build an to-do app", isCompleted : false  }
        ]
     }

    addTodo =(text) => {
        const newTodos = [...this.state.todos, {text}]
        this.setState({newTodos,addValue:''})

    }

    completeTodo = (index) => {
        const newTodos = [...this.state.todos]
        newTodos[index].isCompleted = true
        this.setState({newTodos})
    }

    removeTodo = (index) => {
        const newTodos = [...this.state.todos]
        newTodos.splice(index,1)
        this.setState({newTodos})
    }

    handleSubmit = e => {
        this.setState({
            value: e.target.value
        });
    }
    completeTodo = index => {

    }
    removeTodo = index => {

    }

    render() {
        return (
            <div>
                <h1 className="listProp">To-Do list</h1>
                <input id="changeValue" type="text" value={ this.state.value } onChange={ this.handleSubmit }> </input>

                <div className="apptodo">
                    <div className="todo-list">
                    {this.state.todos.map((todo, index) => (
                            <div key={index}>
                                <h3 >{todo.text}</h3>
                                <button onClick = { () => this.completeTodo(index)} >Complete</button>
                                <button onClick = { () => this.removeTodo(index)}>Delete</button>
                            </div>
                    ))}
                    </div>
                </div>
                {/* <form onSubmit={this.addTodo(this.state.addValue)}>
                    <input id="addValue" type="text" value='' onChange={e => this.setState({addValue:e.target.value}) }> </input>
                </form> */}
            </div>

         );
    }
}

export default AppTODO;