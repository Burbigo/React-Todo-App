import * as React from 'react';

export interface TodoListHeaderProps {
}

export interface TodoListHeaderState {
}

export class TodoListHeader extends React.Component<TodoListHeaderProps, TodoListHeaderState> {
    render() {
        return (
            <thead>
                <tr>
                    <th className="task-header-title">Task</th>
                    <th className="action-header-title">Action</th>
                </tr>
            </thead>
        );
    };
}
