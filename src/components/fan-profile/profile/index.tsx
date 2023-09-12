import { useState } from "react"
import BasicInfo from "./basic"
import InterestsInfo from "./interests"
import SocialInfo from "./social-links"
import VerificationInfo from "./verification"

const parts = ['Basic Information', 'Interests', 'Verification', 'Social Media']

const ProfileFanSection: React.FC<any> = (props) => {
    const { data, updateFan, updateUser, refetch } = props

    const [selectedPart, setSelectedPart] = useState(parts[0])

    const handleScroll = (key: string) => {
        let id = '';

        setSelectedPart(key)

        if (key === 'Basic Information') id = 'basic'
        else if (key === 'Interests') id = 'interests'
        else if (key === 'Verification') id = 'verification'
        else if (key === 'Social Media') id = 'social'

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
                <BasicInfo data={data} updateFan={updateFan}
                    updateUser={updateUser} refetch={refetch} />

                <InterestsInfo data={data} updateFan={updateFan} refetch={refetch} />

                <VerificationInfo data={data} updateFan={updateFan} />

                <SocialInfo data={data} updateFan={updateFan} />
            </div>
        </div>
    )
}

export default ProfileFanSection