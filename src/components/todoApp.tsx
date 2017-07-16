import * as React from 'react';
import { TodoList } from "./todoList"
import { InputTodoItem } from "./inputTodoItem"


const todos = [
    {
        task: "Make todos app",
        isCompleted: false
    },

    {
        task: "Drink a beer",
        isCompleted: true
    }
];

export interface TodoAppProps {

}

export interface TodoAppState {
    todos: Array<{ task: string, isCompleted: boolean }>;
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
                    createNewTask={this.createNewTask} 
                    todos={this.state.todos} />
                <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask}
                    saveTask={this.saveTask} 
                    deleteTask={this.deleteTask}/>
            </div>
        );
    };

    private bindMethods() {
        this.createNewTask = this.createNewTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    };

    private toggleTask(task) {
        var foundTask = this.state.todos.find((todo) => {
            return todo.task === task;
        })

        foundTask.isCompleted = !foundTask.isCompleted;

        this.setState({
            todos: this.state.todos
        });
    };

    private createNewTask(newTask) {
        this.state.todos.push({
            task: newTask,
            isCompleted: false
        });

        this.setState({
            todos: this.state.todos
        });
    };

    private saveTask(oldTask, newTask) {
        var foundTask = this.state.todos.find((todo) => {
            return todo.task === oldTask;
        });

        foundTask.task = newTask;

        this.setState({
            todos: this.state.todos
        });
    };

    private deleteTask(deleteTask) {
        var index = this.state.todos.map(todo => todo.task).indexOf(deleteTask)

        if (index > -1) {
            this.state.todos.splice(index, 1);
            this.setState({
                todos: this.state.todos
            })
        }
    }
}
