//This file becomes your “temporary database”.
//For now, we store todos in an array.
//Later, we plug in MongoDB/Postgres — no code rewriting needed because everything stays modular.
import { Todo } from "../types/todo";

export let todos: Todo[] = [];