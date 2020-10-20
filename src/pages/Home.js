import React from 'react';
import Hero  from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRoom from '../Components/FeaturedRoom';
export default function Home() {
    return ( 
    <>
        <Hero>
            <Banner title="Comfortable Room" subtitle="Single Room with bed and desk">
                <Link to='/rooms' className="btn-primary">Our rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom/>
    </>
    );
}


