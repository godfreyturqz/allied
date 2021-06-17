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
    