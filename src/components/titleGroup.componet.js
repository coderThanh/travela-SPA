import React, { Component } from 'react';

export default class titleGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { titleSup, title, titleSub } = this.props

        return(<div className="titleGroup">
        <h5 className="title__sup">{ titleSup }</h5>
        <h2 className="title">{ title }</h2>
        <h4 className="title__sub">{ titleSub }</h4>
    </div>
    )
    }

}