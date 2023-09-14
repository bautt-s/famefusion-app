import FeaturedCard from "@/components/landing/featured-card"
import ExperienceCard from "@/components/cel-profile/experience-card"
import { RootState } from "@/store/store"
import Link from "next/link"
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { useSelector } from "react-redux"

const parts = ['Celebrities', 'Experiences']

const WishlistFanSection: React.FC = () => {
    const [selectedPart, setSelectedPart] = useState(parts[0])

    const loadedLikes = useSelector((state: RootState) => state.likes.loadedLikes)
    const likedStars = useSelector((state: RootState) => state.likes.likedCelebrities)
    
    const loadedExperiences = useSelector((state: RootState) => state.experiences.loadedExperiences)
    const likedExperiences = useSelector((state: RootState) => state.experiences.likedExperiences)

    const handleScroll = (key: string) => {
        const id = key.toLowerCase()

        setSelectedPart(key)
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <div className="flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] gap-x-[25px]">
            <ul className="shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl w-[300px] py-[15px] h-fit">
                {parts.map((item, index) =>
                    <li onClick={() => handleScroll(item)} key={index} className={`pl-[25px] py-[10px]
                    ${selectedPart === item ? 'text-[#FB5870] font-[600] border-[#FB5870]' : 'border-white'} 
                    border-l-[2px]  cursor-pointer`}>{item}</li>
                )}
            </ul>

            <div className="w-full">
                <div className="flex flex-col py-[40px] px-[60px] 
                shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='saved'>
                    <h1 className="outfit font-[600] text-2xl mb-[35px]">Saved Celebrities</h1>

                    {likedStars.length > 0 ?
                        <div className='grid grid-cols-3 gap-y-[45px] gap-x-[15px] w-full'>
                            {likedStars.map((c, index) => <FeaturedCard key={index} c={c} />)}
                        </div> :

                        <span className="text-[#646868]">
                            {!loadedLikes ? 'Loading...' : `You do not have any saved celebrities yet.`}
                        </span>
                    }

                    <Link className={`flex flex-row items-center text-lg text-white bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]
                    rounded-xl px-[35px] py-[12px] w-fit transition-colors duration-300 
                    ${likedStars.length > 0 ? 'mt-[60px] ' : 'mt-[40px]'}`} href='/browse'>
                        Browse celebrities
                        <FaArrowRightLong className='text-lg ml-[20px]' />
                    </Link>
                </div>

                <div className="flex flex-col py-[40px] px-[60px] mt-[40px]
                shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='saved'>
                    <h1 className="outfit font-[600] text-2xl mb-[35px]">Saved Experiences</h1>

                    {likedExperiences.length > 0 ?
                        <div className='grid grid-cols-3 gap-y-[45px] gap-x-[15px] w-full'>
                            {likedExperiences.map((e, index) =>
                                <ExperienceCard key={index} exp={e} />)}
                        </div> :

                        <span className="text-[#646868]">
                            {!loadedExperiences ? 'Loading...' : `You do not have any saved experiences yet.`}
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default WishlistFanSection