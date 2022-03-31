import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:8000' })

export const fetchFoods = () => API.get('/foods')
export const createFood = (newFood) => API.post('/foods/upload',newFood)
export const getFood = (id) => API.get(`/foods/${id}`)
export const updateFood = (id,updatedFood) => API.patch(`/foods/${id}`,updatedFood)
export const deleteFood = (id) => API.delete(`/foods/${id}`)
