export function manageFriends(state, action){
  // console.log('state:', state);
  switch(action.type) {
    case "ADD_FRIEND":
    return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let filteredArr = state.friends.filter(friendObj => friendObj.id !== action.id)
      return {...state, friends: filteredArr}
    default:
    return state;
  }
}

// {
//   type: "ADD_FRIEND",
//   friend: {
//     name: 'Joe',
//     hometown: 'Boston',
//     id: 101
//   }
