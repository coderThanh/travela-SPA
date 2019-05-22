import React , { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TitleGroup from './titleGroup.componet';
import CommentClient from './commentClients.component';
import urlPerson from '../img/person1.jpg';


export default class sessionIntroduce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentContext : [
                {
                    commentSrcAvatar: urlPerson,
                    commentCite: 'mike adam',
                    commentText: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                },
                {
                    commentSrcAvatar: urlPerson,
                    commentCite: 'eric miller',
                    commentText: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing Dolor sit amet consectetur adipiscing Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                },
                {
                    commentSrcAvatar: urlPerson,
                    commentCite: 'mike adam',
                    commentText: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet Dolor sit amet consectetur adipiscing Dolor sit amet consectetur adipiscing Dolor sit amet consectetur adipiscing consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                },
                {
                    commentSrcAvatar: urlPerson,
                    commentCite: 'eric miller',
                    commentText: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                },
            ],
            contextTitle: {
                titleSup: "you deserved happines",
                title: "happy clients",
                titleSub: "",
            }
        }
    }

    render() {
        const {  contextTitle, commentContext } = this.state;
        const { commentSrcAvatar, commentCite, commentText } = this.state.commentContext;
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
                        commentContext.map((item, index) => 
                            <Col sm={ 12 } md={ 6 } key={ index }>
                                <CommentClient 
                                    commentSrcAvatar= { item.commentSrcAvatar } 
                                    commentCite= { item.commentCite } 
                                    commentText= { item.commentText }>
                                </CommentClient>
                            </Col>
                        )
                    }
                </Col>
            </Container>

            </Container>
        )
    }
}
