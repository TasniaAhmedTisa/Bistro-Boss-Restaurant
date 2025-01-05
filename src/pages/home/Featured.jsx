import React from 'react';
import Titles from '../../Components/Shared/Titles';
import featureImg from '../../assets/home/featured.jpg'
import './Feature.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed'>
            <div className='bg-slate-800 bg-opacity-50 text-white pt-8 my-20'>
            <div>
            <Titles heading={"FROM OUR MENU"} subHeading={"Check it out"}></Titles>
        </div>
        <div className='flex items-center gap-10 pt-12 pb-20 px-36'>
        <div>
            <img src={featureImg} alt="" />
        </div>
        <div>
            <p>March 20, 2023</p>
           <p className='mb-2'> WHERE CAN I GET SOME?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tempora sunt deleniti non, doloremque nam, quasi earum molestias sed explicabo qui eius illum odio quidem! Explicabo impedit quam deleniti ipsa?
            </p>
            <button className='btn btn-outline mt-5 text-white border-0 border-b-4'>Order Now</button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Featured;