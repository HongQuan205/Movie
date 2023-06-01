import { useDispatch, useSelector } from "react-redux";
import CarouselPage from "./Carousel";
import SimpleTab from "./Showtime";
import { useEffect } from "react";
import { getMovieList } from "../../reducers/actions/Movie";


export default function Homepage(){

  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieReducer.movieList)

  useEffect(() => {
    if(!movieList.length) {
      dispatch(getMovieList())
    }
  }, [])

    return (
       <div>
         <CarouselPage/>
         <SimpleTab/>

       </div>
    )
}