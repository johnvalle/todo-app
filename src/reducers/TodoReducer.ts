import produce from 'immer';

import { ITodoState, TodoActions } from '../constants';

const TodoReducer = (state: ITodoState[], action: TodoActions): ITodoState[] => {
  switch(action.type) {
    case "ADD_TODO":
      return produce(state, draftState => {
        draftState.unshift(action.payload)
      });
    case "DELETE_TODO":
      return produce(state, draftState => {
        delete draftState[action.payload.id]
      });
    case "TOGGLE_TODO":
      return produce(state, draftState => {
        const draft = draftState[action.payload.id];
        draft.isDone = !draft.isDone
        draftState.push(draft);
        delete draftState[action.payload.id]
      });
    default:
      return state
  }
}

export default TodoReducer;