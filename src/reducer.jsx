const initialState = {
  todos: [],
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      // console.log('ABCD eee',action)
      return Object.assign({}, state, {
        todos: [...state.todos,action.payload]
      });
    case 'REMOVE_TODO':
      return  Object.assign({}, state, {
        todos: [...state.todos].filter((todo) => todo.id !== action.payload)
      });
    case 'CHANGE_COMPLETE_STATUS':{
      const initialTodo = state.todos?[...state.todos]:[];
       const updatedData = initialTodo.map(x => (x.id === action.payload ? { ...x, completed: !x.completed } : x));
      return  Object.assign({}, state, {
        todos: updatedData
      });
    }
    case 'UPDATE_TITLE':{
      const initialTodo = state.todos?[...state.todos]:[];
       const updatedData = initialTodo.map(x => (x.id === action.payload.id ? { ...x, title: action.payload.title } : x));
      return  Object.assign({}, state, {
        todos: updatedData
      });
    }
      
    default:
      return state;
  }
}