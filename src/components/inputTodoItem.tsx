import * as React from 'react';

export interface inputTodoItemProps {
}

export interface inputTodoItemState {
}

export class InputTodoItem extends React.Component<inputTodoItemProps, inputTodoItemState> {
    render() {
        return (
            <form>
                <input type="text" placeholder="What do I need to do..." />
                <button className="todo-create-btn">Create</button>
            </form>
        );
    };
}
