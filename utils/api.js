import axios from "axios";

export const API = axios.create({
    baseURL: 'http://37.140.199.77:8000/api/v1/'
});