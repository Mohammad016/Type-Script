import type { Todo } from "../types/todo"
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
}

export default function TodoList({todos, onToggle, onDelete}: Props) {
    return (
        <div>
            {todos.map((t) => (
                <TodoItem
                key={t.id}
                todo={t}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </div>
    )
}