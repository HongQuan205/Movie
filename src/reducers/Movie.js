import { GET_MOVIE_LIST_FAIL, GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS } from "./constants/Movie"

const initialState = {
    movieList : [],
    errorMovieList: null,
}

const movieReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_MOVIE_LIST_REQUEST : {
            return {
                ...state,
                loadingMovieList: true,
                errorMovieList : null,
                movieDetail : null,
            };
        }
        case GET_MOVIE_LIST_SUCCESS :{
            return {
                ...state,
                movieList: action.payload.data,
                loadingMovieList: false
            }
        }

        case GET_MOVIE_LIST_FAIL :{
            return {
                ...state,
                errorMovieList : action.payload.errorMovieList,
                loadingMovieList: false
            };
        }
        default :
        return state
    }
}

export default movieReducer