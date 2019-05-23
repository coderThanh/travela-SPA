import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from '../components/titleGroup.componet';
import BlogDetail from '../components/blogDetail.component';


export default class sessionDestinationPlace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { titleSup, title, titleSub } = this.props.children.contextTitle;
        const { blogDetailItems } = this.props.children;

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
                        blogDetailItems.map((item, index) =>
                            <Col sm={12} md={6} lg={4} key={ index }>
                                <BlogDetail 
                                    detailUrl={ item.detailUrl } 
                                    detailTitle={ item.detailTitle } 
                                    detailDate={ item.detailDate }
                                    detailPrice={ item.detailPrice }
                                    detailText={ item.detailText }>
                                </BlogDetail>
                            </Col>
                        )
                    }
                </Col>
            </Container>
        </Container>
                
            )
    }

}