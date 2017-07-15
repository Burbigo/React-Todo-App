import * as React from 'react';
import { TodoList } from "./todoList"
import { InputTodoItem } from "./inputTodoItem"


const todos = [
    {
        task: "Make todos app",
        isComplited: false
    },

    {
        task: "Drink a beer",
        isComplited: true
    }
];

export interface TodoAppProps {

}

export interface TodoAppState {
}

export class App extends React.Component<TodoAppProps, TodoAppState> {

    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        };
    }

    render() {
        return (
            <div>
                <h1>React Todo App</h1>
                <InputTodoItem />
                <TodoList todos={todos} />
            </div>
        );
    };
}
