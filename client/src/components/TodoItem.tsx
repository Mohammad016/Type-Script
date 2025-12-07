import type { Todo } from "../types/todo"

interface Props {
    todo: Todo;
    onToggle: (id: string,completed: boolean) => void;
    onDelete: (id:string) => void;
}

export default function TodoItem({todo, onToggle, onDelete}:Props) {
    return (
        <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem"}}>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onToggle(todo.id,e.target.checked)}
            />
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.title}
            </span>
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </div>
    )
}