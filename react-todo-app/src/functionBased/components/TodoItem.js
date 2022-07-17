import React, { useState, useEffect } from 'react';
import styling from './TodoItem.module.css';

/* eslint disable */
const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={styling.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styling.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styling.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

// class TodoItem extends React.Component {
//     state = {
//       editing: false,
//     }

//     handleEditing = () => {
//       this.setState({
//         editing: true,
//       });
//     }

//     handleUpdatedone = (event) => {
//       if (event.key === 'Enter') {
//         this.setState({ editing: false });
//       }
//     }

//     render() {
//       const completedStyle = {
//         fontStyle: 'italic',
//         color: 'red',
//         opacity: 0.4,
//         textDecoration: 'line-through',
//       };

//       const viewMode = {};
//       const editMode = {};

//       if (this.state.editing) {
//         viewMode.display = 'none';
//       } else {
//         editMode.display = 'none';
//       }

//       const { completed, id, title } = this.props.todo;
//       return (
//         <li className={styling.item}>
//           <div onDoubleClick={this.handleEditing} style={viewMode}>
//             <input
//               type="checkbox"
//               className={styling.checkbox}
//               checked={completed}
//               onChange={() => this.props.handleChangeProps(id)}
//             />
//             <button onClick={() => this.props.deleteTodoProps(id)}>
//               Delete
//             </button>
//             <span style={completed ? completedStyle : null}>
//               {title}
//             </span>
//           </div>

//           <input
//             type="text"
//             style={editMode}
//             className={styling.textInput}
//             value={title}
//             onChange={(e) => {
//               this.props.setUpdate(e.target.value, id);
//             }}
//             onKeyDown={this.handleUpdatedone}
//           />
//         </li>
//       );
//     }
// }

export default TodoItem;
