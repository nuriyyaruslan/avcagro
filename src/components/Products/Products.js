import React from 'react';
import ProductDetails from './ProductDetails/ProductDetails';
import './Products.css';
import HeaderTransparent from '../Header/HeaderTransparent';
import productHeadCover from '../../assets/imgs/product-cover.png';
import CropFarmingSlider from './CropFarmingSlider/CropFarmingSlider';
import AnimalHusbandrySlider from './AnimalHusbandry/AnimalHusbandrySlider';

function Products(props) {
    return (
        <div>
            <HeaderTransparent/>
            <div class="product-head position-relative">
                <img src={productHeadCover} alt="" />
                <div class="product-head-layer d-flex align-items-center">
                   <div class="product-head-content">
                        <h2 class="product-head-h2">MƏHSULLARIMIZ</h2>
                        <div class="product-head-txt">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                   </div>
                </div>
            </div>
            <div class="category-slider">
                <div class="container">
                    <div class="crop-farming">
                        <h4 class="category-slider--title">Bitkiçilik</h4>
                        <div class="category-slider__nav category__slider__nav">
                            <a href="#" class="category-slider_link active">Gübrələr</a>
                            <a href="#" class="category-slider_link">Toxumlar</a>
                            <a href="#" class="category-slider_link">Pestisidlər</a>
                        </div>
                        <CropFarmingSlider/>
                    </div>
                    <div class="crop-farming">
                        <h4 class="category-slider--title">Heyvandarlıq</h4>
                        <div class="category-slider__nav">
                            <a href="#" class="category-slider_link">Antibiotiklər</a>
                            <a href="#" class="category-slider_link">Antihelmint Antiparazitar</a>
                            <a href="#" class="category-slider_link">Dezinfektant Toksin bağlayıcı</a>
                            <a href="#" class="category-slider_link">Minerallar Premikslər yem Əlavələri</a>
                            <a href="#" class="category-slider_link">Non-Steroid Stroid Ağrıkəsicilər</a>
                            <a href="#" class="category-slider_link">Vaksinlər</a>
                            <a href="#" class="category-slider_link">Probiotiklər</a>
                        </div>
                        <AnimalHusbandrySlider/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;