import { useState } from "react";

interface Props {
    onAdd: (title: string) => void;
}
export default function TodoInput({onAdd }: Props) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title.trim()) return;
        onAdd(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit} style={{marginBottom: "1rem"}}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a todo..."
            />
            <button type="submit">Add</button>
        </form>
    );
}