import { stringify } from "querystring";

export const configFetch = (url: string, method: string, body?: {}, params?: {}) => {
    const configRequest: {
        method: string
        headers: Headers
        body?: string
    } = {
        method: method,
        headers: new Headers({ "content-type": "application/json;charset=utf-8", "Authorization": "0ZHJadMU0KI6"})
    };

    let setUrl: string = url;

    if (body && Object.keys(body).length) {
        configRequest.body = JSON.stringify(body);
    }

    if (params) {
        setUrl = url + "?" + stringify(params);
    }

    return fetch(setUrl, configRequest)
        .then((response) => {
            if (response.status === 200) {
                console.log(response, response)
                return response.text();
            }
            else {
                throw new Error("Something went wrong on api server!");
            }
        })
        .then((response) => {
            console.debug(response);
            return response;
        })
        .catch((error) => {
            console.error(error);
        });
};


export const get = (url: string, body: object, params: object) => configFetch(url, "GET", body, params)
export const post = (url: string, body: object, params: object) => configFetch(url, "POST", body, params)
export const del = (url: string, body: object, params: object) => configFetch(url, "DELETE", body, params)
