import { useState } from "react"
import FanExperiences from "./fan-experiences"
import BusinessExperiences from "./business-experiences"
import Drafts from "./drafts"
import AddExperience from "./add-experience"

const parts = ['Fan Experiences', 'Business Experiences', 'Drafts']

const ExperiencesCelebritySection: React.FC<any> = (props) => {
    const { data } = props

    const [selectedPart, setSelectedPart] = useState(parts[0])

    const [experiences, setExperiences] = useState({
        fans: data?.getCelebrityById.workList.filter((w: any) => w.collaboration === true),
        business: data?.getCelebrityById.workList.filter((w: any) => (!w.collaboration === true))
    })

    const [addedExperience, setAddedExperience] = useState({
        stage: 0,
        view: false,
        collaboration: undefined,
        title: '',
        shortDescription: '',
        description: '',
        bookingInfo: '',
        price: null,
        duration: null,
        online: false,
        location: '',
        language: '',
        categories: [],
        inclusions: [],
        exclusions: [],
        filters: [],
        warnings: [],
        timetable: {
            months: [],
            mondayTimes: [],
            tuesdayTimes: [],
            wednesdayTimes: [],
            thursdayTimes: [],
            fridayTimes: [],
            saturdayTimes: [],
            sundayTimes: [],
        }
    })

    const handleScroll = (key: string) => {
        setSelectedPart(key)

        let id = key.toLowerCase()

        if (key === 'Fan Experiences') id = 'fan-experiences'
        else if (key === 'Business Experiences') id = 'business-experiences'

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <div className="px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
            {addedExperience.view ? 
            <AddExperience addedExperience={addedExperience} setAddedExperience={setAddedExperience} />
            : 
            <div className="flex flex-row gap-x-[25px]">
                <ul className="shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl w-[300px] py-[15px] h-fit">
                    {parts.map((item, index) =>
                        <li onClick={() => handleScroll(item)} key={index} className={`pl-[25px] py-[10px]
                    ${selectedPart === item ? 'text-[#FB5870] font-[600] border-[#FB5870]' : 'border-white'} 
                    border-l-[2px]  cursor-pointer`}>{item}</li>
                    )}
                </ul>

                <div className="w-full flex flex-col gap-y-[40px]">
                    <FanExperiences experiences={experiences}
                        addedExperience={addedExperience} setAddedExperience={setAddedExperience} />

                    <BusinessExperiences experiences={experiences}
                        addedExperience={addedExperience} setAddedExperience={setAddedExperience} />
                        
                    <Drafts />
                </div>
            </div>}
        </div>
    )
}

export default ExperiencesCelebritySection