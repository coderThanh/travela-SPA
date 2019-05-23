import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import SessionDestinationPlace from '../sessions/sessionDestinationPlace.component';
import urlBackground from '../img/discount-photo.jpg';
import srcPlace01 from '../img/bg-header-asia.jpeg';
import srcPlace02 from '../img/photo-1460751164792-4bafe094f306.jpg';
import srcPlace03 from '../img/photo-1438893254896-34a5db3e4a8f.jpg';
import srcPlace04 from '../img/people-eiffel-tower-france-landmark.jpg';
import srcPlace05 from '../img/city-lights-night-water.jpg';
import srcPlace06 from '../img/france-landmark-lights-night.jpg';
import srcPlace07 from '../img/pexels-photo-27954.jpg';
import srcPlace08 from '../img/pexels-photo-38050-medium.jpeg';
import srcPlace09 from '../img/pexels-photo-89866.jpeg';
import srcPlace10 from '../img/pexels-photo-104750.jpeg';
import srcPlace11 from '../img/bg-header-japan.jpg';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerOverlay: {
                url: urlBackground,
                text: 'discount offer' 
            },
            sessionDestinationPlace: {
                contextTitle: {
                    titleSup: "our new discount offer",
                    title: "let's check it!",
                    titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
                },
                placeItems: [
                    {
                        placeUrl: srcPlace01,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "40",
                    },
                    {
                        placeUrl: srcPlace02,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "15",
                    },
                    {
                        placeUrl: srcPlace03,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "50",
                    },
                    {
                        placeUrl: srcPlace04,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "30",
                    },
                    {
                        placeUrl: srcPlace05,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "10",
                    },
                    {
                        placeUrl: srcPlace06,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "50",
                    },
                    {
                        placeUrl: srcPlace07,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "30",
                    },
                    {
                        placeUrl: srcPlace08,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "10",
                    },
                    {
                        placeUrl: srcPlace09,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "50",
                    },
                    {
                        placeUrl: srcPlace10,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "30",
                    },
                    {
                        placeUrl: srcPlace11,
                        placeTitle: "Lorem ispum",
                        placeDiscount: "10",
                    },
    
                ],
             },
        }
    }

    render() {
        const { url, text } = this.state.headerOverlay;
        const { sessionDestinationPlace } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ url } text={ text }/>
            <main>
                <SessionDestinationPlace>
                    { sessionDestinationPlace }
                </SessionDestinationPlace>
            </main>
        </div>

        )
    }
}