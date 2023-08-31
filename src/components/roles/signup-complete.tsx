import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6"

const SignupCompleted: React.FC = () => {
    return (
        <div className="flex flex-col pt-[140px] pb-[60px] akatab px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
            <h1 className="outfit font-[700] text-4xl">
                Thank you!
            </h1>

            <p className="max-w-[70ch] my-[60px]">
                Your data is being processed, and once your documents are
                verified, you will receive an email and platform notification.
                For now, you can browse celebrities and access all their information.
            </p>

            <Link className='flex flex-row items-center text-lg text-white bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]
                 rounded-xl px-[35px] py-[12px] w-fit transition-colors duration-300' href='/browse'>
                Browse celebrities
                <FaArrowRightLong className='text-lg ml-[20px]' />
            </Link>
        </div>
    )
}

export default SignupCompleted