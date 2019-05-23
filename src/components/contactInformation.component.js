import React, { Component } from 'react';

export default class contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h4 className="Contact__title">
                    Contact information
                </h4>
                <div className="Contact__body ">
                    <p className="Contact__item Capitalize Text--muted">
                        <i class="Contact__icon Link--primary fas fa-map-marker-alt "></i>
                        <span className=" Text--small">198 west 21th street, suite 721 new york ny 10016</span>
                    </p>
                    <p className="Contact__item Link--primary">
                        <i class="Contact__icon  fas fa-phone"></i>
                        <span className=" Text--small">+ 123 456 789</span>
                    </p>
                    <p className="Contact__item Link--primary ">
                        <i class="Contact__icon fas fa-envelope"></i>
                        <span className=" Text--small">info@yoursite.com</span>
                    </p>
                    <p className="Contact__item Link--primary ">
                        <i class="Contact__icon fas fa-globe-americas"></i>
                        <span className=" Text--small">coder-thanh.com</span>
                    </p>
                </div>
            </div>
        )
    }
}