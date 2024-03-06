import { useState } from "react"
import ExperienceBasicInfo from "./add-experience"
import Link from "next/link"
import { useRouter } from "next/router"
import ExperienceDetails from "./details"
import { LinearProgress, linearProgressClasses, styled } from "@mui/material"

const parts = ['Add Experience', 'Details', 'Description', 'What does it include?', 'Availability', 'Filters']

const AddExperience: React.FC<any> = (props) => {
    const { addedExperience, setAddedExperience } = props

    const router = useRouter()
    const { id } = router.query

    const [selectedPart, setSelectedPart] = useState(parts[0])

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[300],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#1f1f1f'
        },
    }));

    const handleCancel = () => {
        setAddedExperience({
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

        if (window) window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    const handleNext = () => {
        setAddedExperience({ ...addedExperience, stage: 2 })
    }
    
    const handleBack = () => {
        setAddedExperience({
            ...addedExperience,
            stage: addedExperience.stage - 1
        })
    }

    return (
        <div className="flex flex-col gap-y-[35px]">
            <div className="flex akatab font-[500] -mt-8" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href={`/celebrity/${id}?=section=0`}
                            className="inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link href={`/celebrity/${id}?=section=3`}
                                className="ml-1 inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">
                                Experiences
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ml-1 md:ml-2 text-gray-400 cursor-pointer">Add Experience</span>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="flex flex-row gap-x-[25px]">
                <ul className="shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl w-[300px] py-[15px] h-fit">
                    {parts.map((item, index) =>
                        <li key={index} className={`pl-[25px] py-[10px]
                    ${selectedPart === item ? 'text-[#FB5870] font-[600] border-[#FB5870]' : 'border-white text-[#979B9B]'} 
                    border-l-[2px]`}>{item}</li>
                    )}
                </ul>

                <div className="flex flex-col py-[40px] px-[60px] akatab
                shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl w-full">
                    {addedExperience.stage === 1 &&
                        <ExperienceBasicInfo addedExperience={addedExperience} setAddedExperience={setAddedExperience} />}

                    {addedExperience.stage === 2 &&
                        <ExperienceDetails addedExperience={addedExperience} setAddedExperience={setAddedExperience} />}

                    <BorderLinearProgress variant="determinate" value={addedExperience.stage * 100 / 6} />

                    <div className="flex flex-row items-center mt-10">
                        {addedExperience.stage === 1 &&
                            <button onClick={handleCancel}
                                className="underline text-[#D20505] underline-offset-4">
                                Cancel
                            </button>}

                        {addedExperience.stage > 1 &&
                        <button className="font-[500] border border-gray-300 px-[30px] py-[10px] 
                        rounded-xl hover:bg-gray-50 active:bg-gray-100 duration-300 transition-colors"
                            onClick={handleBack}>
                            Back
                        </button>}

                        <button className="font-[500] border bg-[#FB5870] text-white hover:bg-[#eb5269] 
                        active:bg-[#e64c63] transition-colors duration-300 px-[30px] py-[10px] rounded-xl ml-auto"
                            onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExperience