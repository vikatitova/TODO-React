import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem, { ITodoItem } from './TodoItem';
import NewTodoForm from './NewTodoForm';
import './styles/styles.css';
import './styles/TodoList.css';

export interface ITodoList {
    todos: ITodoItem[];
}

class TodoList extends Component<any, ITodoList> {
    constructor(props: any) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount() {
        fetch(`/todos`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    todos: data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    toggleComplete = (id: string): void => {
        const updatedTodos: ITodoItem[] = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos,
        });
    };

    renderTodoList = () => {
        return this.state.todos.map((todo) => (
            <TodoItem
                toggleComplete={this.toggleComplete}
                key={todo.id}
                todo={todo}
            />
        ));
    };

    addTodoItem = (newTodo: ITodoItem): void => {
        const updatedTodos: ITodoItem[] = [...this.state.todos, newTodo];
        this.setState({
            todos: updatedTodos,
        });
    };

    render() {
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>
                <NewTodoForm addTodoItem={this.addTodoItem} />
                <ul>{this.renderTodoList()}</ul>
            </div>
        );
    }
}

export default TodoList;
