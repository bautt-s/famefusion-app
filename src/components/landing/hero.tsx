import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

const HeroSection: React.FC = () => {
    return (
        <section className="w-full flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] pt-[80px] pb-[40px] mt-[60px]">
            <div className='flex flex-col w-full md:w-fit items-center md:items-start'>
                <h1 className='text-5xl 2xl:text-6xl outfit sm:max-w-[9ch] md:max-w-[10ch] tracking-tight
                lg:max-w-[9ch] text-[#1f1f1f] font-[600] leading-[60px] text-center md:text-left'>
                    Connect with Your Favorite 
                    <strong className='text-[#FB5870]'> Celebrities</strong>
                </h1>

                <p className='akatab text-xl md:text-lg lg:text-xl max-w-[35ch] lg:max-w-[35ch] 2xl:max-w-[40ch] 
                lg:text-justify mt-[40px] font-[400] text-center md:text-left'>
                    Welcome to a world of celebrity connections. Discover, connect, and engage 
                    with your favourite stars like never before. Connecting Worlds, Creating Memories
                </p>

                <Link className='flex flex-row items-center mt-[60px] text-lg text-white bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]
                 rounded-xl px-[35px] py-[12px] w-fit transition-colors duration-300' href='/browse'>
                    Browse celebrities
                    <FaArrowRightLong className='text-lg ml-[20px]'/>
                </Link>
            </div>

            <img src='/hero-image.png' className='ml-auto hero-img hidden xl:flex' alt='Some of our stars.' />

            <img src='/hero-small-image.png' alt='One of our stars.'
            className='hidden md:flex xl:hidden ml-auto lg:w-[400px] h-[400px] object-cover object-top rounded-2xl hero-small-img' />
        </section>
    )
}

export default HeroSection