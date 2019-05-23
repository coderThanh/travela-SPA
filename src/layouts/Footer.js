import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import iconSrcFaceBook from '../img/facebook.svg';
import iconSrcTwitter from '../img/twitter.svg';
import iconSrcInstargam from '../img/instagram.svg';
import iconSrcMail from '../img/envelope.svg';




export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <footer className="session__background">
                <Container className="session__content">
                    <Row className="Footer__infomation">
                        <Col className="Footer__history" sm={12} md={6} >
                            <strong className="Footer__logo">travela<span className="Navbar__logo--red">.</span></strong>
                            <p className="Introduce__text">
                                Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
                            </p>
                            <a className="Link--primary" href="#">Learn more</a>
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
                        <p className="Introduce__text Text--small Text--center">©2016 Coder-Thanh. All Rights Reserved. </p>
                        <p className="Introduce__text Text--small Text--center">
                            Designed by 
                            <a className="Link--primary" href="#"> Coder-Thanh</a> 
                        </p>
                        <div className="Footer__iconGroup Text--center">
                            <a className="Link--primary" href="#"> 
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                            <a className="Link--primary" href="#"> 
                                <i class="fab fa-facebook-square fa-lg"></i>
                            </a>
                            <a className="Link--primary" href="#"> 
                                <i class="fab fa-instagram fa-lg"></i>
                            </a>
                            <a className="Link--primary" href="#"> 
                                <i class="fas fa-envelope fa-lg"></i>
                            </a>
                        </div>
                    </Row>
                    <a className="Footer__button Btn Btn--dark " id="arrowUp" href="#">
                        <i class="fas fa-arrow-up Text--while fa-2x"></i>
                    </a>
                </Container>
            </footer>
        )
    }

}