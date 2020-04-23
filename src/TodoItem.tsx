import { Component } from 'react';
import React from 'react';
import './styles/TodoItem.css';

export interface ITodoItem {
    id: string;
    task: string;
    completed: boolean;
}

class TodoItem extends Component<any, ITodoItem> {
    toggleCompleted = (e: any): void => {
        this.props.toggleComplete(e.target.id);
    };
    render() {
        const { todo } = this.props;
        return (
            <div className='Todo'>
                <li
                    id={todo.id}
                    onClick={this.toggleCompleted}
                    className={
                        todo.completed ? 'Todo-task completed' : 'Todo-task'
                    }
                >
                    {todo.task}
                </li>
            </div>
        );
    }
}

export default TodoItem;
