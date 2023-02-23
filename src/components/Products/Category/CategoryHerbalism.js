import React from 'react';
import './Category.css';
import HeaderTransparent from '../../Header/HeaderTransparent';
import { Container, Row, Col, Dropdown, DropdownButton, Accordion } from 'react-bootstrap';
import plants from '../../../assets/imgs/plants.png';
import searchCategory from '../../../assets/icons/search-category.svg';
import productImg from '../../../assets/imgs/product.png';
import arrowRight from '../../../assets/icons/arrow-right.svg';

function CategoryHerbalism() {
    return (
        <div>
            <section className="category-section">
                <HeaderTransparent />
                <div class="category-head__section position-relative">
                    <img src={plants} alt="" className="category-head__img" />
                    <div class="category-head--layer position-absolute">
                        <div class="category-head--content">
                            <h4 class="category-head__h4">BITKIÇİLİK</h4>
                            <div class="category-head--text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="category-body__section">
                    <Container>
                        <Row>
                            <Col sm={12} md={3} className="pr--0">
                                <div class="category-left__col">
                                    <div class="category-left__dropdowns">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item>
                                                <Accordion.Header>Gübrələr</Accordion.Header>
                                                <Accordion.Body>
                                                    <p class="category-items__p">Kateqoriya</p>
                                                    <ul class="categort-items__ul">
                                                        <li class="category-filter__li">
                                                            <label class="category-container">
                                                                <input type="checkbox" />
                                                                <small>Gübrələr</small>
                                                                <input type="checkbox" checked="checked" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </li>
                                                        <li class="category-filter__li">
                                                            <label class="category-container">
                                                                <input type="checkbox" />
                                                                <small>Toxumlar</small>
                                                                <input type="checkbox" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </li>
                                                        <li class="category-filter__li">
                                                            <label class="category-container">
                                                                <input type="checkbox" />
                                                                <small>Pestisidlər</small>
                                                                <input type="checkbox" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item>
                                                <Accordion.Header>Mineral Standart Tarla Gübrələri</Accordion.Header>
                                                <Accordion.Body>
                                                    <p class="category-items__p">Kateqoriya</p>
                                                    <ul class="categort-items__ul">
                                                        <li class="category-filter__li">
                                                            <label class="category-container">
                                                                <input type="checkbox" />
                                                                <small>Mineral Standart Tarla Gübrələri</small>
                                                                <input type="checkbox" checked="checked" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </li>
                                                        <li class="category-filter__li">
                                                            <label class="category-container">
                                                                <input type="checkbox" />
                                                                <small>Damlama suvarma gübrələri</small>
                                                                <input type="checkbox" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </li>
                                                        <li class="category-filter__li">
                                                            <label class="category-container">
                                                                <input type="checkbox" />
                                                                <small>Mikro elementlər</small>
                                                                <input type="checkbox" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </li>
                                                        <li class="category-filter__li">
                                                            <label class="category-container">
                                                                <input type="checkbox" />
                                                                <small>Yarpaq Gübrələri</small>
                                                                <input type="checkbox" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={9} className="pl--0">
                                <div class="category-right__col">
                                    <div class="category-search--block position-relative">
                                        <form action="">
                                            <img src={searchCategory} alt="" />
                                            <input type="text" placeholder='Məhsul üzrə axtarış' name="search-categort" id="search-category" />
                                        </form>
                                    </div>
                                    <div class="category-product--items">
                                        <Row>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                            <Col sm={12} md={3}>
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
                                            </Col>
                                        </Row>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="see-all-products">Bütün məhsullara keçid
                                            <img src={arrowRight } alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default CategoryHerbalism;