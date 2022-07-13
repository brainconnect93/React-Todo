import React from "react";
import styling from "./TodoItem.module.css";

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
          fontStyle: "italic",
          color: "red",
          opacity: 0.4,
          textDecoration: "line-through",
        }

    const { completed, id, title } = this.props.todo 
        return (
            <li className={styling.item}>
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
            </li>
        )
    }
}

export default TodoItem;
