import { IoMailOutline } from 'react-icons/io5'
import { PiInstagramLogo, PiFacebookLogo, PiTwitterLogo } from 'react-icons/pi'

const logo = require('../static/logo.png')
const iconUK = require('../static/icon-uk.png')

const navColumns = [
    {
        title: 'Site',
        items: ['How It Works', 'For Business', 'Join as Talent']
    },
    {
        title: 'Help',
        items: ['Contact Us', 'Privacy Policy', 'Terms of Service']
    }
]

const FooterSection: React.FC = () => {
    return (
        <section className="bg-[#f7f8fc] py-[30px] akatab relative">
            <div className="flex flex-col lg:flex-row px-[80px] lg:px-[60px] xl:px-[140px] 2xl:px-[200px] relative z-50">
                <div className="flex flex-col mx-auto lg:mx-0">
                    <img src={logo} className='w-[170px] h-[25px]' />

                    <div className='flex flex-row gap-[15px] mt-[25px] text-[#1f1f1f] items-center mx-auto lg:mx-0'>
                        <IoMailOutline className='text-2xl' />
                        <PiInstagramLogo className='text-2xl' />
                        <PiFacebookLogo className='text-2xl' />
                        <PiTwitterLogo className='text-2xl' />
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:gap-[80px] xl:gap-[100px] mt-[35px] lg:mt-0 lg:ml-auto'>
                    {navColumns.map((col, index) =>
                        <div key={index} >
                            <h5 className='font-[600]'>{col.title}</h5>

                            <ul className='mt-[25px]'>
                                {col.items.map((item, itemIndex) =>
                                    <li key={itemIndex} className='mt-[15px] text-[#1f1f1f] w-fit font-[400]'>{item}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>

                <div className='flex flex-col mx-auto lg:mr-0 mt-[35px] lg:mt-0 lg:ml-auto w-full lg:w-auto'>
                    <h5 className='font-[600]'>Subscribe to Newsletter</h5>

                    <form className='flex flex-row mt-[25px]'>
                        <input type="text" placeholder="Enter email address"
                            className='bg-[#F7F8FC] border-[#bec2c2] border-[1px] py-[10px] px-[15px] rounded-l-2xl border-r-0 w-full lg:w-[180px] 2xl:w-[300px]' />

                        <button className='bg-[#1f1e1f] hover:bg-[#353435] text-white py-[12px] w-[50%] lg:px-[30px] 
                        rounded-r-2xl font-[500] transition-colors duration-300'>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            <div className='relative bottom-[180px] lg:bottom-[40px]'>
                <div className='w-[25%] h-[60px] bg-white rounded-r-full'></div>
                <div className='w-[40%] h-[60px] bg-white rounded-l-full ml-auto'></div>
            </div>

            <div className='flex flex-col lg:flex-row items-center akatab mt-[-60px] lg:mt-[-20px] font-[400] lg:px-[60px] xl:px-[140px] 2xl:px-[200px]'>
                <div className='flex flex-row items-center'>
                    <img src={iconUK} className='w-[32px] h-[32px]' />
                    <span className='ml-[15px]'>English (EN)</span>
                </div>

                <span className='mt-[15px] lg:mt-0 lg:ml-auto'>©2023 FameFusion. All rights reserved.</span>
            </div>
        </section>
    )
}

export default FooterSection 