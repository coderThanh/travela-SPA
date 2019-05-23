import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from '../components/titleGroup.componet';

export default class sessionDestination extends Component {
    constructor(props) {
        super(props);

        this.state= {
            contextTitle: {
                titleSup: "let's go with us",
                title: "start your journey",
                titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
            },
            btnItems: {
                btnText: 'get in touch',
            },
        }

    }

    render() {
        const { titleSup, title, titleSub } = this.state.contextTitle;
        const {  btnItems } = this.state;

        return(
        <Container fluid className="session__background03">
            <Container className="session__content">
                <Col sm={ 9 } className='session__title'>
                    <TitleGroup 
                        titleSup= { titleSup }
                        title= { title }
                        titleWhile={true} 
                        titleSub= { titleSub }>
                    </TitleGroup>
                </Col>
                <Col sm={ 12 } className='session__context'>
                    {
                        <div className="Content--center">
                            <a className="Link Btn Btn--red Text--while Uppercase Font--bold" href="#"> { btnItems.btnText } </a>
                        </div>
                    }
                </Col>
            </Container>
        </Container>
                
            )
    }

}