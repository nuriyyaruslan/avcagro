import React from 'react';
import './Home.css';
import HeaderTransparent from '../../components/Header/HeaderTransparent';
import Partners from '../Home/Partners/Partners';
import HomeNews from './HomeNews/HomeNews';
import HomeProducts from './HomeProducts/HomeProducts';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeSlider from './HomeSlider/HomeSlider';

function Home(props) {
    return (
        <div>
            <HeaderTransparent/>
            <section class="home-slider">
                <HomeSlider/>
                <div class="home-slider-layer">
                    <div class="container">
                        <div class="home-slider-layer-content">
                            <h1 className="h1">Təsərrüfatınızı 
                            <span> bizimlə </span>inkişaf etdirin!</h1>
                            <div class="home-slider-layer-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <a href="#" class="home-slider-layer__link">Ətraflı</a>
                        </div>
                    </div>
                </div>
            </section>
            <HomeAbout/>
            <HomeProducts/>
            <HomeNews/>
            <Partners/>
        </div>
    );
}

export default Home;