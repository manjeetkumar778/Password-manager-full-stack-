import axios from "axios";


const API = 'http://localhost:8000/api/password';

export const getPassword=()=>{
    return axios.get(API)
}

export const createPassword=(data)=>{
    return axios.post(API, data)
}

export const deletePassword=(id)=>{
    return axios.delete(`${API}/${id}`)
}

export const updatePassword=(id, data)=>{
    return axios.put(`${API}/${id}`, data)
}