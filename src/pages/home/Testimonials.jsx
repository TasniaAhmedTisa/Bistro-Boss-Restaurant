import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import Titles from "../../Components/Shared/Titles";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className="my-20">
            <Titles
                subHeading="What Our Client Say"
                heading={"Testimonials"}
            ></Titles>
            <div className="flex flex-col items-center mx-24 mt-8 ">
            <RiDoubleQuotesL className="size-20" />
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.Rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
