export function manageFriends(state, action){
  switch (action.type) {

    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend] }

    case 'REMOVE_FRIEND':
    let arr = []
      state.friends.forEach(f=>{
        if(f.id !== action.id){
          arr.push(f)
        }
      })
      return {friends: arr}


    default:
      return state

  }
}
