import Slider from "react-slick";
import React, { Component } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.less'
import MovieItem from "../MovieItem";
export default function MovieList(props) {

  const SampleNextArrow = (props)  =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ background: "#d8d8d8", fontSize:"30px",display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow= (props)  =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#d8d8d8" }}
        onClick={onClick}
      />
    );
  }

    const settings = {
      dots: true,
      row:4,
      slidesPerRow:2,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: "60px",
      speed: 300,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow />
    };

    const renderMovieList = () =>{
      return props.data.map((el,index) =>{
        return <MovieItem key = {index} movie = {el} />

      })
    }

    return (
      <div className="out-class">
        <Slider {...settings}  style={{
          margin :"0 auto",
          width: "80%",
          maxWidth: "800px"
        }} className="abcs">
         {renderMovieList()}
        </Slider>
      </div>
    );
}
