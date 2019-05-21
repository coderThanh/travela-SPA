import React, { Component } from 'react';


export default class blogGalley extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleyTitle, galleyUrl } = this.props;

        return(
            <div 
                className="Galley__item" 
                style= {
                    { backgroundImage: `URL(${galleyUrl})`}
                }>
                <h5 className="Galley__title"> { galleyTitle } </h5>
            </div>
        )
    }
}