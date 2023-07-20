import { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const benefitsImg1 = require('../static/benefits-image-1.png')
const benefitsImg2 = require('../static/benefits-image-2.png')
const benefitsImg3 = require('../static/benefits-image-3.png')

const benefitsSlides = [
    {
        index: 0,
        img: benefitsImg1,
        cta: 'Sign Up',
        color: 'button-slide-1',
        description: 'Interact with celebrities for unforgettable moments, gaining motivation, guidance, and personal inspiration for your own aspirations.'
    },
    {
        index: 1,
        img: benefitsImg2,
        cta: 'Join as Talent',
        color: 'button-slide-2',
        description: 'Connect directly with your fans in offline encounters, fostering more personal connection that goes beyond social media.'
    },
    {
        index: 2,
        img: benefitsImg3,
        cta: 'Join as Business',
        color: 'button-slide-3',
        description: 'Collaborate with celebrities for engaging content, promotions, and partnerships to reach a wider audience and increase brand awareness.'
    }
]

const BenefitsSection: React.FC = () => {
    const [selectedSlide, setSelectedSlide] = useState(benefitsSlides[0])

    const handleSlides = (order: 'asc' | 'desc') => {
        if (order === 'asc') {
            if (selectedSlide.index < 2) setSelectedSlide(benefitsSlides[selectedSlide.index + 1])
        } else {
            if (selectedSlide.index > 0) setSelectedSlide(benefitsSlides[selectedSlide.index - 1])
        }
    }

    return (
        <section className="px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] py-[80px] akatab flex flex-row">
            <div className='relative z-50 flex flex-col items-center justify-center md:items-start md:justify-normal'>
                <span className="text-[#959b9b] font-[500] text-lg">BENEFITS</span>

                <h2 className="text-4xl md:text-5xl 2xl:text-6xl outfit font-[700] mt-[10px] tracking-tight">
                    Memorable Experiences
                </h2>

                <p className="mt-[20px] md:mt-[40px] text-xl md:max-w-[35ch] lg:max-w-[50ch] text-center md:text-left font-[400]">
                    {selectedSlide.description}
                </p>

                <div className='flex flex-row gap-[15px] mt-[20px] xl:mt-[20px] 2xl:mt-[80px]'>
                    <button onClick={() => handleSlides('desc')}
                        className='rounded-full border p-[7px] text-4xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronLeft />
                    </button>

                    <button onClick={() => handleSlides('asc')}
                        className='rounded-full border p-[7px] text-4xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronRight />
                    </button>
                </div>

                <button className={`${selectedSlide.color} text-white w-[160px] py-[15px] rounded-2xl justify-center transition-colors duration-300 flex md:hidden mt-[40px]`}>
                        {selectedSlide.cta}
                </button>
            </div>

            <div className='hidden md:flex ml-auto relative mt-[80px] lg:mt-[60px] 2xl:mt-0'>
                <img src={selectedSlide.img} alt='Our clients!'
                className='h-[400px] w-auto z-50 mr-[150px] md:mt-[60px] lg:mt-0' />

                <div className='bg-[#ffeff1] md:w-[350px] lg:w-[550px] h-[270px] rounded-[40px] absolute bottom-0 right-0 z-10'></div>

                <div className='bg-[#ffeff1] w-[350px] h-[100px] absolute bottom-0 md:right-[300px] lg:right-[500px] z-20 rounded-l-full flex items-center'>
                    <button className={`${selectedSlide.color} text-white w-[160px] py-[15px] rounded-2xl ml-[40px] z-50 transition-colors duration-300`}>
                        {selectedSlide.cta}
                    </button>

                    <div className='relative flex'>
                        <div className='w-[100px] h-[100px] bg-[#ffeff1] absolute bottom-[50px] z-0'>
                            <div className='w-full h-full bg-white rounded-br-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection