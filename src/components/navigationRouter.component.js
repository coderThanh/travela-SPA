import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classNames from 'classnames';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
} from 'reactstrap';

import Home from '../pages/home.page';
import Discount from '../pages/discount.page';
import Blog from '../pages/blog.page';
function Japan() {
    return <h2>Japan</h2>;
}
  
function Europe() {
    return <h2>Europe</h2>;
}

function Asian() {
    return <h2>Discount</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

class NavigationRouter extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);

        this.state = {
          isOpen: false,
          dropdownOpen: false,
        };
    }

    toggleNavbar() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
    }

    toggleDropDown() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return(
            <Router>
                <div className="">
                    <Navbar  className="Navbar" expand="md">
                        <Link className="Navbar__logo" to="/">
                            TRAVELA<span className="Navbar__logo--red">.</span>
                        </Link>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse className="Navbar__main" isOpen={this.state.isOpen} navbar>
                            <Nav className="Navbar__ul ml-auto" navbar>
                                <li className="Navbar__item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="Navbar__item Dropdown__link  position--relative"
                                    onClick={this.toggleDropDown}
                                    nav inNavbar>
                                    <Link >
                                        Destination
                                    </Link>
                                    <ul className={classNames(
                                        'Dropdown__menu',
                                        {'display--block' : this.state.dropdownOpen})}>
                                        <Link className="Dropdown__item" to="/asian/">Asian</Link>
                                        <Link className="Dropdown__item" to="/japan/">Japan</Link>
                                        <Link className="Dropdown__item" to="/europe">Europe</Link>
                                    </ul>
                                </li>
                                <li className="Navbar__item">
                                    <Link to="/discount/">Discount</Link>
                                </li>
                                <li className="Navbar__item">
                                    <Link to="/blog/">Blog</Link>
                                </li>
                                <li className="Navbar__item">
                                    <Link to="/contact/">Contact</Link>
                                </li>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <Route path="/" exact component={Home} />
                    <Route path="/asian/" component={Asian} />
                    <Route path="/japan/" component={Japan} />
                    <Route path="/europe" exact component={Europe} />
                    <Route path="/discount/" component={Discount} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/contact/" component={Contact} />
                </div>
            </Router>
        );
    }
}

export default NavigationRouter;