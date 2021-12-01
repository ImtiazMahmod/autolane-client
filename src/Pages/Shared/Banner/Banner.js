import React from 'react';
import './Banner.css'

const Banner = ({children}) => {
console.log(children)
    return (
        <div className="bannerStyle">
            {/* <img width="100%" src="https://i.ibb.co/StGxYvD/page-header.jpg" alt="" /> */}
            <div className="bannerContainer">
               <div className="bannersubtitle mb-0">{children[1]}</div>
               <div className="bannertitle">{children[0]}</div>
            </div>
        </div>
    );
};

export default Banner;