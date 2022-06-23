import React, { useReducer, useState } from 'react'
import Title from './Componets/Title'

import { counterReducer as reducer } from './Reducers/counterReducer'

const CounterApp = () => {

    const [counter, dispatch] = useReducer(reducer, 10)


    const handleIncrement = () => {
        dispatch({
            type: 'increment',
            payload: 2
        })
    }

    const handleDecrement = () => {
        dispatch({
            type: 'decrement',
            payload: 1
        })
    }

    const handleReset = () => {
        dispatch({
            type: 'reset',
            payload: 0
        })
    }

    return (
        <div>
            <Title title={'Counter App'} />

            <div>
                <h2 className='text-center font-bold text-2xl text-white p-2'>Counter: {counter} </h2>
                <div className='flex justify-center'>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={handleIncrement}
                    >
                        Increment
                    </button>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={handleDecrement}
                    >
                        Decrement
                    </button>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        onClick={handleReset}
                    >
                        Reset
                    </button>


                </div>
            </div>
        </div>
    )
}

export default CounterApp