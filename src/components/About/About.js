import React from 'react';
import Header from '../Header/Header';
import './About.css';
import aboutImg from '../../../src/assets/imgs/about-img.png';
import aboutCover from '../../../src/assets/imgs/about-bg.png';
import { Container,Row,Col } from 'react-bootstrap';

function About(props) {
    return (
        <div>
            <Header/>
            <div class="head-layer"></div>
            <section class="about-section">
                <div class="about-item position-relative">
                    <img src={aboutCover} alt="" className="about-bg-img" />
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <div class="about-data">
                                    <h4><span>HAQQIMIZDA</span></h4>
                                    <div class="about-txt">
                                        Bu gün qürur duyuruq ki, demək olar ki, bütün planlarımız gerçəkləşir. Biz nəinki Azərbaycanda etibarlı tərəfdaş olduq, həm də dünyaca məşhur şirkətlərin dostları olduq, ölkəmizdə bir çox tərəfdaş və dostlar qazandıq. Böyüdük və təkcə aparıcı ticarət şirkəti deyil, həm də ölkəmizdə yem konsentratları və yemləri istehsal edən ilk şirkət olduq. Əşyalarımız artıq 30 nəfərdən çoxdur.
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div class="about-img-cover">
                                    <img src={aboutImg} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="about-item position-relative">
                    <img src={aboutCover} alt="" className="about-bg-img" />
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <div class="about-data">
                                    <h4><span>Şirkətlər Qrupumuz</span></h4>
                                    <div class="about-txt">           
                                        "DSM", "Phosprom" (Rusiya), "Genera" (Xorvatiya), "Biomin" (Avstriya), "Alltech" (ABŞ), "Vitafor NV" (Belçika), "Kepro BV" (Hollandiya), "Montajat" (Səudiyyə Ərəbistanı), "Eurochem" (Rusiya), "Hanvet" (Vyetnam), "DVA Agro" (Almaniya), "Alba Milagro" (İtaliya), "VGDZ" ( Rusiya), “BAF” (Türkiyə) və s.
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div class="about-img-cover">
                                    <img src={aboutImg} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default About;