import React from 'react';
import { Container,Row,Col,Form,FloatingLabel } from 'react-bootstrap';
import Header from '../Header/Header';
import './Contact.css';
import ContactMap from './ContactMap/ContactMap';
import location from '../../assets/icons/location.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';

function Contact(props) {
    return (
        <div>
            <Header/>
            <div class="head-layer"></div>
            <section class="contact-section">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div class="contact-left">
                                <h4 class="contact-title"><span>ƏLAQƏ</span></h4>
                                <p className="contact-p">Lorem ipsum dolor sitn lorem ipsum dolor sit</p>
                                <form action="">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ad, soyad</Form.Label>
                                        <Form.Control type="text" placeholder="Ad, soyad" name="name-surname" id="name-surname"  />
                                        <Form.Text className="error-message">
                                            This is an error message
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email ünvanı</Form.Label>
                                        <Form.Control type="text" placeholder="Email ünvanı" name="email" id="email"  />
                                        <Form.Text className="error-message">
                                            This is an error message
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Müraciət mövzusu</Form.Label>
                                        <Form.Control type="text" placeholder="Müraciət mövzusu" name="topic" id="topic"  />
                                        <Form.Text className="error-message">
                                            This is an error message
                                        </Form.Text>
                                    </Form.Group>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Müraciət mətni"
                                        />
                                    </FloatingLabel>
                                    <button type="submit" className="contact-submit">Göndər</button>
                                </form>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <ContactMap/>
                            <ul className="list-unstyled contact-adress-ul">
                                <li>
                                    <img src={location} alt="" />
                                    <div class="contact-adress">
                                        <p class="contact-adress-p">Ünvan</p>
                                        <span className="contact-adress-span">Babək prospekti, Rich plaza</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={phone} alt="" />
                                    <div class="contact-adress">
                                        <p class="contact-adress-p">Telefon</p>
                                        <a href="tel:+994 55 543 65 47" className="contact-adress-span">+994 55 543 65 47</a>
                                    </div>
                                </li>
                                <li>
                                    <img src={email} alt="" />
                                    <div class="contact-adress">
                                        <p class="contact-adress-p">Email</p>
                                        <a href="mailto:avcagrobaku@gmail.com" className="contact-adress-span">
                                            avcagrobaku@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Contact;