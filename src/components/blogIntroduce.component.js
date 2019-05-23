import React, { Component } from 'react';

import Home from '../pages/home.page';

export default class blogIntroduce extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        const { blogSrc, blogTittle, blogText } = this.props;
        return(
            <div className='Introduce__body'>
                <img className='Introduce__icon' src={ blogSrc } alt='icon'></img>
                <h3 className='Introduce__title'> { blogTittle } </h3>
                <p className='Introduce__text'> { blogText } </p>
                <a className='Link--primary' href='#'>Read more</a>
            </div>
        )
    }

}