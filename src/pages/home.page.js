import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import SessionIntroduce from '../sessions/sessionIntroduce.component';
import SessionDestinationPlace from '../sessions/sessionDestinationPlace.component';
import SessionComment from '../sessions/sessionComment.component';
import SessionBlog from '../sessions/sessionBlog.component';
import SessionGetInfor from '../sessions/sessionGetInfor.component';

import urlBackground from '../img/bg-header-home.jpg';
import srcPlace01 from '../img/place-01.jpeg';
import srcPlace02 from '../img/place-02.jpeg';
import srcPlace03 from '../img/place-03.jpeg';
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
            sessionDestinationPlace: {
                contextTitle: {
                    titleSup: "want some cool place",
                    title: "place destination",
                    titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
                },
                placeItems: [
                    {
                        placeUrl: srcPlace01,
                        placeTitle: "Lorem ispum"
                    },
                    {
                        placeUrl: srcPlace02,
                        placeTitle: "Lorem ispum"
                    },
                    {
                        placeUrl: srcPlace03,
                        placeTitle: "Lorem ispum"
                    },
                    {
                        placeUrl: srcPlace01,
                        placeTitle: "Lorem ispum"
                    },
                    {
                        placeUrl: srcPlace03,
                        placeTitle: "Lorem ispum"
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
        const { headerOverlay, sessionDestinationPlace, sessionBlog } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ headerOverlay.url } text={ headerOverlay.text }/>
            <main>
                <SessionIntroduce></SessionIntroduce>       
                <SessionDestinationPlace>
                { sessionDestinationPlace }
                </SessionDestinationPlace>
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