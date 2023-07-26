import { FaArrowRightLong } from "react-icons/fa6"
import FooterSection from "../landing-sections/footer"
import NavSection from "../landing-sections/nav"
import { Link } from "react-router-dom"
import { useEffect } from 'react'

const img404 = require('../static/404img.png')

const Error404 = () => {
    useEffect(() => {
        document.title = 'FameFusion | 404'
    }, [])

    return (
        <div>
            <NavSection />

            <div className="w-full flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] pt-[120px] 
            md:pt-[60px] mb-[120px] akatab justify-center items-center lg:gap-x-[60px]">
                <div className="flex flex-col">
                    <h1 className="text-[250px] md:text-[150px] lg:text-[200px] xl:text-[300px] text-[#323434] text-center md:text-left">404</h1>
                    <span className="text-5xl text-[#FB5870] xl:mt-[-60px] text-center md:text-left">Ooops!</span>
                    <span className="text-5xl text-[#323434] mt-[15px] text-center md:text-left">This page does not exist :/</span>

                    <Link to='/' className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl px-[35px] items-center
                    hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 w-fit mt-[60px] flex flex-row mx-auto md:mx-0'>
                        Go to homepage
                        <FaArrowRightLong className='text-lg ml-[20px]'/>
                    </Link>
                </div>

                <div className="relative mt-[60px]">
                    <img src={img404} className="hidden md:flex w-auto md:h-[320px] lg:h-[470px] object-cover object-right-bottom rounded-[45px]" />
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default Error404