export function managePresents(state, action){
  // let newState = Object.assign({}, state, {count: state.count + 1})
  switch (action.type) {
    case 'INCREASE' :
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
