import axios from 'axios';
import { APIDef, APIInput } from '@app/core/models/interface/ApiEndPoint';
export class RestApiService {
    public invoke<T>(def: APIDef, apiInput?: APIInput, data?: T, queryMap?: any) {
        debugger
        return this.invokeAPI(def.api(apiInput), def.method, data, queryMap);
    }
    private invokeAPI<T>(api: string, method: string, body?: T, queryMap?: any) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

        const httpOptions = { headers: headers, params: queryMap, observe: 'body' };
        switch (method) {
            case 'POST':
                return this.post<T>(api, body, httpOptions);
            case 'GET':
                    debugger
                return this.get<T>(api, httpOptions);
            case 'PUT':
                return this.put<T>(api, body, httpOptions);
            case 'DELETE':
                return this.delete<T>(api, httpOptions);
            default:
                break;
        }
    }

    private post<T>(apiUrl: any, body: any, httpOptions: any) {
        return axios({
            method: 'post',
            url: apiUrl,
            headers: httpOptions.headers,
            params: httpOptions.params,
            data: body
        })
    }

    private get<T>(apiUrl: any, httpOptions: any) {
        debugger
        return axios({
            method: 'get',
            url: apiUrl,
            params: httpOptions.params,
            headers: httpOptions.headers
        })
    }

    private put<T>(apiUrl: any, body: any, httpOptions: any) {
        return axios({
            method: 'put',
            url: apiUrl,
            headers: httpOptions.headers,
            params: httpOptions.params,
            data: body
        })
    }

    private delete<T>(apiUrl: any, httpOptions: any) {
        return axios({
            method: 'delete',
            url: apiUrl,
            headers: httpOptions.headers,
            params: httpOptions.params
        })
    }
}