import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const benefitsImg = require('../static/benefits-image.png')

const BenefitsSection: React.FC = () => {
    return (
        <section className="px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] py-[80px] akatab flex flex-row">
            <div className='relative z-50 flex flex-col items-center justify-center sm:items-start sm:justify-normal'>
                <span className="text-[#959b9b] font-[500] text-lg">BENEFITS</span>

                <h2 className="text-5xl 2xl:text-6xl outfit font-[600] mt-[10px] tracking-tight">
                    Memorable Experiences
                </h2>

                <p className="mt-[40px] text-xl max-w-[60ch] text-center sm:text-left">
                    Interact with celebrities for unforgettable moments, gaining motivation, guidance, and personal inspiration for your own aspirations.
                </p>

                <div className='hidden sm:flex flex-row gap-[15px] sm:mt-[20px] xl:mt-[20px] 2xl:mt-[80px]'>
                    <button className='rounded-full border p-[7px] text-4xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronLeft />
                    </button>

                    <button className='rounded-full border p-[7px] text-4xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronRight />
                    </button>
                </div>

                <button className='bg-[#fb5971] text-white px-[35px] py-[15px] rounded-2xl mt-[40px] flex sm:hidden'>
                    Sign Up
                </button>
            </div>

            <div className='hidden sm:flex ml-auto relative'>
                <img src={benefitsImg} className='h-[400px] w-auto z-50 mr-[150px] sm:mt-[80px] md:mt-[60px] lg:mt-0' />

                <div className='bg-[#ffeff1] sm:w-[120%] md:w-[140%] lg:w-[150%] xl:w-[700px] h-[270px] rounded-[40px] absolute bottom-0 right-0 z-10'></div>

                <div className='bg-[#ffeff1] w-[350px] h-[100px] absolute bottom-0 sm:right-[150px] md:right-[300px] lg:right-[450px] xl:right-[650px] z-20 rounded-l-full flex items-center'>
                    <button className='bg-[#fb5971] text-white px-[35px] py-[15px] rounded-2xl ml-[40px]'>
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection