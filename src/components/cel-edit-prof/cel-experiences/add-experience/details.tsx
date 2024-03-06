import { useState } from "react"

const ExperienceDetails: React.FC<any> = (props) => {
    const { addedExperience, setAddedExperience } = props

    const [detailsInfo, setDetailsInfo] = useState({
        online: false,
        location: '',
        language: '',
        categories: []
    })

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDetailsInfo({ ...detailsInfo, language: e.target.value })
    }

    return (
        <div className="flex flex-col gap-y-[35px] mb-[25px]">
            <h1 className="outfit font-[600] text-2xl">Details</h1>

            <div className="flex flex-col gap-y-[15px]">
                <h2 className="font-[600]">Type of Experience</h2>

                <div className="flex flex-row items-center gap-x-[20px] 
                    ring-1 ring-gray-400 w-2/5 py-[7px] pl-[15px] rounded-lg">
                    <input type='radio' className='w-[20px] h-[20px] accent-[#FB5870] cursor-pointer'
                        checked={!detailsInfo.online} onChange={() => setDetailsInfo({ ...detailsInfo, online: false })} />
                    <span>Offline</span>
                </div>

                <div className="flex flex-row items-center gap-x-[20px] 
                    ring-1 ring-gray-400 w-2/5 py-[7px] pl-[15px] rounded-lg">
                    <input type='radio' className='w-[20px] h-[20px] accent-[#FB5870] cursor-pointer'
                        checked={detailsInfo.online} onChange={() => setDetailsInfo({ ...detailsInfo, online: true })} />
                    <span>Online</span>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="font-[600]">Type of Experience</h2>

                <p className="text-[#646868] my-3">
                    Your address is used solely to find nearby matches, prioritizing your privacy.
                </p>

                <input className='border-[1px] border-[#a1a1a1] py-[10px] bg-white w-2/5
                    rounded-lg text-sm px-[15px]' placeholder='Your location' value={detailsInfo.location}
                    onChange={(e) => setDetailsInfo({ ...detailsInfo, location: e.target.value })} />
            </div>

            <div className="flex flex-col gap-y-[15px]">
                <h2 className="font-[600]">Language</h2>

                <div className='border-[1px] border-[#a1a1a1] rounded-xl text-sm px-[15px] w-2/5'>
                    <select
                        className="w-full h-full py-[10px]"
                        onChange={(e) => handleSelect(e)}>
                        <option>English</option>
                        <option>Portuguese</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="font-[600]">Type of Experience</h2>

                <p className="text-[#646868] my-3">
                    Your address is used solely to find nearby matches, prioritizing your privacy.
                </p>

                <input className='border-[1px] border-[#a1a1a1] py-[10px] bg-white w-2/5
                    rounded-lg text-sm px-[15px]' placeholder='Your location' value={detailsInfo.location}
                    onChange={(e) => setDetailsInfo({ ...detailsInfo, location: e.target.value })} />
            </div>
        </div>
    )
}

export default ExperienceDetails