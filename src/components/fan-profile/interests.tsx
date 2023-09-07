import { useState } from "react"
import { GoPencil } from "react-icons/go"
import FanInterests from "../modals/fan-interests"
import { capitalizeWords } from "@/utils/functions"

const InterestsInfo: React.FC<any> = (props) => {
    const { data, updateFan, refetch } = props

    const [edit, setEdit] = useState(false)

    const [tempInterests, setTempInterests] = useState({
        defaultInterests: data?.getFanById?.interests,
        selectedInterests: data?.getFanById?.interests
    })

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]">
            <h1 className="text-2xl font-[600] mb-[25px]">Interests</h1>

            <span>Find common ground with celebrities by adding interests to your profile.</span>

            <div className="flex flex-row flex-wrap items-center gap-x-[25px] gap-y-5 mt-[20px]">
                {tempInterests.defaultInterests?.map((i: string, index: number) =>
                    <span className='px-[13px] py-[5px] rounded-full 2xl:text-lg border shadow-sm
                 text-[#646868] bg-white cursor-pointer transition-colors duration-500' key={index}>
                        {capitalizeWords(i)}
                    </span>
                )}

                <button className="flex flex-row items-center gap-x-[10px] ml-2" onClick={() => setEdit(true)}>
                    <GoPencil className='text-lg' />
                    <span className="underline underline-offset-4">Edit</span>
                </button>
            </div>

            {edit && <FanInterests setEdit={setEdit} tempInterests={tempInterests} id={data?.getFanById?.id}
            updateFan={updateFan} refetch={refetch} setTempInterests={setTempInterests} />}
        </div>
    )
}

export default InterestsInfo