import axios from "axios"

const API_URL = "http://localhost:3002/products"

const getProducts = () => {
    return fetch(API_URL)
}

const getProducts2 = () => {
    return axios.get(API_URL)
}

const addProduct = product => {
    return axios.post(API_URL, product)
}

const delProduct = index => {
    console.log(index);
    return axios.delete(`${API_URL}/${index}`)
}
const modProduct = (mod) => {
    console.log(mod);
    return axios.put(`${API_URL}/${mod.id}`, mod)
}
    

export default{
    getProducts,
    getProducts2,
    addProduct,
    delProduct,
    modProduct
}

