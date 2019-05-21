import React , { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from './titleGroup.componet';
import BlogIntroduce from './blogIntroduce.component';
import srcAirPlane from '../img/airplane.svg';
import srcTrain from '../img/train-front.svg';
import srcBoat from '../img/sailboat.svg';

export default class sessionIntroduce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogItems : [
                {
                    blogSrc: srcAirPlane,
                    blogTitle: 'Lorem ipsum',
                    blogText: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                },
                {
                    blogSrc: srcTrain,
                    blogTitle: 'Lorem ipsum',
                    blogText: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                },
                {
                    blogSrc: srcBoat,
                    blogTitle: 'Lorem ipsum',
                    blogText: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                },
            ],
            contextTitle: {
                titleSup: "we're expert",
                title: "what we do",
                titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
            }
        }
    }

    render() {
        const { blogItems, contextTitle } = this.state;
        return(
            <Container fluid className='session__background'>
                <Container className='session__content'>
                <Col sm={ 9 } className='session__title'>
                    <TitleGroup 
                        titleSup= { contextTitle.titleSup }
                        title= { contextTitle.title } 
                        titleSub= { contextTitle.titleSub }>
                    </TitleGroup>
                </Col>
                <Col sm={ 12 } className='session__context'>
                    { 
                        blogItems.map((item, index) => 
                            <Col sm={ 12 } md={ 4 } key={ index }>
                                <BlogIntroduce 
                                    blogSrc= { item.blogSrc } 
                                    blogTittle= { item.blogTitle } 
                                    blogText= { item.blogText }>
                                </BlogIntroduce>
                            </Col>
                        )
                    }
                </Col>
            </Container>

            </Container>
        )
    }
}
