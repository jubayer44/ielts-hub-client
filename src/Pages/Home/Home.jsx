import React from 'react';
import About from './About';
import { Header } from './Header';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <About/>
        </div>
    );
};

export default Home;