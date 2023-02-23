import React, { Component } from "react";
import Slider from "react-slick";
import './HomeSlider.css';
import productImg from '../../../assets/imgs/product.png';
import slider1 from '../../../assets/imgs/slider-img1.png';
import slider2 from '../../../assets/imgs/slider-img2.png';
import slider3 from '../../../assets/imgs/slider-img3.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
     
      onClick={onClick}
    />
  );
}

class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      nav:false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2500,
      swipeToSlide: true,
    };
    return (
      <div className="similar-products-slider home-slider-main">
        <Slider {...settings}>
          <div class="home-slider-item">
            <div class="home-slider__img">
                <img src={slider1} alt="" />
            </div>
          </div>
          <div class="home-slider-item">
            <div class="home-slider__img">
                <img src={slider3} alt="" />
            </div>
          </div>
          <div class="home-slider-item">
            <div class="home-slider__img">
                <img src={slider2} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default HomeSlider;