import * as React from 'react';
import { TodoListHeader } from "./todoListHeader"
import { TodoListItem } from "./todoListItem"

export interface TodoListProps {
    todos: Array<{ task: string, isComplited: boolean }>;
}

export interface TodoListState {
}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
    private listItems = this.renderListItems();

    public constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <table>
                <TodoListHeader />
                <tbody>
                    {this.listItems}
                </tbody>
            </table >
        );
    };
 
    private bindMethods() {
        this.renderListItems = this.renderListItems.bind(this);
    };

    private renderListItems() {
        var todos = this.props.todos.map((todoItem, index) =>
            <TodoListItem key={index} {...todoItem} />);

        return todos;
    }
}
