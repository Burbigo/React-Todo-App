import * as React from 'react';

export interface TodoListItemProps {
    task: string;
    isComplited: boolean;
    toggleTask: Function;
}

export interface TodoListItemState {
    isEditing: boolean
}

export class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }

        this.bindMethods();
    }


    public render() {

        var actionsSection = this.renderActionsSection();
        var taskSection = this.renderTaskSection();

        return (
            <tr>
                {taskSection}
                {actionsSection}
            </tr>
        );
    };

    private bindMethods() {
        this.renderActionsSection = this.renderActionsSection.bind(this);
        this.renderTaskSection = this.renderTaskSection.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    private renderActionsSection() {

        return (this.state.isEditing) ? (
            <td>
                <button className="todo-edit-btn"
                    onClick={this.onSaveClick}>Save</button>
                <button className="todo-delete-btn"
                    onClick={this.onCancelClick}>Cancel</button>
            </td>
        )
            : (
                <td>
                    <button className="todo-edit-btn"
                        onClick={this.onEditClick}>Edit</button>
                    <button className="todo-delete-btn"
                        onClick={this.onDeleteClick}>Delete</button>
                </td>
            )
    }

    private renderTaskSection() {

        var isComplited = this.props.isComplited;

        var taskStyle = {
            textDecorationLine: isComplited ? "line-through" : "",
            color: isComplited ? "grey" : "blue",
            cursor: "pointer"
        };

        return (
            <td style={taskStyle}
                onClick={this.onTaskClick.bind(this, this.props.task)}>
                {this.props.task}
            </td>
        )
    }

    private onTaskClick(task) {
        this.props.toggleTask(task);
    }

    private onEditClick() {
        this.setState({
            isEditing: true
        })

    }

    private onDeleteClick() {

    }

    private onSaveClick() {

    }

    private onCancelClick() {
        this.setState({
            isEditing: false
        })
    }
}
