import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ContactInformation from '../components/contactInformation.component';
import ContactGetInformation from '../components/contactGetInformation.component';

export default class contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Container fluid className="session__background02">
            <Container className="session__content">
                <Col className="Contact__information" md={12} lg={4}>
                    <ContactInformation></ContactInformation>
                </Col>
                <Col className="Contact__getInformation" md={12} lg={8}>
                    <ContactGetInformation></ContactGetInformation>
                </Col>
            </Container>
        </Container>
        )
    }
}
