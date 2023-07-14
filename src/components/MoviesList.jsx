import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const MoviesList = () => {
  const [list, setList] = useState([]);
  async function getMovies() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const movies = await response.json();
    setList(movies)
  }
  useEffect(()=> getMovies,[])

  return (
       <ul>
      {list && list.length>0 && list.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
        />
      ))}
    </ul>
  )
}

export default MoviesList