//Infos about the user in the initial time
export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            /*It will get the first result and then set up the avatar of the user*/
            return { ...state, avatar: action.payload.avatar };
        break;
        default:
            return state;
    }
}