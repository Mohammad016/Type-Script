import { useEffect, useState } from "react";
import type { Todo } from "./types/todo";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./api/todos";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    load();
  }, []);

  const load = async() => {
    const data = await getTodos();
    setTodos(data);
    setLoading(false);
  };

  const addTodo = async(title: string) => {
    const newTodo = await createTodo(title);
    setTodos([...todos,newTodo]);
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    const updated = await updateTodo(id, {completed});
    setTodos(todos.map(t => t.id === id ? updated : t));
  };

  const removeTodo = async(id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  };

  if(loading) return <p>Loading...</p>;

  return (
    <div style={{width: "400px",margin: "2rem auto"}}>
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo}/>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={removeTodo}
        />
    </div>
  )
}