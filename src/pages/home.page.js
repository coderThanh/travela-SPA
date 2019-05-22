import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import SessionIntroduce from '../components/sessionIntroduce.component';
import SessionDestination from '../components/sessionDestination.component';
import SessionComment from '../components/sessionComment.component';
import SessionBlog from '../components/sessionBlog.component';
import SessionGetInfor from '../components/sessionGetInfor.component';
import urlBackground from '../img/bg-header-home.jpg';
import srcImg01 from '../img/place-01.jpeg';
import srcImg02 from '../img/place-02.jpeg';
import srcImg03 from '../img/place-03.jpeg';
import blogImgSrc01 from '../img/pexels-photo-27603.jpg';
import blogImgSrc02 from '../img/pexels-photo-104750.jpeg';
import blogImgSrc03 from '../img/beach-beverage-caribbean-cocktail-68672.jpeg';
import blogAvatarSrc from '../img/person1.jpg';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerOverlay: {
                url: urlBackground,
                text: 'never stop exploring' 
            },
            sessionDestination: {
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
            },
            sessionBlog: {
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
    }

    render() {
        const { headerOverlay, sessionDestination, sessionBlog } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ headerOverlay.url } text={ headerOverlay.text }/>
            <main>
                <SessionIntroduce></SessionIntroduce>       
                <SessionDestination>
                { sessionDestination }
                </SessionDestination>
                <SessionComment></SessionComment>
                <SessionBlog>
                    { sessionBlog }
                </SessionBlog>
                <SessionGetInfor></SessionGetInfor>
            </main>
        </div>

        )
    }
}