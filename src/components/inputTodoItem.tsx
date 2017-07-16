import * as React from 'react';

export interface inputTodoItemProps {
    createNewTask: Function;
    todos: Array<{ task: string, isCompleted: boolean }>;
}

export interface inputTodoItemState {
}

export class InputTodoItem extends React.Component<inputTodoItemProps, inputTodoItemState> {

    public refs: {
        [string: string]: any;
        newTodoItem: HTMLInputElement;
    }

    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <form onSubmit={this.onSubmitClick}>
                <input type="text" placeholder="What do I need to do..."
                    ref="newTodoItem" />
                <button className="todo-create-btn">Create</button>
            </form>
        );
    };

    private bindMethods() {
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.validateTask = this.validateTask.bind(this);
    }

    private onSubmitClick(event) {
        event.preventDefault();

        var newTask = this.refs.newTodoItem.value;
        var isValidTask = this.validateTask(newTask);
        if (isValidTask) {
            this.props.createNewTask(newTask);
            this.refs.newTodoItem.value = "";
        }
    }

    private validateTask(task) {
        if (!task)
            return false;

        var isTaskAlreadyExist = this.props.todos.some((todo) => {
            return todo.task === task;
        });

        return !isTaskAlreadyExist;
    }
}
