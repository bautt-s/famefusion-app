import GlassIcon from "../static/svgs/Glass"
import CheckIcon from "../static/svgs/Check"
import FlameIcon from "../static/svgs/Flame"

const how = [
    {
        icon: <GlassIcon className='border-[1px] border-black p-[25px] rounded-full w-fit' />,
        title: 'Explore and Select',
        description: 'Browse our diverse database of celebrities and choose who you want to meet.'
    },
    {
        icon: <CheckIcon className='border-[1px] border-black p-[25px] rounded-full w-fit' />,
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
        <section className="px-[200px] py-[80px] akatab">
            <h2 className="text-4xl outfit font-[600] tracking-tight">
                How it Works
            </h2>

            <div className="flex flex-row gap-[35px] mt-[45px] relative text-[#1F1F1F]">
                {how.map((item, index) =>
                    <div className="flex flex-col items-center text-center pt-[35px] pb-[30px] w-full bg-[#FCF6F6] rounded-[50px] z-50">
                        {item.icon}

                        <h4 className="text-2xl font-[600] mt-[25px]">{item.title}</h4>
                        <p className="mt-[15px] max-w-[24ch] font-[400] text-lg">{item.description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HowSection