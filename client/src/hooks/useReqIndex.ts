import { useState } from 'react'
import { ApiRequest } from "../utils/ApiRequest"
import { LocalStorage } from '../utils/LocalStorage'


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

        const currentState = new LocalStorage().loadState()
        if(currentState !== null && currentState.length > 0) {

            currentState.map((obj: Data)  => setFetchedData(prev => 
                [
                    ...prev,
                    {
                        id: obj.id,
                        reqLine: obj.reqLine,
                        description: obj.description
                    }
                ]
            ))

            return
        }

        try {
            const { data } = await new ApiRequest('GET').reqIndex()

            new Promise((resolve, reject) => {
                data.map((obj: ResponseData)  => {
                    setFetchedData(prev => 
                        [
                            ...prev,
                            {
                                id: obj._id,
                                reqLine: obj.reqLine,
                                description: obj.description
                            }
                        ]
                    )
                })
                resolve(fetchedData)
            })
            .then((res) => {
                console.log(res)
                // new LocalStorage().saveState(res)
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const addReqIndex = async (formData: object) => {
        try {

            const { data } = await new ApiRequest('POST', '', formData).reqIndex()
            console.log(data)

            new LocalStorage().refreshState()

        } catch (error) {
            console.log(error)
        }
    }

    const deleteReqIndex = async (id: string) => {
        try {

            const { data } = await new ApiRequest('DELETE', id).reqIndex()
            console.log(data)
            // console.log('^ deleted data')

            // const currentState = new LocalStorage().loadState()
            // console.log(currentState)
            // const filtered = currentState.filter((obj: Data) => obj.id !== data.data._id)
            // console.log(filtered)

            // new LocalStorage().saveState([{}])
            // setFetchedData(prev => [...prev])

            new LocalStorage().refreshState()

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
