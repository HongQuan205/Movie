

import {
    GET_MOVIE_LIST_REQUEST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL,
  } from "../constants/Movie";
  
  import movieApi from "../../api/movieApi";

  export const getMovieList = () =>{
    return async(dispatch) =>{
        dispatch({
            type: GET_MOVIE_LIST_REQUEST
        })
        try {
            const result = await movieApi.getMovieList()
            dispatch({
                type: GET_MOVIE_LIST_SUCCESS,
                payload: {data: result.data}
            })
            return result
        } catch (error) {
            dispatch({
                type: GET_MOVIE_LIST_FAIL,
                payload: {
                    errorMovieList: error.response?.data ? error.response.data: error.message
                }
            })
        }
    }
  }