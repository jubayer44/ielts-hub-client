import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About';
import FAQ from './FAQ';
import { Header } from './Header';
import Service from './Service';
import Subscribe from './Subscribe';

const Home = () => {
    useTitle('Home');
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