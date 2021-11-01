import React from 'react';
import HappyClients from '../HappyClients/HappyClients';
import TopFeatures from '../TopFeatures/TopFeatures';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <h2>This is home banner section</h2>
            <TopServices></TopServices>
            <TopFeatures></TopFeatures>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;