import { useState } from "react"

const ExperienceBasicInfo: React.FC<any> = (props) => {
    const { addedExperience, setAddedExperience } = props

    const [basicInfo, setBasicInfo] = useState({
        name: '',
        shortDescription: '',
        price: '',
        duration: ''
    })

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAddedExperience({ ...addedExperience, duration: e.target.value })
    }

    return (
        <div className="flex flex-col">
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Add Experience</h1>

            <div className="flex flex-col gap-y-[25px] mb-10">
                <div className="flex flex-col gap-y-[10px] w-full">
                    <span className="text-[#1f1f1f] font-[600]">Name</span>

                    <input className='border-[1px] border-[#a1a1a1] py-[10px] bg-white w-2/3
                    rounded-lg text-sm px-[15px]' placeholder='Your name' value={basicInfo.name}
                        onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })} />
                </div>

                <div className="flex flex-col gap-y-[10px] w-full">
                    <span className="text-[#1f1f1f] font-[600]">Short Description</span>

                    <textarea className='border-[1px] border-[#a1a1a1] py-[10px] bg-white resize-none
                    rounded-lg text-sm px-[15px] h-[80px] w-2/3' placeholder='Write a one sentence description'
                        value={basicInfo.shortDescription}
                        onChange={(e) => setBasicInfo({ ...basicInfo, shortDescription: e.target.value })} />
                </div>

                <div className="flex flex-col gap-y-[10px] w-full">
                    <span className="text-[#1f1f1f] font-[600]">Price</span>

                    <div className="relative w-2/3">
                        <input className='border-[1px] border-[#a1a1a1] py-[10px] bg-white
                    rounded-lg text-sm px-[15px] w-full' placeholder='100' value={basicInfo.price}
                            onChange={(e) => setBasicInfo({ ...basicInfo, price: e.target.value })} />
                        <span className="absolute top-2 right-4">€</span>
                    </div>
                </div>

                <div className='flex flex-col gap-y-[10px]'>
                    <span className='font-[600] text-[#1f1f1f]'>Duration</span>
                    <div className='border-[1px] border-[#a1a1a1] rounded-xl text-sm px-[15px] w-2/3'>
                        <select
                            className="w-full h-full py-[10px]"
                            onChange={(e) => handleSelect(e)}>
                            <option>Immediatly</option>
                            <option>15 mins</option>
                            <option>30 mins</option>
                            <option>60 mins</option>
                            <option>90 mins</option>
                            <option>120 mins</option>
                            <option>120+ mins</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceBasicInfo