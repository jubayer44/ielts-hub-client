import React from 'react';
import Contact from '../Contact/Contact';
import About from './About';
import FAQ from './FAQ';
import { Header } from './Header';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <About/>
            <FAQ/>
            <Contact/>
        </div>
    );
};

export default Home;