export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      // return {friends: state.friends + 1}
      // console.log(state.friends);
      return (
        {...state,
          friends: [
            ...state.friends,
            action.friend
          ]
        }
      )
    case 'REMOVE_FRIEND':
      let id = parseInt(action.id)
      console.log('id', id);
      return (
        {...state,
          friends: [
            ...state.friends.filter(friend_obj => friend_obj.id !== action.id)
          ]
        }
      )
    default:
      return state;
  }
}
