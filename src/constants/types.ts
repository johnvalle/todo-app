import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

export interface ITodoState {
  title: string;
  description: string;
  isDone: boolean;
}

export interface IAddTodo {
  type: typeof ADD_TODO;
  payload: ITodoState;
}

export interface IDeleteTodo {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

export interface IToggleTodo {
  type: typeof TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export type TodoActions = IAddTodo | IDeleteTodo | IToggleTodo;
