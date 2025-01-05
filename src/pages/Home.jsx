import React from 'react';
import Category from '../Components/Category';
import PopularMenu from './home/PopularMenu';
import Banner from '../Components/Banner';
import Featured from './home/Featured';
import Testimonials from './home/Testimonials';
import Recomand from './home/Recomand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
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