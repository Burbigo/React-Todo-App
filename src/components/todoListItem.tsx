import * as React from 'react';

export interface TodoListItemProps {
    task: string;
    isCompleted: boolean;
    toggleTask: Function;
    saveTask: Function;
    deleteTask: Function;
}

export interface TodoListItemState {
    isEditing: boolean
}

export class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {
 
    public refs: {
        [string: string]: any;
        editTask: HTMLInputElement;
    }
    
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
                        onClick={this.onDeleteClick.bind(this, this.props.task)}>Delete</button>
                </td>
            )
    }

    private renderTaskSection() {

        var isCompleted = this.props.isCompleted;

        var taskStyle = {
            textDecorationLine: isCompleted ? "line-through" : "",
            color: isCompleted ? "grey" : "blue",
            cursor: "pointer"
        };

        return (this.state.isEditing) ? (
            <td>
                <form onSubmit={this.onSaveClick}>
                    <input type="text" defaultValue={this.props.task}
                        ref="editTask" />
                </form>
            </td>

        )
            : (
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

    private onDeleteClick(task) {
        this.props.deleteTask(task)
    }

    private onSaveClick(event) {
        event.preventDefault();
        var newTask = this.refs.editTask.value;
        if (newTask) {
            var oldTask = this.props.task;
            this.props.saveTask(oldTask, newTask);

            this.setState({
                isEditing: false
            });
        }
    }

    private onCancelClick() {
        this.setState({
            isEditing: false
        })
    }
}
