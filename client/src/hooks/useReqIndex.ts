import { useState } from 'react'
import { ApiRequest } from "../utils/ApiRequest";


type UseHooksProps = () => {
    fetchedData: object[]
    getReqIndex: () => void
}

type Data = {
    reqLine: string
    description: string
}

export const useReqIndex: UseHooksProps = () => {

    const [fetchedData, setFetchedData] = useState<object[]>([])

    const getReqIndex = async () => {
        try {

            const { data } = await new ApiRequest('GET').reqIndex()
            data.map((obj: Data)  => setFetchedData(prev => 
                [
                    ...prev,
                    {
                        reqLine: obj.reqLine,
                        description: obj.description
                    }
                ]
            ))

        } catch (error) {
            throw Error(error)
        }
    }

    return {
        fetchedData,
        getReqIndex
    }
}