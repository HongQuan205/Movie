

import {
    GET_MOVIE_LIST_REQUEST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL,
    DELETE_MOVIE_REQUEST,
    DELETE_MOVIE_SUCCESS,
    DELETE_MOVIE_FAIL,
    POST_UPDATE_MOVIE_REQUEST,
    POST_UPDATE_MOVIE_SUCCESS,
    POST_UPDATE_MOVIE_FAIL,
    UPDATE_NONEIMAGE_MOVIE_REQUEST,
    UPDATE_NONEIMAGE_MOVIE_SUCCESS,
    UPDATE_NONEIMAGE_MOVIE_FAIL,
    GET_MOVIE_LIST_REQUEST2,
    GET_MOVIE_LIST_SUCCESS2,
    GET_MOVIE_LIST_FAIL2,
    ADD_MOVIE_UPLOAD_REQUEST,
    ADD_MOVIE_UPLOAD_SUCCESS,
    ADD_MOVIE_UPLOAD_FAIL,
    RESET_MOVIE_MANAGEMENT,
    SAVE_BEFOREINSTALLPROMPT_EVENT,
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