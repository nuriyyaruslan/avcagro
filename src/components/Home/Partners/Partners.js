import React, { Component } from "react";
import Slider from "react-slick";
import partnerIcon from '../../../assets/imgs/partner-icon.png';
import bioMan from '../../../assets/imgs/bioman.png';
import './Partners.css';

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

class Partners extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 6,
            swipeToSlide: true,
            centerPadding: "15px",
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
                        arrows: false
                    }
                }
            ]
        };
        return (
            <section class="partners-cover">
                <div class="container">
                    <h4 class="partner-title">PARTNYORLAR</h4>
                    <div className="similar-products-slider general-slider-cover">
                        <Slider {...settings}>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={bioMan} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="similar-slider-item">
                                <div class="similar-item-partner">
                                    <a href="#" target="_blank">
                                        <div class="partner-slider-img">
                                            <img src={partnerIcon} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
export default Partners;