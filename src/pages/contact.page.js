import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import SessionContact from '../sessions/sessionContact.component';

import urlBackground from '../img/bg-contact.jpg';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerOverlay: {
                url: urlBackground,
                text: 'contact us' 
            },
        }
    }

    render() {
        const { headerOverlay, } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ headerOverlay.url } text={ headerOverlay.text }/>
            <main>
                <SessionContact></SessionContact>
            </main>
        </div>

        )
    }
}