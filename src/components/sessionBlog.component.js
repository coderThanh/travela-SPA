import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from './titleGroup.componet';
import blogImgSrc01 from '../img/pexels-photo-27603.jpg';
import blogImgSrc02 from '../img/pexels-photo-104750.jpeg';
import blogImgSrc03 from '../img/beach-beverage-caribbean-cocktail-68672.jpeg';
import blogAvatarSrc from '../img/person1.jpg';
import BlogNews from './blogNews.component';

export default class sessionDestination extends Component {
    constructor(props) {
        super(props);

        this.state= {
            contextTitle: {
                titleSup: "thoughts & ideas",
                title: "our blog",
                titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
            },
            blogItems: [
                {
                    blogDate: "sep, 12th",
                    blogImgSrc: blogImgSrc01,
                    blogTitle: "Lorem Ipsum Dolor Sit",
                    blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                    blogAvatarSrc: blogAvatarSrc,
                    blogCite: "Mike Adam",
                },
                {
                    blogDate: "sep, 12th",
                    blogImgSrc: blogImgSrc02,
                    blogTitle: "Lorem Ipsum Dolor Sit",
                    blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                    blogAvatarSrc: blogAvatarSrc,
                    blogCite: "Mike Adam",
                },
                {
                    blogDate: "sep, 12th",
                    blogImgSrc: blogImgSrc03,
                    blogTitle: "Lorem Ipsum Dolor Sit",
                    blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                    blogAvatarSrc: blogAvatarSrc,
                    blogCite: "Mike Adam",
                },
            ],
        }

    }

    render() {
        const { titleSup, title, titleSub } = this.state.contextTitle;
        const {  blogItems } = this.state;

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