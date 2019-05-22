import React, { Component } from 'react';

export default function( { 
    blogDate, 
    blogImgSrc,
    blogTitle,
    blogText,
    blogAvatarSrc,
    blogCite,
}) {
    return(
        <div className="BlogNews">
            <p className="Blog__date"> { blogDate } </p>
            <div className="Blog__img" style={ { backgroundImage: `URL(${ blogImgSrc })`} } />
            <a className="Blog__title" href="#"> { blogTitle } </a>
            <p className="Blog__text"> { blogText } </p>
            <div className="Comment__author">
                <img className="Comment__avatar" src={ blogAvatarSrc } alt="avatar Author" />
                <cite className="Comment__cite"> { blogCite } </cite>
            </div>
        </div>
    )
}