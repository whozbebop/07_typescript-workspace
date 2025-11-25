import { useEffect, useState } from "react"
import type { Todo } from "./types"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
      // JSONPlaceholder API 사용
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') // 5개만 가져오기
        .then(response => response.json())
        .then((data: Todo[]) => {
          setTodos(data);
          setLoading(false);
        });
    }, []);


  const addTodo = (title: string)  => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
      userId: 0
    }

    setTodos([newTodo, ...todos])
  }

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if(loading) return <div>Loading...</div>

  return (
    <>
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </>
  )
}

export default App;