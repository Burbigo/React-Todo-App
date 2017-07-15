import * as React from 'react';

export interface TodoListItemProps {
    task: string;
    isComplited: boolean;
}

export interface TodoListItemState {

}

export class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {
    private listItems = this.renderItemList();

    constructor(props) {
        super(props);

        this.bindMethods();
    }


    public render() {
        return (
            <tr>
                <td>
                    {this.props.task}
                </td>

                <td>
                    <button className="todo-edit-btn">Edit</button>
                    <button className="todo-delete-btn">Delete</button>
                </td>

            </tr>
        );
    };

    private bindMethods() {
        this.renderItemList = this.renderItemList.bind(this);
    }

    private renderItemList() {

    }
}
