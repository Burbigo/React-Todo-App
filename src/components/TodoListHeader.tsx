import * as React from 'react';

export interface TodoListHeaderProps {
}

export interface TodoListHeaderState {
}

export class TodoListHeader extends React.Component<TodoListHeaderProps, TodoListHeaderState> {
    render() {
        return (
            <div>
                <th>Task</th>
                <th>Action</th>
            </div>
        );
    };
}
