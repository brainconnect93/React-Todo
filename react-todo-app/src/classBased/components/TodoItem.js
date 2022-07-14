import React from 'react';
import styling from './TodoItem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
    state = {
      editing: false,
    }

    handleEditing = () => {
      this.setState({
        editing: true,
      });
    }

    handleUpdatedone = (event) => {
      if (event.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    render() {
      const completedStyle = {
        fontStyle: 'italic',
        color: 'red',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

      const viewMode = {};
      const editMode = {};

      if (this.state.editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }

      const { completed, id, title } = this.props.todo;
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
            onChange={(e) => {
              this.props.setUpdate(e.target.value, id);
            }}
            onKeyDown={this.handleUpdatedone}
          />
        </li>
      );
    }
}

export default TodoItem;
