import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";
import MoviesList from "@/components/MoviesList";
import Post from "./Post";

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
        {/* <MoviesList />  */}
        {/* <Post /> */}
      </div>
    </div>
  );
};

export default TodoApp;
