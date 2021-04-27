import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Comitment from '../Comitment/Comitment';
import Headers from '../Headers/Headers';
import News from '../News/News';
import WhatParentsSay from '../WhatParentsSay/WhatParentsSay';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Comitment></Comitment>
            <News></News>
            <WhyChoose></WhyChoose>
            <WhatParentsSay></WhatParentsSay>
            <Footer></Footer>
        </div>
    );
};

export default Home;