import FooterSection from "@/components/landing/footer"
import NavSection from "@/components/landing/nav"
import Head from "next/head"
import Link from "next/link"

const CheckoutSuccess: React.FC = () => {
    return (
        <div className="flex flex-col h-screen"> 
            <Head>
                <title>FameFusion | Checkout successful</title>
            </Head>
            <NavSection />

            <div className="px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] akatab flex flex-col justify-center h-full">
                <h1 className="text-4xl outfit font-[700]">Checkout successful!</h1>

                <p className="text-lg mt-[25px] mb-[60px]">
                    Your payment was effective!
                    <br />Enjoy the new quality time with your choosen celebrity!
                </p>

                <Link href='/fan/c2cf5ce2-d264-4e38-ad41-3c8fcd9b4fc3?section=2' 
                className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl w-fit
                hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 px-[80px]'>
                    Check out Experiences
                </Link>
            </div>

            <div className="mt-auto">
                <FooterSection />
            </div>
        </div>
    )
}

export default CheckoutSuccess