export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state]

        case 'DELETE':
            return state.filter(todo => todo.id !== action.payload.id)

        case 'TOGGLE':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        case 'EDIT':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    const { title, content } = action.payload;
                    return {
                        ...todo,
                        title: title,
                        content: content
                    }
                }
                return todo
            })


        default:
            return state;
    }
}