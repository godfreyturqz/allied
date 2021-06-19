import { ApiRequest } from "../utils/ApiRequest"

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

type ReqIndexForm = {
    reqLine: string
    description: string
}

export const getReqIndex = async () => {
    
    const { data } = await new ApiRequest('GET').reqIndex()

    const filteredData: Data[]  = data.map((res: ResponseData)  => {
        return {
            id: res._id,
            reqLine: res.reqLine,
            description: res.description
        }
    })

    return filteredData
}

export const postReqIndex = async (formData: ReqIndexForm) => {
    
    const { data } = await new ApiRequest('POST', '', formData).reqIndex()

    const filteredData: Data  = {
        id: data._id,
        reqLine: data.reqLine,
        description: data.description
    }

    return filteredData
}

export const deleteReqIndex = async (id: string) => {
    
    const { data } = await new ApiRequest('DELETE', id).reqIndex()

    const filteredData: Data  = {
        id: data._id,
        reqLine: data.reqLine,
        description: data.description
    }

    return filteredData
}
    