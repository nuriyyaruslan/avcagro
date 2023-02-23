import React from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import './ProductDetails.css';
import productImg from '../../../assets/imgs/product.png';
import SimilarProductsSlider from '../SimilarProductsSlider/SimilarProductsSlider';

function ProductDetails(props) {
    return (
        <div>
            <Header />
            <div class="head-layer"></div>
            <section class="product-details-section">
                <div class="product-details">
                    <h4 class="product-details-h4"><span>MƏHSUL</span></h4>
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <div class="product-detail-img d-flex justify-content-center align-items-center">
                                    <img src={productImg} alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div class="product-detail-info">
                                    <h5 class="product-single-h5">Ammonium Nitrat - Minudobreniya</h5>
                                    <span class="product-single-span">Gübrələr</span>
                                    <div class="product-single-table">
                                        <div class="product-single-td">
                                            <p>Kategoriya</p>
                                            <span>Bitkiçilik</span>
                                        </div>
                                        <div class="product-single-td">
                                            <p>İstehsalçı şirkət</p>
                                            <span>Minudobremiya</span>
                                        </div>
                                        <div class="product-single-td">
                                            <p>Alt Kategoriya</p>
                                            <span>Gübrələr</span>
                                        </div>
                                        <div class="product-single-td">
                                            <p>Tərkibi</p>
                                            <span>35% AN</span>
                                        </div>
                                        <div class="product-single-td">
                                            <p>İstehsalçı ölkə</p>
                                            <span>Rusiya Federasiyası</span>
                                        </div>
                                        <div class="product-single-td">
                                            <p>Qablaşma</p>
                                            <span>50kg</span>
                                        </div>
                                    </div>
                                    <Link to={"/contact"} className="go-contact-link">Bizimlə əlaqə</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Tabs
                        defaultActiveKey="aboutProduct"
                        id="uncontrolled-tab-example"
                        className="mb-3 products-details-tab"
                    >
                        <Tab eventKey="aboutProduct" title="Məhsul haqqında">
                            <div class="tab-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </Tab>
                        <Tab eventKey="usingProduct" title="Tətbiqi">
                            <div class="tab-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </Tab>
                        <Tab eventKey="advantagesProduct" title="Üstünlükləri">
                            <div class="tab-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </Tab>
                        <Tab eventKey="rulesProduct" title="Təhlükəsizlik qaydaları">
                            <div class="tab-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div class="similar-products">
                    <div class="container">
                        <h4 class="similar-pro-tt">Oxşar Məhsullar</h4>
                        <SimilarProductsSlider/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetails;