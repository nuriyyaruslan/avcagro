import React, { Component } from "react";
import Slider from "react-slick";
import '../SimilarProductsSlider/SimilarProductsSlider';
import productImg from '../../../assets/imgs/product.png';
import arrowRight from '../../../assets/icons/arrow-right.svg';

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

class CropFarmingSlider extends Component {
  render() {
    const settings = {
      dots: true,
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
        }
      ]
    };
    return (
      <div className="similar-products-slider general-slider-cover">
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
        <div class="text-center">
          <a href="#" class="see-all-products">Hamısına bax
            <img src={arrowRight } alt="" />
          </a>
        </div>
      </div>
    );
  }
}
export default CropFarmingSlider;