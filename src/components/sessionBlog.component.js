import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from './titleGroup.componet';
import BlogNews from './blogNews.component';
export default class sessionDestination extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { titleSup, title, titleSub } = this.props.children.contextTitle;
        const {  blogItems } = this.props.children;

        return(
        <Container fluid className="session__background02">
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
                        blogItems.map((item, index) =>
                            <Col sm={12} md={6} lg={4} key={ index }>
                                <BlogNews 
                                    blogDate={ item.blogDate }
                                    blogImgSrc={ item.blogImgSrc }
                                    blogTitle={ item.blogTitle }
                                    blogText={ item.blogText }
                                    blogAvatarSrc={ item.blogAvatarSrc }
                                    blogCite={ item.blogCite }
                                ></BlogNews>
                            </Col>
                        )
                    }
                </Col>
            </Container>
        </Container>
                
            )
    }
}