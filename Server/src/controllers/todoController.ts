import { Request, Response } from "express";
import { todos } from "../models/todoModel"
import { randomUUID } from "crypto";
import { Todo } from "../types/todo";

// Get Todo -> send all the todos present to the client in a response json format
export const getTodos = (req: Request,res: Response) => {
    res.json(todos);
};

// Update Todo -> check for the existing todos and if they exist then update their values
export const updateTodo = (req: Request,res: Response) => {
    const {id} = req.params;
    const {title, completed} = req.body;

    const todoExists = todos.find(t => t.id === id);

    if(!todoExists) {
        return res.status(404).json({message: "Todo not found, 404 status error when resources are not found"});
    }

    if(title !== undefined) todoExists.title = title;
    if(completed !== undefined) todoExists.completed = completed;

    res.json(todos);

};

//create Todo
export const createTodo = (_req: Request, res: Response) => {
    const {title} = _req.body;

    if(!title || typeof(title) !== "string") {
        return res.status(400).json({message: "Title is required, 400 Bad request Invalid request data"});
    }

    const newTodo: Todo = {
        id: randomUUID(),
        title,
        completed: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo); //201: created: New resource created (POST)
};

export const deleteTodo = (req: Request, res: Response) => {
    const {id} = req.params;

    const todoExists = todos.findIndex(t => t.id === id);
    if(todoExists !== -1){
        return res.status(404).json({message: "Todo not found, 404 status error when resources are not found"});
    }

    todos.splice(todoExists, 1);
    res.json({message: "Todo Deleted"});
}