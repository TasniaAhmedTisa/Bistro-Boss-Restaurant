import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {  Pagination, Mousewheel } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import Titles from './Shared/Titles';



const Category = () => {
    return (
        <div>
            <Titles subHeading={"From 11.00am to 10.00pm"}
            heading={"order online"}
            ></Titles>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={true}
        mousewheel={true}
        modules={[ Pagination, Mousewheel]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Pizzas</h3>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Soups</h3>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Deserts</h3>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Salads</h3>

        </SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Category;