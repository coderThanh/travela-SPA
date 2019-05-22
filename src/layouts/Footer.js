import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import iconSrcFaceBook from '../img/facebook.svg';
import iconSrcTwitter from '../img/twitter.svg';
import iconSrcInstargam from '../img/instagram.svg';
import iconSrcMail from '../img/envelope.svg';


export default function() {
    return(
        <footer className="session__background02">
            <Container className="session__content">
                <Row className="Footer__infomation">
                    <Col className="Footer__history" sm={12} md={6} >
                        <strong className="Footer__logo">travela<span className="Navbar__logo--red">.</span></strong>
                        <p className="Introduce__text">
                            Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
                        </p>
                        <a className="Introduce__link" href="#">Learn more</a>
                    </Col>
                    <Col className="Footer__link" sm={4} md={2}>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">about</a>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">help</a>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">contact</a>
                    </Col>
                    <Col className="Footer__link" sm={4} md={2}>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">shop</a>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">testimonials</a>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">handbook</a>
                    </Col>
                    <Col className="Footer__link" sm={4} md={2}>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">find us</a>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">teams</a>
                        <a className="Link--secondary Capitalize Dl--block Font--bold Mb--half" href="#">advertise</a>
                    </Col>
                </Row>
                <Row className="Footer__contact">
                    <p className="Introduce__text Text--smaill Text--center">©2016 Coder-Thanh. All Rights Reserved. </p>
                    <p className="Introduce__text Text--smaill Text--center">
                        Designed by 
                        <a className="Introduce__link" href="#"> Coder-Thanh</a> 
                    </p>
                    <div className="Footer__iconGroup Text--center">
                        <a className="Introduce__link" href="#"> 
                            <img className="Footer__icon" src={ iconSrcTwitter } alt="Twitter"/>
                        </a>
                        <a className="Introduce__link" href="#"> 
                            <img className="Footer__icon" src={ iconSrcFaceBook } alt="FaceBook"/>
                        </a>
                        <a className="Introduce__link" href="#"> 
                            <img className="Footer__icon" src={ iconSrcInstargam } alt="Instargam"/>
                        </a>
                        <a className="Introduce__link" href="#"> 
                            <img className="Footer__icon" src={ iconSrcMail } alt="Mail"/>
                        </a>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}