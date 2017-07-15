import * as React from 'react';
import { TodoList } from "./TodoList"

const todos = [
    {
        task: "make todos app",
        isComplited: false
    },

    {
        task: "Dring a beer",
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
                <TodoList />
            </div>
        );
    };
}
