import { useState } from "react"
import { LuUpload } from "react-icons/lu"
import Datepicker from "react-tailwindcss-datepicker"
import ImageUploading, { ImageListType } from "react-images-uploading"
import { compareObjects } from "@/utils/functions"
import { defaultImg } from "@/utils/hardcode"

const BasicInfo: React.FC<any> = (props) => {
    const { data, updateFan, updateUser, refetch } = props

    const [defaultValues, setDefaultValues] = useState({
        name: data?.getFanById?.name,
        email: data?.getFanById?.email,
        location: data?.getFanById?.location,
        profilePic: data?.getFanById?.user?.profilePic,
        birthYear: {
            startDate: data?.getFanById?.birthYear,
            endDate: data?.getFanById?.birthYear
        }
    })

    const [basicInfo, setBasicInfo] = useState(defaultValues)
    const [profilePic, setProfilePic] = useState([])

    const onChange = (imageList: ImageListType) => {
        setProfilePic(imageList as never[])
        setBasicInfo({ ...basicInfo, profilePic: imageList[0].dataURL })
    }

    const handleDelete = () => {
        setBasicInfo({ ...basicInfo, profilePic: defaultImg })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        updateFan({
            variables: {
                fan: {
                    id: data?.getFanById?.id,
                    name: basicInfo.name,
                    email: basicInfo.email,
                    location: basicInfo.location,
                    birthYear: basicInfo.birthYear.startDate,
                }
            }
        })

        if (basicInfo.profilePic !== defaultValues.profilePic) {
            updateUser({
                variables: {
                    user: {
                        id: data?.getFanById?.userId,
                        name: basicInfo.name,
                        email: basicInfo.email,
                        profilePic: basicInfo.profilePic
                    }
                }
            })
        }

        await refetch()
        setDefaultValues(basicInfo)
    }

    const handleCancel = () => {
        setBasicInfo(defaultValues)
    }

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='basic'>
            <h1 className="text-2xl font-[600]">Basic Information</h1>

            <div className="flex flex-row mt-[25px] gap-x-[60px]">
                <div className="flex flex-col items-center">
                    <img className="w-[160px] h-[160px] rounded-full border border-gray-300 object-cover"
                        src={basicInfo.profilePic} />

                    <ImageUploading
                        multiple
                        value={profilePic}
                        onChange={onChange}
                        maxNumber={1}
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate
                        }) => (
                            <button className="flex flex-row items-center gap-x-[15px] border border-black duration-300
                            rounded-xl py-[7px] pl-[20px] pr-[30px] justify-center mt-[20px] hover:bg-gray-100 transition-all"
                            onClick={!imageList[0] ? onImageUpload : () => onImageUpdate(0)}>
                                <LuUpload className="text-xl" />
                                <span className="font-[500]">Upload</span>
                            </button>
                        )}
                    </ImageUploading>

                    <button className="text-[#D14157] underline mt-[10px]" onClick={handleDelete}>
                        Delete
                    </button>
                </div>

                <form className="flex flex-col grow gap-y-[30px]" onSubmit={handleSubmit}>
                    <div className="flex flex-row gap-x-[30px]">
                        <div className="flex flex-col gap-y-[10px] w-full">
                            <span className="text-[#1f1f1f] font-[600]">Name
                                <strong className="text-[#FB5870] ml-1">*</strong></span>

                            <input className='border-[1px] border-[#a1a1a1] py-[10px] bg-white
                            rounded-lg text-sm px-[15px]' placeholder='Your name' value={basicInfo.name}
                                onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })} />
                        </div>

                        <div className="flex flex-col gap-y-[10px] w-full">
                            <span className="text-[#1f1f1f] font-[600]">Date of Birth
                                <strong className="text-[#FB5870] ml-1">*</strong></span>

                            <div className='border-[1px] border-[#a1a1a1] rounded-lg bg-gray-100 text-gray-500'>
                                <Datepicker
                                    primaryColor={"rose"}
                                    placeholder='Your birthdate'
                                    useRange={false}
                                    asSingle={true}
                                    value={basicInfo.birthYear}
                                    onChange={(newValue: any) => setBasicInfo({ ...basicInfo, birthYear: newValue })}
                                    popoverDirection='down'
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-[10px] w-full">
                        <span className="text-[#1f1f1f] font-[600]">Email
                            <strong className="text-[#FB5870] ml-1">*</strong></span>

                        <input className='border-[1px] border-[#a1a1a1] py-[10px] bg-gray-100 text-gray-500
                        rounded-lg text-sm px-[15px]' placeholder='Your email' value={basicInfo.email} disabled
                            onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })} />
                    </div>

                    <div className="flex flex-col gap-y-[10px] w-full">
                        <span className="text-[#1f1f1f] font-[600]">Location
                            <strong className="text-[#FB5870] ml-1">*</strong></span>

                        <input className='border-[1px] border-[#a1a1a1] py-[10px] bg-white
                        rounded-lg text-sm px-[15px]' placeholder='Your location' value={basicInfo.location}
                            onChange={(e) => setBasicInfo({ ...basicInfo, location: e.target.value })} />
                    </div>

                    <div className="flex flex-row items-center gap-x-[40px] mt-[10px]">
                        <button type='submit' className={`font-[500] border border-[#FB5870] transition-colors 
                        duration-300 px-[30px] py-[10px] rounded-xl ${compareObjects(defaultValues, basicInfo) ?
                                'bg-none text-[#dd6073] cursor-not-allowed opacity-90' :
                                'bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white'}`}
                                disabled={compareObjects(defaultValues, basicInfo)}>
                            Save Changes
                        </button>

                        {!compareObjects(defaultValues, basicInfo) &&
                            <button className="text-[#D14157] underline" onClick={handleCancel}>
                                Cancel
                            </button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BasicInfo