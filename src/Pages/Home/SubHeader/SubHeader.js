import React from 'react';
import BannerCarousel from '../Carousel/Carousel';
import Banner from '../Carousel/Carousel';
import HeaderInfo from '../HeaderInfo/HeaderInfo';

const SubHeader = () => {
    return (
        <div className="bg-dark">
            <BannerCarousel></BannerCarousel>
            <HeaderInfo></HeaderInfo>
            <p className="text-light text-muted p-5 m-auto">
We're open for business 6 days a week. See the <a href="" className="fw-bold text-light"> opening hours</a> of our workshop</p>
        </div>
    );
};

export default SubHeader;