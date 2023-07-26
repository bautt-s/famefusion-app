import { FaArrowRightLong } from "react-icons/fa6"
import FooterSection from "../landing-sections/footer"
import NavSection from "../landing-sections/nav"
import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <NavSection />

            <div className="w-full flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] pt-[60px] pb-[120px] akatab">
                <div className="flex flex-col">
                    <h1 className="text-[300px] text-[#323434]">404</h1>
                    <span className="text-5xl text-[#FB5870] mt-[-60px]">Ooops!</span>
                    <span className="text-5xl text-[#323434] mt-[15px]">This page does not exist :/</span>

                    <Link to='/' className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl px-[35px] items-center
                    hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 w-fit mt-[60px] flex flex-row'>
                        Go to homepage
                        <FaArrowRightLong className='text-lg ml-[20px]'/>
                    </Link>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default Error404