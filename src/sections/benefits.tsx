import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const benefitsImg = require('../static/benefits-image.png')

const BenefitsSection: React.FC = () => {
    return (
        <section className="px-[200px] py-[80px] akatab flex flex-row">
            <div>
                <span className="text-[#959b9b] font-[500] text-lg">BENEFITS</span>

                <h2 className="text-6xl outfit font-[600] mt-[10px]">
                    Memorable Experiences
                </h2>

                <p className="mt-[40px] text-xl max-w-[60ch]">
                    Interact with celebrities for unforgettable moments, gaining motivation, guidance, and personal inspiration for your own aspirations.
                </p>

                <div className='flex flex-row gap-[15px] mt-[80px]'>
                    <button className='rounded-full border p-[7px] text-4xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronLeft />
                    </button>

                    <button className='rounded-full border p-[7px] text-4xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronRight />
                    </button>
                </div>
            </div>

            <div className='flex ml-auto relative'>
                <img src={benefitsImg} className='h-[400px] w-auto z-50 mr-[150px]' />

                <div className='bg-[#ffeff1] w-[700px] h-[270px] rounded-[40px] absolute bottom-0 right-0 z-10'></div>

                <div className='bg-[#ffeff1] w-[350px] h-[100px] absolute bottom-0 right-[650px] z-20 rounded-l-full flex items-center'>
                    <button className='bg-[#fb5971] text-white px-[35px] py-[15px] rounded-2xl ml-[40px]'>
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection