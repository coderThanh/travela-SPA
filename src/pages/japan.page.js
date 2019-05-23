import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import SessionDestinationDetailPlace from '../sessions/sessionDestinationDetail.component';

import urlBackground from '../img/bg-header-japan.jpg';
import srcPlace02 from '../img/photo-1460751164792-4bafe094f306.jpg';
import srcPlace03 from '../img/photo-1438893254896-34a5db3e4a8f.jpg';
import srcPlace04 from '../img/people-eiffel-tower-france-landmark.jpg';
import srcPlace05 from '../img/city-lights-night-water.jpg';
import srcPlace06 from '../img/france-landmark-lights-night.jpg';
import srcPlace07 from '../img/pexels-photo-27954.jpg';
import srcPlace08 from '../img/pexels-photo-38050-medium.jpeg';
import srcPlace09 from '../img/pexels-photo-89866.jpeg';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerOverlay: {
                url: urlBackground,
                text: 'japan', 
            },
            sessionDestinationDetailPlace: {
                contextTitle: {
                    titleSup: "want some cool place",
                    title: "place destination",
                    titleSub: "Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.",
                },
                blogDetailItems : [
                    {
                        detailUrl : srcPlace09,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '3',
                        detailPrice: '2,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                    {
                        detailUrl : srcPlace08,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '5',
                        detailPrice: '6,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                    {
                        detailUrl : srcPlace02,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '2',
                        detailPrice: '7,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                    {
                        detailUrl : srcPlace03,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '1',
                        detailPrice: '4,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                    {
                        detailUrl : srcPlace04,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '2',
                        detailPrice: '7,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                    {
                        detailUrl : srcPlace05,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '1',
                        detailPrice: '4,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                    {
                        detailUrl : srcPlace06,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '2',
                        detailPrice: '7,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                    {
                        detailUrl : srcPlace07,
                        detailTitle: 'borobudur indonesua',
                        detailDate: '1',
                        detailPrice: '4,000',
                        detailText: 'Dolor sit amet consectetur adipiscing iscing elit Dolor sit amet consec elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit.',
                    },
                ],
            },
        }
    }

    render() {
        const { headerOverlay, sessionDestinationDetailPlace } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ headerOverlay.url } text={ headerOverlay.text }/>
            <main>
                <SessionDestinationDetailPlace>
                    { sessionDestinationDetailPlace }
                </SessionDestinationDetailPlace>
            </main>
        </div>

        )
    }
}