import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.benhvienhongha.vn/api',
    headers: {
        "Content-Type": 'application/json',
    }
})

export default http