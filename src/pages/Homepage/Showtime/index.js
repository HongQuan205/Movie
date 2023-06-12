import React, { useEffect, useState } from 'react'
import {Tabs} from 'antd'
import { useSelector } from 'react-redux'
import './showtime.less'
import MovieList from './MovieList'
export default function Showtime(){

    const [stateMovieList,setStateMovieList] = useState({
        dailyMovieList : [],
        comingMovieList : [],
    })

    const  movieList = useSelector(
        (state) => state.movieReducer.movieList
    )

    useEffect(() =>{
        const dailyMovieList = movieList.slice(0, Math.floor( (movieList.length/2)))
        const comingMovieList = movieList.slice(Math.floor( (movieList.length/2)))
        setStateMovieList({
          dailyMovieList: dailyMovieList,
          comingMovieList: comingMovieList
        })
    }, [movieList])
    return   <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Đang chiếu',
        key: '1',
        children: <MovieList data = {stateMovieList.dailyMovieList} />,
      },
      {
        label: 'Sắp chiếu',
        key: '3',
        children: <MovieList data = {stateMovieList.comingMovieList} />,
      },
    ]}
  />
}

