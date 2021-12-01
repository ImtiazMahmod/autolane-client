import React from 'react';
import Mechanics from '../Mecanic/Mechanics';
import Services from '../Services/Services';
import SubHeader from '../SubHeader/SubHeader';

const Home = () => {
    return (
        <div >
            
            <SubHeader></SubHeader>
            <Services></Services>
            <Mechanics></Mechanics>
        </div>
    );
};

export default Home;