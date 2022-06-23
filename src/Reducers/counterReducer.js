
export const counterReducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return state + action.payload;

        case 'decrement':
            return state - action.payload;

        case 'reset':
            return action.payload;

        default:
            state;
    }

    return state
}