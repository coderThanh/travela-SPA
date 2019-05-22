import React, { Component } from 'react';

import HeaderOverlay from '../components/headerOverlay.component';
import urlBackground from '../img/bg-header-home.jpg';
import SessionIntroduce from '../components/sessionIntroduce.component';
import SessionDestination from '../components/sessionDestination.component';
import SessionComment from '../components/sessionComment.component';
import SessionBlog from '../components/sessionBlog.component';
import SessionGetInfor from '../components/sessionGetInfor.component';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: urlBackground,
            text: 'never stop exploring' 
        }
    }

    render() {
        const { url, text } = this.state;
        return(<div className="Home">
            <HeaderOverlay url={ url } text={ text }/>
            <main>
                <SessionIntroduce></SessionIntroduce>
                <SessionDestination></SessionDestination>
                <SessionComment></SessionComment>
                <SessionBlog></SessionBlog>
                <SessionGetInfor></SessionGetInfor>
            </main>
        </div>

        )
    }
}