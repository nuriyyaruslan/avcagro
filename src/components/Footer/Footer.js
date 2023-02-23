import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';
import vitanur from '../../assets/icons/vitanur.svg';
import logo from '../../../src/assets/icons/logo.svg';

function Footer(props) {
    return (
        <footer className="main-footer">
            <Container>
                <div className="footer-top">
                    <Row>
                        <Col sm={12} md={3}>
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </Col>
                        <Col sm={12} md={2}>
                            <div class="footer-item">
                                <p className="footer-sub-tt">Şirkət</p>
                                <ul className="list-unstyled">
                                    <li className="nav-item">
                                        <Link to={"/about"} className="nav-link">Haqqımızda</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/category"} className="nav-link">Kataloq</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/news"} className="nav-link">Xəbərlər</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contact"} className="nav-link">Əlaqə</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={2}>
                            <div class="footer-item">
                                <p className="footer-sub-tt">Məhsullar</p>
                                <ul className="list-unstyled">
                                    <li className="nav-item">
                                        <Link to={"/products"} className="nav-link">Bitkiçilik</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/products"} className="nav-link">Baytarlıq</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div class="footer-item">
                                <p className="footer-sub-tt">Əlaqə</p>
                                <ul className="list-unstyled">
                                    <li className="nav-item">
                                        <a href="tel:+994 55 543 65 47" className="footer-links">+994 55 543 65 47</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="mailto:avcagrobaku@gmail.com" className="footer-links">avcagrobaku@gmail.com</a>
                                    </li>
                                    <li>
                                        <p className="footer-adress">Babek prospekti, Rich Plaza</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={2}>
                            <p class="footer-sub-tt">Bizi izləyin</p>
                            <ul class="footer-social-networks list-unstyled">
                                <li>
                                    <a href="#" target="_blank">
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.1346 0H3.73457C2.99196 0 2.27977 0.294999 1.75467 0.820101C1.22957 1.3452 0.93457 2.05739 0.93457 2.8V19.2C0.93457 19.9426 1.22957 20.6548 1.75467 21.1799C2.27977 21.705 2.99196 22 3.73457 22H11.7681V12.8462H9.93732V9.1847H11.7529V7.53C11.7529 6.0324 12.4663 3.6927 15.6059 3.6927L18.4341 3.70405V6.8411H16.3802C16.0463 6.8411 15.5711 7.0074 15.5711 7.7207V9.18495H18.4808L18.1468 12.8464H15.4296V22H20.1346C20.5023 22 20.8664 21.9276 21.2061 21.7869C21.5458 21.6461 21.8545 21.4399 22.1145 21.1799C22.3745 20.9199 22.5807 20.6112 22.7214 20.2715C22.8621 19.9318 22.9346 19.5677 22.9346 19.2V2.8C22.9346 2.4323 22.8621 2.0682 22.7214 1.72849C22.5807 1.38877 22.3745 1.08011 22.1145 0.820101C21.8545 0.560097 21.5458 0.35385 21.2061 0.213137C20.8664 0.0724241 20.5023 0 20.1346 0Z" fill="black"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_56_381)">
                                            <path d="M16.1083 3.89844H5.8263C4.7633 3.89844 3.89844 4.7633 3.89844 5.8263V16.1083C3.89844 17.1713 4.7633 18.0361 5.8263 18.0361H16.1083C17.1713 18.0361 18.0361 17.1713 18.0361 16.1083V5.8263C18.0361 4.7633 17.1713 3.89844 16.1083 3.89844ZM10.9673 15.4656C8.48716 15.4656 6.46893 13.4474 6.46893 10.9673C6.46893 8.48716 8.48716 6.46893 10.9673 6.46893C13.4474 6.46893 15.4656 8.48716 15.4656 10.9673C15.4656 13.4474 13.4474 15.4656 10.9673 15.4656ZM15.4656 7.75417C14.7571 7.75417 14.1804 7.17748 14.1804 6.46893C14.1804 5.76037 14.7571 5.18368 15.4656 5.18368C16.1742 5.18368 16.7509 5.76037 16.7509 6.46893C16.7509 7.17748 16.1742 7.75417 15.4656 7.75417Z" fill="black"/>
                                            <path d="M10.967 7.75391C9.19546 7.75391 7.75391 9.19546 7.75391 10.967C7.75391 12.7386 9.19546 14.1801 10.967 14.1801C12.7386 14.1801 14.1801 12.7386 14.1801 10.967C14.1801 9.19546 12.7386 7.75391 10.967 7.75391Z" fill="black"/>
                                            <path d="M18.6789 0H3.25595C1.48439 0 0 1.48439 0 3.25595V18.6789C0 20.4504 1.48439 21.9348 3.25595 21.9348H18.6789C20.4504 21.9348 21.9348 20.4504 21.9348 18.6789V3.25595C21.9348 1.48439 20.4504 0 18.6789 0ZM19.3215 16.1084C19.3215 17.88 17.88 19.3215 16.1084 19.3215H5.82644C4.05488 19.3215 2.61333 17.88 2.61333 16.1084V5.82644C2.61333 4.05488 4.05488 2.61333 5.82644 2.61333H16.1084C17.88 2.61333 19.3215 4.05488 19.3215 5.82644V16.1084Z" fill="black"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_56_381">
                                            <rect width="21.9348" height="21.9348" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <div class="footer-bottom position-relative">
                    <p class="copyright text-center">Copyright © 2023 AVC Agro</p>
                    <a href="#" target="_blank" className="footer-logo">
                        <img src={vitanur} alt="vitanur" />
                    </a>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;