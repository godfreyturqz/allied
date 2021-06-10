import axios, { AxiosRequestConfig, Method } from 'axios'

// for dev
const isLocalServer = true

export class ApiRequest {

    private API_BASE_URL: string
    private httpReqMethod: Method
    private id: string
    private objectData: object

    constructor(httpReqMethod: Method, id: string = '', objectData: object = {}){
        this.API_BASE_URL = isLocalServer ? 'http://localhost:5000/api/v1' : 'https://allied.herokuapp.com/api/v1'
        this.httpReqMethod = httpReqMethod
        this.id = id
        this.objectData = objectData
    }

    async reqIndex(){

        const config: AxiosRequestConfig = {
            url: `${this.API_BASE_URL}/req-index/${this.id}`,
            method: this.httpReqMethod,
            data: this.objectData
        }

        const response = await axios(config)

        return response

    }
}
