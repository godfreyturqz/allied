import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { useReqIndex } from './useReqIndex'

interface ReqIndex {
    reqLine: string
    description: string
}

export const useForm = (initialState = { reqLine: '', description: '' }) => {

    const [formData, setFormData] = useState<ReqIndex>(initialState)
    const { addReqIndex } = useReqIndex()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>, formData: ReqIndex) => {
        e.preventDefault()
        if(!formData.reqLine || !formData.description) return console.log('Fill up the required fields.')
        // if(Object.values(formData).every(x => x === null || x === '') || formData === {}) return console.log('Fill up the required fields.')
        addReqIndex(formData)
    }


    return { 
        formData,
        handleInputChange,
        handleFormSubmit
    }
}
