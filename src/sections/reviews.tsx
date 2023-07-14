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
        description: `“I've always admired this celebrity. The team went above and beyond to make the experience special and tailored to my preferences. The moments shared were truly inspirational, and I am grateful for this opportunity. It was an unforgettable e”`,
        name: 'David M.'
    },
    {
        title: 'Guitar lesson',
        description: '"Connecting with my favorite celebrity through this platform was a dream come true! The personalized experience exceeded my expectations, and the memories I created will stay with me forever. Thank you for making this incredible encounter possible!”',
        name: 'Sarah J.'
    },
    {
        title: 'Guitar lesson',
        description: '"As a business owner, collaborating with a celebrity through this platform was a game-changer for my brand. The team understood our marketing goals and facilitated a seamless partnership. The impact on our brand has been tremendous. Highly recommended!”',
        name: 'Mark R.'
    },
]

const ReviewsSection: React.FC = () => {
    return (
        <section className="px-[200px] py-[80px] akatab">
            <h2 className="text-4xl outfit font-[600]">
                Reviews
            </h2>

            <Swiper slidesPerView={4} className="mySwiper cursor-grab mt-[45px]">
                {dummyReviews.map((rev, index) =>
                    <SwiperSlide key={index} className={`${index !== 0 && 'ml-[20px]'}`}>
                        <div className={`${(index+1)%2 === 0 ? 'bg-[#eff2fe]' : 'bg-[#f6f8fd]'} rounded-[40px] px-[35px] py-[30px]`}>
                            <h4 className="text-xl font-[800]">{rev.title}</h4>
                            <p className="mt-[20px] font-[500]">{rev.description}</p>

                            <div className="flex flex-row mt-[20px] items-center">
                                <div className="flex flex-row text-[#fb5971] gap-[5px]">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>

                                <span className="font-[800] ml-[25px]">{rev.name}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}

export default ReviewsSection