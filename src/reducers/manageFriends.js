export function manageFriends(state = { friends: [] }, action){

    switch (action.type) {
        case "ADD_FRIEND":
            return {
                ...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]
            }
        case "REMOVE_FRIEND":
            let filteredFriendsArr = state.friends.filter(friend => friend.id !== action.id)
            return {
                friends: filteredFriendsArr
            }
        default:
            return state 
    }

}
