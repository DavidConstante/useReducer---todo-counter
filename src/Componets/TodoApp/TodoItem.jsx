import React from 'react'

import deleteImg from '../../img/delete.svg'
import editImg from '../../img/edit.svg'

const TodoItem = ({ todo, onDelete, onToggle }) => {


    return (
        <a className={`block relative p-6 mx-8 my-2 max-w bg-slate-300 hover:bg-slate-500 rounded-xl ${todo.done ? 'bg-slate-500 line-through' : ''}   `}>
            <h5
                className="w-4/5 mb-2 text-2xl font-bold tracking-tight text-black"
                onClick={() => onToggle(todo)}
            >
                {todo.title}
            </h5>
            <p
                className="font-normal text-gray-700"
                onClick={() => onToggle(todo)}
            >
                {todo.content}
            </p>
            <div className=" absolute flex flex-row right-0 top-0">
                <img onClick={() => onDelete(todo)} className="edit w-10 m-2  " src={deleteImg} />
                <img onClick={() => handleLoadEditForm(todo)} className="delete w-10 m-2  " src={editImg} />
            </div>
        </a>

    )
}

export default TodoItem