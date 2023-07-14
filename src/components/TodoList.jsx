import TodoItem from "@/components/TodoItem";
import { useSelector } from "react-redux";
const TodosList = () => {
  const todoList =  useSelector(state => state.todos)
  
  return (
    <ul>
      {todoList && todoList.length>0 && todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
        />
      ))}
    </ul>
  );
};
export default TodosList;
