import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { postReqIndex, deleteReqIndex } from '../../services/ReqIndexService'
// import { ApiRequest } from "../utils/ApiRequest"
// import { LocalStorage } from '../utils/LocalStorage'

// type ResponseData = {
//     _id: string
//     reqLine: string
//     description: string
// }

type Data = {
    id: string
    reqLine: string
    description: string
}

interface ReqIndexForm {
    reqLine: string
    description: string
}

const initialState = {
    reqLine: '',
    description: ''
}

export const useReqIndex = () => {

    const [fetchedData, setFetchedData] = useState<Data[]>([])
    const [page, setPage] = useState('reqIndexPage')
    const [formData, setFormData] = useState<ReqIndexForm>(initialState)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = (
        e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
        formData: ReqIndexForm
    ) => {

        e.preventDefault()
        if(!formData.reqLine || !formData.description) return console.log('Fill up the required fields.')
    
        addReqIndex(formData)
        setFormData(initialState)
    }

    const addReqIndex = (formData: ReqIndexForm) => {
        try {
            postReqIndex(formData)

            const newReqIndex = {
                id: Date.now().toString(),
                ...formData
            }
    
            setFetchedData(prev => [...prev, {...newReqIndex}])
            setFormData(initialState)
            setPage('reqIndexPage')

        } catch (error) {
            console.log(error)
        }
    }

    const removeReqIndex = (id: string) => {
        try {
            deleteReqIndex(id)
            const filteredData = fetchedData.filter(value => value.id !== id)
            setFetchedData(() => [...filteredData])

        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchedData,
        setFetchedData,
        removeReqIndex,
        page,
        setPage,
        formData,
        setFormData,
        handleInputChange,
        handleFormSubmit
    }
}
