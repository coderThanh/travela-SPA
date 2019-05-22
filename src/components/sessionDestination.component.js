import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from './titleGroup.componet';
import BlogGalley from '../components/blogGalley.component';


export default class sessionDestination extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { titleSup, title, titleSub } = this.props.children.contextTitle;
        const { imgItems } = this.props.children;

        return(
        <Container fluid>
            <Container className="session__content">
                <Col sm={ 9 } className='session__title'>
                    <TitleGroup 
                        titleSup= { titleSup }
                        title= { title } 
                        titleSub= { titleSub }>
                    </TitleGroup>
                </Col>
                <Col sm={ 12 } className='session__context'>
                    {
                        imgItems.map((item, index) =>
                            <Col sm={12} md={6} lg={4} key={ index }>
                                <BlogGalley 
                                    galleyUrl={ item.imgUrl } 
                                    galleyTitle={ item.imgTitle } 
                                    galleyDiscount={ item.imgDiscount }>
                                </BlogGalley>
                            </Col>
                        )
                    }
                </Col>
            </Container>
        </Container>
                
            )
    }

}