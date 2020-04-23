import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/NewTodoForm.css';

interface INewTodoForm {
    newTask: string;
}

class NewTodoForm extends Component<any, INewTodoForm> {
    constructor(props: any) {
        super(props);
        this.state = {
            newTask: '',
        };
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        if (!this.state.newTask) {
            return;
        }
        const newTodo = {
            id: uuidv4(),
            task: this.state.newTask,
            completed: false,
        };
        this.props.addTodoItem(newTodo);
        this.setState({
            newTask: '',
        });
    };

    handleOnChange = (e: any): void => {
        this.setState({ newTask: e.target.value });
    };

    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New todo</label>
                <input
                    onChange={this.handleOnChange}
                    id='task'
                    value={this.state.newTask}
                    type='text'
                    name='task'
                    placeholder='New Todo'
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;
