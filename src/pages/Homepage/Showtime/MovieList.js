import Slider from "react-slick";
import React, { Component } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function MovieList(props) {

  const SampleNextArrow = (props)  =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow= (props)  =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const renderMovieList = () =>{
      return props.data.map((el,index) =>{
        return <div key={index}>{el.tenPhim}</div>
      })
    }
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          {renderMovieList()}
        </Slider>
      </div>
    );
}
