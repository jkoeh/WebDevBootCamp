import { ADD_TODO, REMOVE_TODO } from "../actions/actionCreator";

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val._id !== action.id);
      return { ...state, todos };
    default:
      return state;
  }
}
