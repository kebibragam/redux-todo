import { useState, useRef } from "react";
import style from "@/styles/TodoItem.module.css";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";

const TodoItem = ({ itemProp }) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const [delModal, setDelModal] = useState(false);
  const dispatch = useDispatch();
  const editInputRef = useRef(null);
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const upadateTitle = (title, id) => {
    return {
      type: 'UPDATE_TITLE',
      payload: {
        title,
        id
      }
    }
  }
  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      dispatch(upadateTitle(editInputRef.current.value, itemProp.id))
      setEditing(false);
    }
  };
 const handleChange = (id) => {
    return {
      type: 'CHANGE_COMPLETE_STATUS',
      payload: id
    }
  }
  const delTodo = (id) => {
    return {
      type: 'REMOVE_TODO',
      payload: id,
    }
  }
  const delTodoClicked = (id) => {
    setDelModal(true);
  }
 
  return (
    <>
    {
        delModal && <div className="del-modal">
          <div className="del-modal-title">Do you want to delete?</div>
          <button className="btn btn-danger" onClick={() => dispatch(delTodo(itemProp.id))}>Confirm</button>
          <button className="btn" onClick={() => setDelModal(false)}>Cancel</button>
        </div> 
      }
    
    <li className={style.item}>
      <div className={style.content} style={viewMode}>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={itemProp.completed}
          onChange={() => dispatch(handleChange(itemProp.id))}
        />
        <button onClick={handleEditing}>
          <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        {/* <button onClick={() => dispatch(delTodo(itemProp.id))}> */}
        <button onClick={() => delTodoClicked(itemProp.id)}>
          {" "}
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {/* {updateInput} */}
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        className={style.textInput}
        style={editMode}
        onKeyDown={handleUpdateDone}
        value={updateInput}
        onChange={(e) => setUpdateInput(e.target.value)}
      />
    </li>
    </>
  );
};

export default TodoItem;
