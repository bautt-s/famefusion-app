import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from 'react-icons/ai'

import "swiper/css";
import "swiper/css/pagination";

const dummyReviews = [
    {
        title: 'Guitar lesson',
        description: '“Connecting with my favorite celebrity through this platform was a dream come true! The personalized experience exceeded my expectations, and the memories I created will stay with me forever. Thank you for making this incredible encounter possible!”',
        name: 'Sarah J.'
    },
    {
        title: 'Social media promo',
        description: '“As a business owner, collaborating with a celebrity through this platform was a game-changer for my brand. The team understood our marketing goals and facilitated a seamless partnership. The impact on our brand has been tremendous. Highly recommended!”',
        name: 'Mark R.'
    },
    {
        title: 'Lunch with celebrity',
        description: '“Meeting a celebrity offline was an experience I will cherish forever. The platform made it really easy to submit my request. The attention to detail were remarkable. I am grateful for the opportunity and would definitely use this platform again.”',
        name: 'Emily T.'
    },
    {
        title: 'Coffee with celebrity',
        description: `“I've always admired this celebrity. The team went above and beyond to make the experience special and tailored to my preferences. The moments shared were truly inspirational, and I am grateful for this opportunity. It was an unforgettable experience!”`,
        name: 'David M.'
    },
    {
        title: 'Guitar lesson',
        description: '"Connecting with my favorite celebrity through this platform was a dream come true! The personalized experience exceeded my expectations, and the memories I created will stay with me forever. Thank you for making this incredible encounter possible!”',
        name: 'Sarah J.'
    },
    {
        title: 'Social media promo',
        description: '"As a business owner, collaborating with a celebrity through this platform was a game-changer for my brand. The team understood our marketing goals and facilitated a seamless partnership. The impact on our brand has been tremendous. Highly recommended!”',
        name: 'Mark R.'
    },
]

const ReviewsSection: React.FC = () => {
    return (
        <section className="px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] py-[80px] akatab">
            <h2 className="text-4xl outfit font-[600] tracking-tight">
                Reviews
            </h2>

            <Swiper 
                slidesPerView={1}
                className="mySwiper cursor-grab mt-[45px]"
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },
                    1180: {
                        slidesPerView: 3
                    },
                    1720: {
                        slidesPerView: 4
                    }
                }}>
                {dummyReviews.map((rev, index) =>
                    <SwiperSlide key={index} className={`${index !== 0 && 'ml-[20px]'}`}>
                        <div className={`${(index+1)%2 === 0 ? 'bg-[#eff2fe]' : 'bg-[#f6f8fd]'} rounded-[40px] px-[35px] py-[30px]`}>
                            <h4 className="text-xl font-[600] text-center md:text-left">{rev.title}</h4>
                            <p className="mt-[20px] font-[400] text-sm lg:text-base max-w-[48ch] md:max-w-none 
                            text-justify xl:text-left mx-auto md:mx-0">
                                {rev.description}
                            </p>

                            <div className="flex flex-row mt-[20px] items-center justify-center md:justify-normal">
                                <div className="flex flex-row text-[#fb5971] gap-[5px]">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>

                                <span className="font-[600] ml-[25px]">{rev.name}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}

export default ReviewsSection