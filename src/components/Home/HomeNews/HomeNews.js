import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import newsImg from '../../../assets/imgs/news1.png';
import './HomeNews.css';

function HomeNews(props) {
    return (
        <section className="home-news">
            <div class="container">
                <h4 class="home-news-title">XƏBƏRLƏR</h4>
                <p class="home-news__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Row className="all-news">
                    <Col sm={12} md={4}>
                        <div class="news-item">
                            <Link to={"/newsdetails"} >
                                <div class="news-img-cover">
                                    <img src={newsImg} alt="" />
                                </div>
                                <div class="news-info">
                                    <span class="news-date">06-05-2022</span>
                                    <div class="news-txt">
                                        Azərbaycanda ilk dəfə kənd təsərrüfatı bitkiləri üzərində yeni aqrokimyəvi maddənin sınaqları keçiriləcək
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div class="news-item">
                            <Link to={"/newsdetails"} >
                                <div class="news-img-cover">
                                    <img src={newsImg} alt="" />
                                </div>
                                <div class="news-info">
                                    <span class="news-date">06-05-2022</span>
                                    <div class="news-txt">
                                        Azərbaycanda ilk dəfə kənd təsərrüfatı bitkiləri üzərində yeni aqrokimyəvi maddənin sınaqları keçiriləcək
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div class="news-item">
                            <Link to={"/newsdetails"} >
                                <div class="news-img-cover">
                                    <img src={newsImg} alt="" />
                                </div>
                                <div class="news-info">
                                    <span class="news-date">06-05-2022</span>
                                    <div class="news-txt">
                                        Azərbaycanda ilk dəfə kənd təsərrüfatı bitkiləri üzərində yeni aqrokimyəvi maddənin sınaqları keçiriləcək
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <div class="text-center">
                    <a href="#" class="home-news_link">Bütün xəbərlər</a>
                </div>
            </div>
        </section>
    );
}

export default HomeNews;