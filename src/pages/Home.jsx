import React from 'react';
import Category from '../Components/Category';
import PopularMenu from './home/PopularMenu';
import Banner from '../Components/Banner';
import Featured from './home/Featured';
import Testimonials from './home/Testimonials';
import Recomand from './home/Recomand';
import { Helmet } from 'react-helmet-async';
import Titles from '../Components/Shared/Titles';

const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>Bistro Boss | Home</title>
                   </Helmet>  
            <Banner></Banner>
            <Category></Category>
            <Titles
                heading="From Our Menu"
                subHeading="Popular Items"
            ></Titles>
            <PopularMenu></PopularMenu>

            <div className='bg-black text-white text-center mb-10'>
                <h1 className='text-3xl p-10'>CaLL Us: +88 01923456789</h1>
            </div>
            <Recomand></Recomand>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;