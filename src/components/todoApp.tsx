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
    todos: Array<{ task: string, isComplited: boolean }>;
}

export class App extends React.Component<TodoAppProps, TodoAppState> {

    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        };

        this.bindMethods();
    };

    public render() {
        return (
            <div>
                <h1>React Todo App</h1>
                <InputTodoItem
                    createNewTask={this.createNewTask} />
                <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask} />
            </div>
        );
    };

    private bindMethods() {
        this.createNewTask = this.createNewTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    };

    private toggleTask(task) {
        var toggledTask = this.state.todos.find((todo) => {
            return todo.task === task;
        })

        toggledTask.isComplited = !toggledTask.isComplited;

        this.setState({
            todos: this.state.todos
        });
    };

    private createNewTask(newTask) {
        this.state.todos.push({
            task: newTask,
            isComplited: false
        });

        this.setState({
            todos: this.state.todos
        });
    };
}
