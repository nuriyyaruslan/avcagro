import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './News.css';
import NewsDetails from './NewsDetails/NewsDetails';
import Header from "../Header/Header";
import {
    retrieveNews,
} from '../../slices/newsSlice';
import { Container,Row,Col } from "react-bootstrap";
import newsImg from '../../../src/assets/imgs/news1.png';

function News(props) {

    const news = useSelector(state => state.news);
    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(retrieveNews());
    }, [dispatch])

    useEffect(() => {
        initFetch()
    }, [initFetch])

    console.log(news.news);
    
    return (
        <div>
            <Header/>
            <div class="head-layer"></div>
            <section class="news-section">
                <Container>
                    <h1 className="head-h1 text-center">
                        <span>XƏBƏRLƏR</span>
                    </h1>
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
                </Container>
            </section>
        </div>
    );
}

export default News;