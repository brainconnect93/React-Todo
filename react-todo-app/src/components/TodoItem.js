import React from "react";
import styling from "./TodoItem.module.css";

class TodoItem extends React.Component {
    state = {
      editing: false,
    }
    handleEditing = () => {
      this.setState({
        editing: true,
      })
    }
    render() {
        const completedStyle = {
          fontStyle: "italic",
          color: "red",
          opacity: 0.4,
          textDecoration: "line-through",
        }
        
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
          viewMode.display = "none"
        } else {
          editMode.display = "none"
        }

    const { completed, id, title } = this.props.todo 
        return (
            <li className={styling.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input 
                type="checkbox"
                className={styling.checkbox}
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)}
                /> 
                <button onClick={() => this.props.deleteTodoProps(id)}>
                    Delete
                </button>
                <span style={completed ? completedStyle : null}>
                {title}
                </span>
                </div>
                
                <input 
                type="text" 
                style={editMode} 
                className={styling.textInput}
                value={title}
                />
            </li>
        )
    }
}

export default TodoItem;
