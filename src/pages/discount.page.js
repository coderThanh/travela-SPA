import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import SessionDestination from '../components/sessionDestination.component';
import urlBackground from '../img/discount-photo.jpg';
import srcImg01 from '../img/bg-header-asia.jpeg';
import srcImg02 from '../img/photo-1460751164792-4bafe094f306.jpg';
import srcImg03 from '../img/photo-1438893254896-34a5db3e4a8f.jpg';
import srcImg04 from '../img/people-eiffel-tower-france-landmark.jpg';
import srcImg05 from '../img/city-lights-night-water.jpg';
import srcImg06 from '../img/france-landmark-lights-night.jpg';
import srcImg07 from '../img/pexels-photo-27954.jpg';
import srcImg08 from '../img/pexels-photo-38050-medium.jpeg';
import srcImg09 from '../img/pexels-photo-89866.jpeg';
import srcImg10 from '../img/pexels-photo-104750.jpeg';
import srcImg11 from '../img/bg-header-japan.jpg';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerOverlay: {
                url: urlBackground,
                text: 'discount offer' 
            },
            sessionDestination: {
                contextTitle: {
                    titleSup: "our new discount offer",
                    title: "let's check it!",
                    titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
                },
                imgItems: [
                    {
                        imgUrl: srcImg01,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "40",
                    },
                    {
                        imgUrl: srcImg02,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "15",
                    },
                    {
                        imgUrl: srcImg03,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "50",
                    },
                    {
                        imgUrl: srcImg04,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "30",
                    },
                    {
                        imgUrl: srcImg05,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "10",
                    },
                    {
                        imgUrl: srcImg06,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "50",
                    },
                    {
                        imgUrl: srcImg07,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "30",
                    },
                    {
                        imgUrl: srcImg08,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "10",
                    },
                    {
                        imgUrl: srcImg09,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "50",
                    },
                    {
                        imgUrl: srcImg10,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "30",
                    },
                    {
                        imgUrl: srcImg11,
                        imgTitle: "Lorem ispum",
                        imgDiscount: "10",
                    },
    
                ],
             },
        }
    }

    render() {
        const { url, text } = this.state.headerOverlay;
        const { sessionDestination } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ url } text={ text }/>
            <main>
                <SessionDestination>
                    { sessionDestination }
                </SessionDestination>
            </main>
        </div>

        )
    }
}