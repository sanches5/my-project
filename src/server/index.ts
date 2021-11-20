import axios, {Axios} from "axios";

// axios.request({
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

export let a = axios.post("http://localhost:4042/?test=32", {t: 23}).then(response => {
    console.log("get", response.data)
    return response
})

console.log(a)

// axios.post("/?sd=post", {
//     test: "body"
// }).then(response => {
//     console.log(response.data)
//     return response
// })