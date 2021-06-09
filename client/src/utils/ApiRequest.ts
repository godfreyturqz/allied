import axios, { AxiosRequestConfig } from 'axios'

// for dev
const isLocalServer = true

export class ApiRequest {

    API_BASE_URL: string
    httpReqMethod: string
    id: string
    objectData: object

    constructor(httpReqMethod: string, id: string = '', objectData: object = {}){
        this.API_BASE_URL = isLocalServer ? 'http://localhost:5000/api/v1' : 'https://allied.herokuapp.com/api/v1'
        this.httpReqMethod = httpReqMethod
        this.id = id
        this.objectData = objectData
    }

    // reqIndex(){
    //     return axios({
    //         url: `${this.API_BASE_URL}/req-index/${this.id}`,
    //         method: this.httpReqMethod,
    //         data: this.objectData
    //     })
    // }

}
