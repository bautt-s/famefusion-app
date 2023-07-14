import { FaArrowRightLong } from 'react-icons/fa6'

const heroImage = require('../static/hero-image.png')

const HeroSection: React.FC = () => {
    return (
        <section className="w-full flex flex-row px-[200px] py-[100px]">
            <div>
                <h1 className='text-6xl outfit max-w-[15ch] text-[#1f1f1f] font-[600] leading-[60px]'>
                    Connect with Your Favorite 
                    <strong className='text-[#FB5870]'> Celebrities</strong>
                </h1>

                <p className='akatab text-xl max-w-[50ch] text-justify mt-[40px] font-[500]'>
                    Welcome to a world of celebrity connections. Discover, connect, and engage 
                    with your favourite stars like never before. Connecting Worlds, Creating Memories
                </p>

                <button className='flex flex-row items-center mt-[60px] text-lg text-white bg-[#FB5870] rounded-xl px-[35px] py-[12px]'>
                    Browse celebrities
                    <FaArrowRightLong className='text-lg ml-[20px]'/>
                </button>
            </div>

            <img src={heroImage} className='ml-auto' />
        </section>
    )
}

export default HeroSection