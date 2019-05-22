import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from './titleGroup.componet';
import BlogGalley from '../components/blogGalley.component';
import srcImg01 from '../img/place-01.jpeg';
import srcImg02 from '../img/place-02.jpeg';
import srcImg03 from '../img/place-03.jpeg';


export default class sessionDestination extends Component {
    constructor(props) {
        super(props);

        this.state= {
            isClick: false,
            contextTitle: {
                titleSup: "want some cool place",
                title: "place destination",
                titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
            },
            imgItems: [
                {
                    imgUrl: srcImg01,
                    imgTitle: "Lorem ispum"
                },
                {
                    imgUrl: srcImg02,
                    imgTitle: "Lorem ispum"
                },
                {
                    imgUrl: srcImg03,
                    imgTitle: "Lorem ispum"
                },
                {
                    imgUrl: srcImg01,
                    imgTitle: "Lorem ispum"
                },
                {
                    imgUrl: srcImg03,
                    imgTitle: "Lorem ispum"
                },

            ],
        }

    }

    render() {
        const { titleSup, title, titleSub } = this.state.contextTitle;
        const { isClick, imgItems } = this.state;

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
                                <BlogGalley galleyUrl={ item.imgUrl } galleyTitle={ item.imgTitle }></BlogGalley>
                            </Col>
                        )
                    }
                </Col>
            </Container>
        </Container>
                
            )
    }

}