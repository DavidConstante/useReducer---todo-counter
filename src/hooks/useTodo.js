import { useReducer } from "react";
import { todoReducer as reducer } from "../Reducers/todoReducer";

const initialTodos = [
    {
        id: new Date().getTime() * 3,
        title: 'Nota 1',
        content: "Entender los reducers de react",
        done: false
    },
    {
        id: new Date().getTime() * 5,
        title: 'Nota 2',
        content: "Entender el useContext de react",
        done: false
    },
]

export const useTodo = () => {

    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleNewTodo = (todo) => {
        dispatch({
            type: 'ADD',
            payload: todo
        })
    }
    const handleDeleteTodo = (todo) => {
        dispatch({
            type: 'DELETE',
            payload: todo
        })
    }
    const handleToggle = (todo) => {
        dispatch({
            type: 'TOGGLE',
            payload: todo
        })
    }


    const handleEdit = (todo) => {
        dispatch({
            type: 'EDIT',
            payload: todo
        })
    }



    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggle,
        handleEdit,
        handleEdit
    }

}