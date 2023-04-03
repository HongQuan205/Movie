import theatersApi from "../../api/theaterApi";

import {
    GET_THEATERS_SHOWTIME_REQUEST,GET_THEATERS_SHOWTIME_SUCCESS,
    GET_THEATERS_SHOWTIME_FAIL,GET_THEATERS_SHOWTIME_REQUEST2,
     GET_THEATERS_SHOWTIME_SUCCESS2, GET_THEATERS_SHOWTIME_FAIL2
} from '../constants/Theater'

export const getTheaters = () =>{
    return async (dispatch) =>{
        dispatch({
            type: GET_THEATERS_SHOWTIME_REQUEST
        })
        try {
            const result =await theatersApi.getTheaterInformation()
            dispatch({
                type: GET_THEATERS_SHOWTIME_SUCCESS,
                payload: {data: result.data}
            })
        } catch (error) {
            dispatch({
                type: GET_THEATERS_SHOWTIME_FAIL,
                payload: {errorTheaterList : error.response?.data ? error.response.data : error.message}
            })
        }
    }
}