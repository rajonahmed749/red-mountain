import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Comitment from '../Comitment/Comitment';
import Headers from '../Headers/Headers';
import News from '../News/News';
import WhatParentsSay from '../WhatParentsSay/WhatParentsSay';
import WhyChoose from '../WhyChoose/WhyChoose';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Headers/>
            <Comitment/>
            <Services/>
            <News/>
            <WhyChoose/>
            <WhatParentsSay/>
            <Footer/>
        </div>
    );
};

export default Home;