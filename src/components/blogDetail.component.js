import React, { Component } from 'react';


export default function( { 
    detailUrl, 
    detailTitle,
    detailDate,
    detailPrice,
    detailText,
}) {
    return(
        // <div className="BlogNews">
        //     <p className="Blog__date"> { blogDate } </p>
        //     <div className="Blog__img" style={ { backgroundImage: `URL(${ blogImgSrc })`} } />
        //     <a className="Blog__title" href="#"> { blogTitle } </a>
        //     <p className="Blog__text"> { blogText } </p>
        //     <div className="Comment__author">
        //         <img className="Comment__avatar" src={ blogAvatarSrc } alt="avatar Author" />
        //         <cite className="Comment__cite"> { blogCite } </cite>
        //     </div>
        // </div>
        <div className="Detail__body" >
            <div className="Blog__img" style={ { backgroundImage: `URL(${ detailUrl })`} } />
            <div className="Detail__datePrice ">
                <div className="Detail__day">
                    <i class=" Mr--half fas fa-calendar-alt fa-lg"></i>
                    <span className="">{ detailDate } days</span>
                </div>
                <div className="Detail__price">
                    <i class=" Mr--half fas fa-tag fa-lg"></i>
                    <span className="Text--sale">${ detailPrice }</span>
                </div>
            </div>
            <p className="Blog__title Text--muted" href="#"> { detailTitle } </p>
            <p className="Blog__text"> { detailText } </p>
            <a className='Link--primary' href='#'>Read more</a>
        </div>
    )
}