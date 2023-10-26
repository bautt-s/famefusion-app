import { useState } from "react"
import CelBasicInfo from "./basic"
import Link from "next/link"
import CelInterestsInfo from "./interests"
import CelVerificationInfo from "./verification"

const parts = ['Basic Information', 'Images', 'Personal Info', 'Interests',
    'About', 'Professional Info', 'Verification', 'Social Media']

const ProfileCelebritySection: React.FC<any> = (props) => {
    const { data, updateCel, updateUser, refetch } = props
    const [selectedPart, setSelectedPart] = useState(parts[0])

    const handleScroll = (key: string) => {
        setSelectedPart(key)

        let id = key.toLowerCase()

        if (key === 'Basic Information') id = 'basic-info'
        else if (key === 'Personal Info') id = 'personal-info'
        else if (key === 'Professional Info') id = 'professional-info'
        else if (key === 'Social Media') id = 'social-media'

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <div className="flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] gap-x-[25px]">
            <div className="flex flex-col w-[300px]">
                <ul className="shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl py-[15px] h-fit">
                    {parts.map((item, index) =>
                        <li onClick={() => handleScroll(item)} key={index} className={`pl-[25px] py-[10px]
                        ${selectedPart === item ? 'text-[#FB5870] font-[600] border-[#FB5870]' : 'border-white'} 
                        border-l-[2px]  cursor-pointer`}>{item}</li>
                    )}
                </ul>

                <Link className="flex flex-row items-center gap-x-[15px] border border-black duration-300
                rounded-xl py-[7px] w-full justify-center mt-[20px] hover:bg-gray-100 transition-all"
                    href={`/browse/${data?.getCelebrityById.id}`}>
                    <span className="font-[500]">See public view</span>
                </Link>
            </div>

            <div className="w-full">
                <CelBasicInfo data={data} updateCel={updateCel}
                    updateUser={updateUser} refetch={refetch} />

                <CelInterestsInfo data={data} updateCel={updateCel} refetch={refetch} />

                <CelVerificationInfo data={data} updateCel={updateCel} />
            </div>
        </div>
    )
}

export default ProfileCelebritySection