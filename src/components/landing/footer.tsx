import { useState } from 'react'
import { IoMailOutline } from 'react-icons/io5'
import { PiInstagramLogo, PiFacebookLogo, PiTwitterLogo } from 'react-icons/pi'
import PrivacyModal from '../modals/privacy'
import TermsModal from '../modals/terms'

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
    const [privacy, setPrivacy] = useState(false)
    const [terms, setTerms] = useState(false)

    const handleItem = (item: string) => {
        if (item === 'Privacy Policy') setPrivacy(true)
        else if (item === 'Terms of Service') setTerms(true)
    }

    return (
        <>
            <section className="bg-[#f7f8fc] py-[30px] akatab relative">
                <div className="flex flex-col lg:flex-row px-[80px] lg:px-[60px] xl:px-[140px] 2xl:px-[200px] relative">
                    <div className="flex flex-col mx-auto lg:mx-0">
                        <img src='/logo.png' className='w-[170px] h-[25px]' alt='FameFusion Logo' />

                        <div className='flex flex-row gap-[15px] mt-[25px] text-[#1f1f1f] items-center mx-auto lg:mx-0'>
                            <IoMailOutline className='text-2xl hover:skew-y-12 transition-all duration-300 cursor-pointer' />
                            <PiInstagramLogo className='text-2xl hover:skew-y-[-12deg] transition-all duration-300 cursor-pointer' />
                            <PiFacebookLogo className='text-2xl hover:skew-y-12 transition-all duration-300 cursor-pointer' />
                            <PiTwitterLogo className='text-2xl hover:skew-y-[-12deg] transition-all duration-300 cursor-pointer' />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 lg:gap-[80px] xl:gap-[100px] mt-[35px] lg:mt-0 lg:ml-auto'>
                        {navColumns.map((col, index) =>
                            <div key={index} >
                                <h5 className='font-[600]'>{col.title}</h5>

                                <ul className='mt-[25px]'>
                                    {col.items.map((item, itemIndex) =>
                                        <li key={itemIndex} onClick={() => handleItem(item)}
                                        className='mt-[15px] text-[#1f1f1f] w-fit font-[400] cursor-pointer'>
                                            {item}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col mx-auto lg:mr-0 mt-[35px] lg:mt-0 lg:ml-auto w-full lg:w-auto'>
                        <h5 className='font-[600]'>Subscribe to Newsletter</h5>

                        <form className='flex flex-row mt-[25px]'>
                            <input type="text" placeholder="Enter email address"
                                className='bg-[#F7F8FC] outline-none border-[#bec2c2] border-[1px] py-[10px] px-[15px] rounded-l-2xl border-r-0 w-full lg:w-[180px] 2xl:w-[300px]' />

                            <button className='bg-[#1f1e1f] hover:bg-[#353435] text-white py-[12px] w-[50%] lg:px-[30px] 
                        rounded-r-2xl font-[500] transition-colors duration-300'>
                                Subscribe
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
                        <img src='/icon-uk.png' className='w-[32px] h-[32px]' alt='Language Icon' />
                        <span className='ml-[15px]'>English (EN)</span>
                    </div>

                    <span className='mt-[15px] lg:mt-0 lg:ml-auto'>©2023 FameFusion. All rights reserved.</span>
                </div>
            </section>

            {privacy && <PrivacyModal setOpen={setPrivacy} />}
            {terms && <TermsModal setOpen={setTerms} />}
        </>
    )
}

export default FooterSection 