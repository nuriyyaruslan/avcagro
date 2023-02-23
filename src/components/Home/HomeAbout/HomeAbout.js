import React from 'react';
import './HomeAbout.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import aboutImg from '../../../assets/imgs/about-img.png';

function HomeAbout(props) {
    return (
        <section className="home-about__section">
            <div class="container">
                <Row>
                    <Col sm={12} md={5}>
                        <div class="home-about-text">
                            <h4>HAQQIMIZDA</h4>
                            <div class="home-about-content">
                                "AVC Agro" MMC 2002-ci ildə qurulmuşdur. Əvvəldən məqsədimiz, milli quşçuluq və heyvandarlıq sektorunun artan ehtiyaclarını ödəyə biləcək uzunmüddətli və keyfiyyətli bir layihə yaratmaq idi. spektr, əla xidmət, texniki dəstək və ən əsası dürüstlük və səriştəlikdir.
                            </div>
                            <Link to={"/about"} class="home-about-read">Daha ətraflı</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div class="home-about-right">
                            <div class="home-about__img">
                                <img src={aboutImg} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default HomeAbout;