const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

export const initialState = {
  todos: [
    {
      id: uniqueId.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: uniqueId.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-202',
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state.todos.push({
        id: uniqueId.get(),
        title: action.title,
        completed: false
      });
      
      return {...state}
    case 'TOGGLE':
      return {...state}
    case 'FILTER':
      switch(action.value) {
        case 'all':
          return {...state, todos_filter: state.todos}
        case 'closed':
          return {...state, todos_filter: state.todos.filter(todo => todo.completed)}
        case 'open':
          return {...state, todos_filter: state.todos.filter(todo => !todo.completed)}
        default:
          return state
      }
    default:
      return state
  }
}
