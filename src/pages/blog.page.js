import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import SessionBlog from '../sessions/sessionBlog.component';
import Pagination from '../components/pagination.component';

import urlBackground from '../img/pexels-photo-89866.jpeg';
import blogImgSrc01 from '../img/pexels-photo-27603.jpg';
import blogImgSrc02 from '../img/pexels-photo-104750.jpeg';
import blogImgSrc03 from '../img/beach-beverage-caribbean-cocktail-68672.jpeg';
import blogImgSrc04 from '../img/pexels-photo-204870.jpeg';
import blogImgSrc05 from '../img/pexels-photo-189833.jpeg';
import blogImgSrc06 from '../img/photo-1465503247912-c5713ea781e6.jpg';
import blogImgSrc07 from '../img/place-01.jpeg';
import blogImgSrc08 from '../img/place-02.jpeg';
import blogImgSrc09 from '../img/place-03.jpeg';
import blogAvatarSrc from '../img/person1.jpg';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerOverlay: {
                url: urlBackground,
                text: 'our blog' 
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
                    {
                        blogDate: "sep, 12th",
                        blogImgSrc: blogImgSrc04,
                        blogTitle: "Lorem Ipsum Dolor Sit",
                        blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                        blogAvatarSrc: blogAvatarSrc,
                        blogCite: "Mike Adam",
                    },
                    {
                        blogDate: "sep, 12th",
                        blogImgSrc: blogImgSrc05,
                        blogTitle: "Lorem Ipsum Dolor Sit",
                        blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                        blogAvatarSrc: blogAvatarSrc,
                        blogCite: "Mike Adam",
                    },
                    {
                        blogDate: "sep, 12th",
                        blogImgSrc: blogImgSrc06,
                        blogTitle: "Lorem Ipsum Dolor Sit",
                        blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                        blogAvatarSrc: blogAvatarSrc,
                        blogCite: "Mike Adam",
                    },
                    {
                        blogDate: "sep, 12th",
                        blogImgSrc: blogImgSrc07,
                        blogTitle: "Lorem Ipsum Dolor Sit",
                        blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                        blogAvatarSrc: blogAvatarSrc,
                        blogCite: "Mike Adam",
                    },
                    {
                        blogDate: "sep, 12th",
                        blogImgSrc: blogImgSrc08,
                        blogTitle: "Lorem Ipsum Dolor Sit",
                        blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                        blogAvatarSrc: blogAvatarSrc,
                        blogCite: "Mike Adam",
                    },
                    {
                        blogDate: "sep, 12th",
                        blogImgSrc: blogImgSrc09,
                        blogTitle: "Lorem Ipsum Dolor Sit",
                        blogText: "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
                        blogAvatarSrc: blogAvatarSrc,
                        blogCite: "Mike Adam",
                    },
                ],
            },
        }
    }

    render() {
        const { headerOverlay, sessionDestination, sessionBlog } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ headerOverlay.url } text={ headerOverlay.text }/>
            <main>
                <SessionBlog>
                    { sessionBlog }
                </SessionBlog>
                <Pagination></Pagination>
            </main>
        </div>

        )
    }
}