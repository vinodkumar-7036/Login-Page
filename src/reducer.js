const initialState = []
function rootReducer(state = initialState, action) {
    // if (action.data) {
    //     return [...action.data];
    // } else {
    //     return state
    // }
    switch (action.type) {
        case "UPDATE_DATA":
            return state.concat(action.data);
        default:
            return state;
    }
};

// const rootReducer = combineReducers({
//     counter
// });

export default rootReducer;