import * as React from 'react';

export interface inputTodoItemProps {
    createNewTask: Function;
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
    }

    private onSubmitClick(event) {
        event.preventDefault();

        var newTask = this.refs.newTodoItem.value;
        if (newTask) {
            this.props.createNewTask(newTask);
        }
    }
}
