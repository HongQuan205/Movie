// import React from 'react'
// import { Row, Col, Carousel } from 'antd'

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79'
// }

// // from https://react-slick.neostack.com/docs/example/custom-arrows
// const SampleNextArrow = props => {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'red' }}
//       onClick={onClick}
//     />
//   )
// }

// const SamplePrevArrow = props => {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'green' }}
//       onClick={onClick}
//     />
//   )
// }

// const settings = {
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />
// }

// const CarouselArrows = () => {
//   return (
//     <>
//       <Row justify="center">
//         <Col span={16}>
//           <Carousel arrows {...settings}>
//             <div>
//               <h3 style={contentStyle}>1</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>2</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>3</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>4</h3>
//             </div>
//           </Carousel>
//         </Col>
//       </Row>
//     </>
//   )
// }

// export default CarouselArrows


import { Carousel } from "antd";
import { useDispatch } from "react-redux";
import homeCarouselData from "../../../constant/homeCarouselData";
import { RightOutlined , LeftOutlined,RightCircleOutlined ,LeftCircleOutlined} from '@ant-design/icons';
import './carousel.less'
export default function CarouselPage() {

  const  NextArrow = props => {
    const { currentSlide, slideCount, onClick ,...restProps } = props
    return (
     <button {...restProps} className={
      "slick-next slick-arrow" + (currentSlide === slideCount -1 ? " slick-disabled": "")
     } aria-hidden="true"
     aria-disabled={currentSlide === 0 ? true : false}
     type="button" onClick={onClick}  > <RightCircleOutlined/></button>
    )
  }

  const PrevArrow = props => {
    const { currentSlide, slideCount, onClick ,...restProps } = props
    return (
     <button {...restProps} className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled":"")
     } 
     aria-hidden="true"
     aria-disabled={currentSlide === 0 ? true : false}
     type="button" onClick={onClick}> <LeftCircleOutlined />
     </button>
    )
  }

  const settings = {
    dotPosition:  "bottom",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div>
      <Carousel  arrows {...settings}  className="carousel" >
        {homeCarouselData.map((banner, index) => {
          return (
            <>
              <div key={index} className="carousel-container">
                  <img src={banner.hinhAnh} alt={banner.tenPhim} className="carousel-image"/>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}
