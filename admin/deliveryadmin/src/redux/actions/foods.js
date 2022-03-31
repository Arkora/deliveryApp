import {FETCH_FOODS,DELETE_FOODS} from '../constants/actionTypes'
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