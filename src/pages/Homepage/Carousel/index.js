import { Carousel } from "antd";
import { useDispatch } from "react-redux";
import homeCarouselData from "../../../constant/homeCarouselData";
import {RightCircleOutlined ,LeftCircleOutlined} from '@ant-design/icons';
import './carousel.less'
import BtnPlay from "../../../components/BtnPlay";
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
      <BtnPlay/>
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
