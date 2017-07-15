import * as React from 'react';
import { TodoListHeader } from "./TodoListHeader"
import { TodoListItem } from "./TodoListItem"

export interface TodoListProps {
}

export interface TodoListState {
}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
    render() {

        return (
            <table>
                <TodoListHeader />
                <TodoListItem />
            </table >
        );
    };
}
