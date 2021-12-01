import React from 'react';
import HeaderInfo from '../Home/HeaderInfo/HeaderInfo';
import Banner from '../Shared/Banner/Banner';

const Contact = () => {
    return (
        <div className="bg-dark">
            <Banner><h1>Contact Us</h1><p>Send us a Message
            </p> </Banner>
            
            <HeaderInfo></HeaderInfo>
        </div>
    );
};

export default Contact;