import React, { useReducer } from 'react';

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actions";
import { TodoReducer } from './reducers';
import { TodoContext } from './contexts';
import { TodosPage } from './pages';
import { ITodoState } from './constants';

function App() {

  const initialState = [
    {
      title: 'Take a bath',
      description: 'Be sure to take a bath before 9!',
      isDone: false
    }
  ]
  const [todos, dispatch] = useReducer(TodoReducer, initialState);
  
  const actions = {
    addTodo: (todo: ITodoState) => {
      dispatch({ type: ADD_TODO, payload: todo })
    },
    deleteTodo: (id: number) => {
      dispatch({ type: DELETE_TODO, payload: { id } })
    },
    toggleTodo: (id: number) => {
      dispatch({ type: TOGGLE_TODO, payload: { id } });
    }
  }

  return (
    <TodoContext.Provider value={{todos, actions }}>
      <TodosPage />
    </TodoContext.Provider>
  );
}

export default App;
