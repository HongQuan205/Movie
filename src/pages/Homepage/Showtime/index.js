import React, { useEffect,useRef, useState } from 'react'
import {Tabs} from 'antd'
import { useSelector } from 'react-redux'
import './showtime.less'
import MovieList from './MovieList'
export default function Showtime(){
    const [value, setValue] = useState({
        value : 0, fade: true, notDelay: 0
    })

    const [stateMovieList,setMovieList] = useState({
        dailyMovieList : null,
        comingMovieList : null,
    })

    const {errorMovieList, movieList} = useSelector(
        (state) => state.movieReducer
    )
    const timeout = useRef(null)
    


    useEffect(() =>{
         const dailyMovieList = movieList.slice(0, Math.floor( (movieList.length/2)))
        const comingMovieList = movieList.slice(Math.floor( (movieList.length/2)))
        setMovieList({dailyMovieList,comingMovieList})
    }, [movieList])

    console.log("Quan", stateMovieList.dailyMovieList)
    return  <Tabs className='tabs'
    defaultActiveKey="1"
    items={[
      {
        label: 'Đang chiếu',
        key: '1',
        children: <MovieList movieList = {stateMovieList.dailyMovieList}/>,
      },
      {
        label: 'Sắp chiếu',
        key: '2',
        children:  <MovieList movieList = {stateMovieList.comingMovieList}/>,
      },
    ]}
  />
}

