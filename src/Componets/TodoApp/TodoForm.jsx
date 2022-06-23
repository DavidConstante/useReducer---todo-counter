import React from 'react'
import deleteImg from '../../img/delete.svg'
import { useForm } from '../../hooks/useForm'


const TodoForm = ({ onNewTodo }) => {

    const { form, onInputChange, onReset } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime() * 3,
            title: form.title,
            content: form.content,
            done: false
        }
        onNewTodo(newTodo)

    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-2/5 h-2/5 m-12 p-4 flex flex-row items-center justify-center relative bg-slate-300 rounded-lg">

            <div className="w- flex flex-col items-center justify-center mt-6">
                <input
                    className="m-2 border-2 border-black p-2 w-full text-center rounded-lg font-bold" type="text"
                    name="title"
                    placeholder="Title"
                    onChange={onInputChange}
                />
                <textarea
                    name="content"
                    className="m-2 border-2 border-black p-2 w-full text-center rounded-lg "
                    cols="30"
                    rows="5"
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="border-2 w-4/5 rounded-full p-2 m-2 bg-gray-800 text-white font-bold "
                >Save
                </button>
            </div>


            <img
                className="delete w-10 m-2  absolute right-0 top-0 "
                src={deleteImg}
                onClick={onReset}
            />

        </form>
    )
}

export default TodoForm