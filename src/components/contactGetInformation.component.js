import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h4 className="Contact__title">
                    get in touch
                </h4>
                <form action="#" className="Contact__body Contact__inputGroup">
                    <Col sm={6} className="Input__group">
                        <label className="Input__label" for="firstName">First name</label>
                        <input className="Input__text" id="firstName" type="text" placeholder="Your firstname"/>
                    </Col>
                    <Col sm={6} className="Input__group">
                        <label className="Input__label" for="lastname">Last name</label>
                        <input className="Input__text" id="lastname" type="text" placeholder="Your lastname"/>
                    </Col>
                    <Col sm={12} className="Input__group">
                        <label className="Input__label" for="email">email</label>
                        <input className="Input__text" id="email" type="email" placeholder="Your email address"/>
                    </Col>
                    <Col sm={12} className="Input__group">
                        <label className="Input__label" for="subject">subject</label>
                        <input className="Input__text" id="subject" type="text" placeholder="Your subject of this message"/>
                    </Col>
                    <Col sm={12} className="Input__group">
                        <label className="Input__label" for="message">message</label>
                        <textarea className="Input__text" id="message" type="text" placeholder="Say something about us"  rows={10}/>
                    </Col>
                    <Col sm={12}>
                        <button  className="Btn Btn--primary Font--bold" type="submit" >send message</button>
                    </Col>
                </form>

            </div>
            )
    }
}