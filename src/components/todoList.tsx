import * as React from 'react';
import { TodoListHeader } from "./todoListHeader"
import { TodoListItem } from "./todoListItem"

export interface TodoListProps {
    todos: Array<{ task: string, isCompleted: boolean }>;
    toggleTask: Function;
    saveTask: Function;
}

export interface TodoListState {
}

export class TodoList extends React.Component<TodoListProps, TodoListState> {

    public constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        var listItems = this.renderListItems();

        return (
            <table>
                <TodoListHeader />
                <tbody>
                    {listItems}
                </tbody>
            </table >
        );
    };


    private bindMethods() {
        this.renderListItems = this.renderListItems.bind(this);
    };

    private renderListItems() {
        var todos = this.props.todos.map((todoItem, index) =>
            <TodoListItem key={index} {...todoItem}
                toggleTask={this.props.toggleTask}
                saveTask={this.props.saveTask} />);

        return todos;
    }
}
