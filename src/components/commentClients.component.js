import React, { Component } from 'react';

import leftQuote from '../img/left-quote.svg';
import rightQuote from '../img/right-quotation-sign.svg';


export default function({ commentText, commentSrcAvatar, commentCite }) {
    return(
        <div className="Comment__Body">
            <blockquote className="Comment__text"> 
                <img src={ leftQuote } className="Icon-Quote"/>
                { commentText } 
                <img src={ rightQuote } className="Icon-Quote"/>
            </blockquote>
            <div className="Comment__author">
                <img className="Comment__avatar" src={ commentSrcAvatar } alt="avatar Author" />
                <cite className="Comment__cite"> { commentCite } </cite>
            </div>
        </div>
    )
}