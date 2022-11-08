import React from 'react';
import About from './About';
import FAQ from './FAQ';
import { Header } from './Header';
import Service from './Service';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <About/>
            <FAQ/>
            <Subscribe/>
        </div>
    );
};

export default Home;