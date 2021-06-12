import { useState } from 'react'
import { ApiRequest } from "../utils/ApiRequest"


type UseHooksProps = () => {
    fetchedData: Data[]
    getReqIndex: () => void
    addReqIndex: (formData: object) => void
    deleteReqIndex: (id: string) => void
}

type ResponseData = {
    _id: string
    reqLine: string
    description: string
}

type Data = {
    id: string
    reqLine: string
    description: string
}

export const useReqIndex: UseHooksProps = () => {

    const [fetchedData, setFetchedData] = useState<Data[]>([])

    const getReqIndex = async () => {
        try {
            const { data } = await new ApiRequest('GET').reqIndex()
            data.map((obj: ResponseData)  => setFetchedData(prev => 
                [
                    ...prev,
                    {
                        id: obj._id,
                        reqLine: obj.reqLine,
                        description: obj.description
                    }
                ]
            ))
        } catch (error) {
            console.log(error)
        }
    }

    const addReqIndex = async (formData: object) => {
        try {

            const { data } = await new ApiRequest('POST', '', formData).reqIndex()
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteReqIndex = async (id: string) => {
        try {

            const { data } = await new ApiRequest('DELETE', id).reqIndex()
            console.log(data)

            window.location.assign('/')

        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchedData,
        getReqIndex,
        addReqIndex,
        deleteReqIndex
    }
}
