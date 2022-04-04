import {FETCH_FOODS,DELETE_FOODS,FETCH_FOODS_BY_SEARCH} from '../constants/actionTypes'
import * as api from '../../api/index'

export const getFoods = () => async (dispatch) =>{
    try{
        const  { data }  = await api.fetchFoods()
        
        dispatch({ type: FETCH_FOODS, payload: data });
    }catch(error){
        console.log(error)
    }
}

export const deleteFoods = () => (dispatch) =>{
    try {
        const data = []
        dispatch({ type: DELETE_FOODS, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getFoodsBySearch = (searchQuery) => async (dispatch) =>{
    try {
        const { data }  = await api.fetchFoodsBySearch(searchQuery)
        dispatch({ type: FETCH_FOODS_BY_SEARCH, payload: data });
    } catch (error) {
        console.log(error)
    }
}