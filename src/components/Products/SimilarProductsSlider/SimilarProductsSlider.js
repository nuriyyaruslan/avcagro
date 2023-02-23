import React, { Component } from "react";
import Slider from "react-slick";
import './SimilarProductsSlider.css';
import productImg from '../../../assets/imgs/product.png';

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

class SimilarProductsSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 6,
      swipeToSlide: true,
      centerPadding: "60px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true,
            arrows:false
          }
        },
        // {
        //   breakpoint: 360,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     dots: true,
        //     arrows:false
        //   }
        // }
      ]
    };
    return (
      <div className="similar-products-slider">
        <Slider {...settings}>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
          <div class="similar-slider-item">
            <div class="similar-item">
                <a href="/productsdetails">
                    <div class="product-slider-img">
                        <img src={productImg} alt="" />
                    </div>
                    <p className="product-slider-p">Arbalet 75 WG</p>
                    <div class="product-slider-txt">
                        Aqrokimyəvi məhsullar
                    </div>
                </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimilarProductsSlider;