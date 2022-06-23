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

    const onEdit = (data) => {
        setForm(data)
    }


    return { form, onInputChange, onReset, onEdit }
}

export {
    useForm
}
