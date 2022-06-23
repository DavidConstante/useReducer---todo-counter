import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onToggle, handleLoadEditForm }) => {
    return (
        <div className="flex flex-col justify-center w-3/5 max-h-screen overflow-y-auto no-scrollbar h-5/6 ">
            {
                todos.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggle={onToggle}
                        handleLoadEditForm={handleLoadEditForm}
                    />
                })
            }
        </div>
    )
}

export default TodoList