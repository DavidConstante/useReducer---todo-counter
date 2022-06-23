import React, { useReducer } from 'react'
import Title from './Componets/Title'
import TodoForm from './Componets/TodoApp/TodoForm'
import TodoList from './Componets/TodoApp/TodoList'
import { todoReducer as reducer } from './Reducers/todoReducer'



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


const TodoApp = () => {

    const [todos, dispatch] = useReducer(reducer, initialTodos)

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

    // TODO: Enable Buton Edit
    const handleEdit = (todo) => {
        console.log('edit', todo);
        dispatch({
            type: 'EDIT',
            payload: todo
        })
    }

    return (
        <div>
            <Title title={'Todo App'} />

            <div className="flex flex-row h-screen">

                <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggle} />

                <TodoForm onNewTodo={handleNewTodo} onEdit={handleEdit} />

            </div>

        </div>
    )
}

export default TodoApp