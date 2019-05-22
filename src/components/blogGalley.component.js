import React, { Component } from 'react';


export default function({ galleyTitle, galleyUrl, galleyDiscount }){
        return(
            <div 
                className="Galley__item" 
                style= {
                    { backgroundImage: `URL(${galleyUrl})`}
                }>
                <h5 className="Galley__title"> { galleyTitle } </h5>
                { 
                    galleyDiscount && <div className="Icon__Discount">
                        <p className="Discount__text">Discount</p>
                        <p className="Discount__number">{ galleyDiscount }%</p>
                    </div>
                }
            </div>
        )

}