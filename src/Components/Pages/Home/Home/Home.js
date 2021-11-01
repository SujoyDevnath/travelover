import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useData from '../../../Hooks/useData';
import HappyClients from '../HappyClients/HappyClients';
import TopFeatures from '../TopFeatures/TopFeatures';
import TopServices from '../TopServices/TopServices';
import './Home.css';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [services] = useData();

    useEffect(() => {
        if (services.length > 0) {
            setLoading(false);
            console.log("inside services");
        }

    }, [services])
    return (
        <div>
            {
                loading ? <div className="h-100 w-100 my-5 py-5">
                    <Loader
                        type="BallTriangle"
                        color="#00BFFF"
                        height={500}
                        width={500}
                    />
                </div> :
                    <>
                        <header className="home-banner mt-5"
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('https://i.ibb.co/SRBWZz8/home-banner.jpg')` }}>
                            <h1>Find Next Place To Visit</h1>
                            <h4>Discover amzaing places at exclusive deals</h4>
                            <Link to="/services">
                                <button className="btn px-4 py-2 fw-bold">Get Started</button>
                            </Link>
                        </header>
                        <TopServices></TopServices>
                        <TopFeatures></TopFeatures>
                        <HappyClients></HappyClients>
                    </>
            }
        </div>
    );
};

export default Home;