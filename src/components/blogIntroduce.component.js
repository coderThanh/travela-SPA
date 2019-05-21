import React, { Component } from 'react';

import Home from '../pages/home.page';

export default class blogIntroduce extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        const { blogSrc, blogTittle, blogText } = this.props;
        return(
            <div className='weDoBlog__body'>
                <img className='blog_icon' src={ blogSrc } alt='icon'></img>
                <h3 className='blog__title'> { blogTittle } </h3>
                <p className='blog__text'> { blogText } </p>
                <a className='blog__link' href='#'>Read more</a>
            </div>
        )
    }

}