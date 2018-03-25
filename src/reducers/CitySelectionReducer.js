export default (state = 'Berlin', action) => {
    switch(action.type) {
    case 'SELECT_CITY':
        return action.payload;
    default:
        return state;
    }
};
