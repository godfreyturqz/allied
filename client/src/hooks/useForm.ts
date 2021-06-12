import { useState, ChangeEvent } from 'react'

interface ReqIndex {
    reqLine: string
    description: string
}

export const useForm = (initialState = {reqLine: '', description: ''}) => {

    const [formData, setFormData] = useState<ReqIndex>(initialState)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
        ...prev,
        [event.target.name]: event.target.value
        }))
    }


    return { formData, handleInputChange }
}
