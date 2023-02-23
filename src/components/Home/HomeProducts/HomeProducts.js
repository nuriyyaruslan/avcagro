import React from 'react';
import './HomeProducts.css';
import cow from '../../../assets/imgs/cow.png';
import cows from '../../../assets/icons/cows.svg';
import leave from '../../../assets/icons/leave.svg';

function HomeProducts(props) {
    return (
        <section className="home-products">
            <div class="container">
                <div class="d-flex home-products--flex">
                    <div class="home-products--left">
                        <img src={cow} alt="" />
                    </div>
                    <div class="home-products--right">
                        <div class="home-products--top">
                            <h4 class="home-products--h4">MƏHSULLARIMIZ</h4>
                            <div class="home-products--cover">
                                <h5 class="home-products--h5">
                                    Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.
                                </h5>
                            </div>
                        </div>
                        <div class="home-products--bottom d-flex align-items-center">
                            <div class="home-products-info">
                                <a href="#">
                                    <img src={cows} alt="" />
                                    <h6>Heyvandarlıq</h6>
                                    <div class="home-products-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </a>
                            </div>
                            <div class="home-products--line"></div>
                            <div class="home-products-info">
                               <a href="#">
                                    <img src={leave} alt="" />
                                    <h6>Bitkiçilik</h6>
                                    <div class="home-products-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeProducts;