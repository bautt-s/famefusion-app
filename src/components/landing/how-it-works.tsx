import GlassIcon from "@/svgs/Glass"
import FlameIcon from "@/svgs/Flame"
import { PiCheckFatLight } from "react-icons/pi"

const how = [
    {
        icon: <GlassIcon className='border-[1px] border-black p-[25px] rounded-full w-fit' />,
        title: 'Explore and Select',
        description: 'Browse our diverse database of celebrities and choose who you want to meet.'
    },
    {
        title: 'Submit Your Request',
        description: 'Share the purpose and preferences of your meeting through our platform.'
    },
    {
        icon: <FlameIcon className='border-[1px] border-black p-[25px] rounded-full w-fit' />,
        title: 'Enjoy the Experience',
        description: 'Meet your chosen celebrity, engage in meaningful interactions, and create lasting memories.'
    }
]

const HowSection: React.FC = () => {
    return (
        <section className="px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] sm:mt-[100px] lg:mt-[-40px] akatab">
            <h2 className="text-4xl outfit font-[600] tracking-tight">
                How it Works
            </h2>

            <div className="hidden lg:flex flex-row mt-[45px] relative text-[#1F1F1F]">
                <div className="flex flex-col items-center text-center pt-[35px] pb-[30px] w-full bg-[#FCF6F6] rounded-l-[50px] rounded-tr-[50px] rounded-br-none z-40 group">
                    <div className="group-hover:scale-105 transition-all duration-300">
                        {how[0].icon}
                    </div>

                    <h4 className="text-xl xl:text-2xl font-[600] mt-[25px]">{how[0].title}</h4>
                    <p className="mt-[15px] max-w-[24ch] font-[400] text-base xl:text-lg">{how[0].description}</p>
                </div>

                <div className="h-[305px] w-[100px] flex flex-col bg-[#FCF6F6]">
                    <div className="w-full h-1/2 bg-white rounded-b-full"></div>
                </div>

                <div className="flex flex-col items-center text-center pt-[35px] pb-[30px] w-full bg-[#FCF6F6] rounded-tl-[50px] rounded-br-[50px] z-40 group">
                    <div className="border-[1px] border-black p-[25px] rounded-full group-hover:scale-105 transition-all duration-300">
                        <PiCheckFatLight className='text-3xl' />
                    </div>

                    <h4 className="text-xl xl:text-2xl font-[600] mt-[25px]">{how[1].title}</h4>
                    <p className="mt-[15px] max-w-[24ch] font-[400] text-base xl:text-lg">{how[1].description}</p>
                </div>

                <div className="h-[305px] w-[100px] flex flex-col bg-[#FCF6F6]">
                    <div className="w-full h-1/2 bg-white rounded-t-full mt-auto"></div>
                </div>

                <div className="flex flex-col items-center text-center pt-[35px] pb-[30px] w-full bg-[#FCF6F6] rounded-[50px] rounded-tl-none z-40 group">
                    <div className="group-hover:scale-105 transition-all duration-300">
                        {how[2].icon}
                    </div>

                    <h4 className="text-xl xl:text-2xl font-[600] mt-[25px]">{how[2].title}</h4>
                    <p className="mt-[15px] max-w-[24ch] font-[400] text-base xl:text-lg">{how[2].description}</p>
                </div>
            </div>

            <div className="flex lg:hidden flex-col mt-[45px] text-[#1F1F1F] gap-[15px]">
                {how.map((item, index) =>
                    <div key={index} className="flex flex-row items-center bg-[#FCF6F6] rounded-full sm:pr-[30px] text-center sm:text-left">
                        <div className="ml-[10px] hidden sm:flex">
                            {item.icon}
                        </div>

                        <div className="flex flex-col ml-[20px] py-[15px]">
                            <h5 className="font-[500]">{item.title}</h5>
                            <p className="">{item.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HowSection