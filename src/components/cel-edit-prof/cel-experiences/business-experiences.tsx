import ExperienceCard from "@/components/cel-profile/experience-card"
import { LiaPlusSolid } from "react-icons/lia"

const BusinessExperiences: React.FC<any> = (props) => {
    const { experiences } = props

    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='business-experiences'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Business Experiences</h1>

            <span className="text-[#646868]">
                Enhance your profile by adding experiences, allowing 
                business to connect with you for collaborations.
            </span>

            <div className="flex flex-row flex-wrap gap-[15px] mt-8">
                {experiences?.business?.length > 0 &&
                    experiences.business.map((be: any) =>
                        <ExperienceCard exp={be} />)
                }
            </div>

            <button className='flex flex-row items-center border border-black transition-all
            px-[25px] py-[10px]  rounded-xl w-fit gap-x-[15px] mt-8 hover:bg-gray-100 duration-300'>
                <LiaPlusSolid className='text-xl' />
                <span className='font-[500]'>Add Experience</span>
            </button>
        </div>
    )
}

export default BusinessExperiences