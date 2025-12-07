import axios from "axios";
import type { Todo } from "../types/todo";

//whenever you create an Axios instance with a baseURL, it must point to your backend, not something random.
const api = axios.create({baseURL: "http://localhost:5050",});
//“Every request you make using this api instance should start from this base. I’ll only append the specific endpoint paths later.”

//GET all todos
export const getTodos = async (): Promise<Todo[]> => {
    const res = await api.get("/todos");
    return res.data;
}

//CREATE Todo
export const createTodo = async (title: String): Promise<Todo> => {
    const res = await api.post("/todos", { title });
    return res.data;
}

//UPDATE todo
//data: Partial<Todo>   Todo|undefined
export const updateTodo = async (id: String, data: Partial<Todo>): Promise<Todo> => {
    const res = await api.put(`/todos/${id}`,data);
    return res.data;
}

// DELETE todo
export const deleteTodo = async (id: string): Promise<void> => {
    const res = await api.delete(`/todos/${id}`);
    return res.data;
}