import { useState } from 'react'

const useForm = (initialform = {}) => {

    const [form, setForm] = useState(initialform)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const onReset = () => {
        setForm(initialform)
    }


    return { form, onInputChange, onReset }
}

export {
    useForm
}
