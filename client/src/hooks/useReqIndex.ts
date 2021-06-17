import React, { useState } from 'react'
// import { ApiRequest } from "../utils/ApiRequest"
// import { LocalStorage } from '../utils/LocalStorage'


type CustomHooksProps = () => {
    fetchedData: Data[]
    setFetchedData: React.Dispatch<React.SetStateAction<Data[]>>
    // getReqIndex: () => void
    addReqIndex: (formData: ReqIndexForm) => void
    deleteReqIndex: (id: string) => void
}

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

export const useReqIndex: CustomHooksProps = () => {

    const [fetchedData, setFetchedData] = useState<Data[]>([])

    // const getReqIndex = async () => {

    //     const currentState = new LocalStorage().loadState()
    //     if(currentState !== null && currentState.length > 0) {

    //         return currentState.map((obj: Data)  => setFetchedData(prev => 
    //             [
    //                 ...prev,
    //                 {
    //                     id: obj.id,
    //                     reqLine: obj.reqLine,
    //                     description: obj.description
    //                 }
    //             ]
    //         ))
    //     }

    //     try {
    //         const { data } = await new ApiRequest('GET').reqIndex()

    //         data.map((obj: ResponseData)  => {
    //             return setFetchedData(prev => 
    //                 [
    //                     ...prev,
    //                     {
    //                         id: obj._id,
    //                         reqLine: obj.reqLine,
    //                         description: obj.description
    //                     }
    //                 ]
    //             )
    //         })

    //         new LocalStorage().saveState(data)
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const addReqIndex = async (formData: object) => {
    //     try {

    //         const currentState = new LocalStorage().loadState()
    //         const newState = currentState.push(formData)
    //         console.log(newState)
    //         // new LocalStorage().saveState(newState)

    //         // const { data } = await new ApiRequest('POST', '', formData).reqIndex()
    //         // console.log(data)

    //         // new LocalStorage().refreshState()

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const deleteReqIndex = async (id: string) => {
    //     try {

    //         const { data } = await new ApiRequest('DELETE', id).reqIndex()
    //         console.log(data)
    //         // console.log('^ deleted data')

    //         // const currentState = new LocalStorage().loadState()
    //         // console.log(currentState)
    //         // const filtered = currentState.filter((obj: Data) => obj.id !== data.data._id)
    //         // console.log(filtered)

    //         // new LocalStorage().saveState([{}])
    //         // setFetchedData(prev => [...prev])

    //         new LocalStorage().refreshState()

    //         window.location.assign('/')

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const addReqIndex = (formData: ReqIndexForm) => {
        // setFetchedData(prev => [...prev])
        console.log(formData)
        console.log(fetchedData)
    }


    const deleteReqIndex = (id: string) => {

        const filteredData = fetchedData.filter(value => value.id !== id)
        setFetchedData(() => [...filteredData])

    }

    return {
        fetchedData,
        setFetchedData,
        // getReqIndex,
        addReqIndex,
        deleteReqIndex
    }
}
