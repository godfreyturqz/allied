import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { useReqIndex } from './useReqIndex'
import { useHistory } from 'react-router-dom'

interface ReqIndex {
    reqLine: string
    description: string
}

const initial = {
    reqLine: '',
    description: ''
}

export const useForm = (initialState= initial) => {

    const history = useHistory()

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

        const submit = () => {
            return new Promise((resolve, reject) => {
                const response = addReqIndex(formData)
                resolve(response)
            })
        }
        submit()
        .then(() => setFormData(initial))
        .then(() => history.push('/'))
        
    }


    return { 
        formData,
        handleInputChange,
        handleFormSubmit
    }
}
