import React, { useReducer, useState } from 'react'
import Title from './Componets/Title'
import TodoForm from './Componets/TodoApp/TodoForm'
import TodoList from './Componets/TodoApp/TodoList'
import { useTodo } from './hooks/useTodo'


const TodoApp = () => {


    const [updateTodo, setUpdateTodo] = useState({});

    const {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggle,
        handleEdit,
    } = useTodo()

    const handleLoadEditForm = (todo) => {
        setUpdateTodo(todo)
    }



    return (
        <div>
            <Title title={'Todo App'} />

            <div className="flex flex-row h-screen">

                <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggle} handleLoadEditForm={handleLoadEditForm} />

                <TodoForm onNewTodo={handleNewTodo} onEdit={handleEdit} onUpdate={handleEdit} updateTodo={updateTodo} />

            </div>

        </div>
    )
}

export default TodoApp