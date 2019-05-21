import React, { Component } from 'react';

export default class HeaderOverlay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div className="Header__overlay" style={{backgroundImage: `URL(${this.props.url})`}}>
            <h2 className="overlay__text">
                {this.props.text}
            </h2>
        </div>
        )
    }
}