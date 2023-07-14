import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
const InputTodo = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const addTodo = (title) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: uuidv4(),
        title: title,
        completed: false
      }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item");
    }
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          name="title"
          id="title"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button className="input-submit">
          <FaPlusCircle
            style={{
              color: "#5e5e5e",
              fontSize: "20px",
              marginTop: "2px",
            }}
          />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
