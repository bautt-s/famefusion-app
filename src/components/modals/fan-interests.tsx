import { arraysEqual, capitalizeWords } from "@/utils/functions"
import { allInterests } from "@/utils/hardcode"
import { useState } from "react"
import { TfiClose } from "react-icons/tfi"

const FanInterests: React.FC<any> = (props) => {
    const { tempInterests, setTempInterests, setEdit, updateFan, refetch, id, celebrity } = props
    const { selectedInterests, defaultInterests } = tempInterests

    const handleChange = (item: string) => {
        if (!selectedInterests.includes(item)) {
            if (selectedInterests.length < 6) setTempInterests({ ...tempInterests, selectedInterests: [...selectedInterests, item] })
        }

        else {
            if (selectedInterests.length > 3) setTempInterests({ ...tempInterests, selectedInterests: selectedInterests.filter((i: string) => i !== item) })
        }
    }

    const handleSubmit = async () => {
        updateFan({
            variables: celebrity ?
                {
                    celebrity: {
                        id,
                        interests: selectedInterests,
                    }
                } :
                {
                    fan: {
                        id,
                        interests: selectedInterests,
                    }
                }
        })

        await refetch()
        setTempInterests({ ...tempInterests, defaultInterests: selectedInterests })
    }

    const handleCancel = () => {
        setTempInterests({ ...tempInterests, selectedInterests: defaultInterests })
    }

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setEdit(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center">
                    <span className='outfit text-4xl font-[700]'>Interests</span>
                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setEdit(false)} />
                </div>

                <div className="mt-[20px]">
                    <span>Select some of your personal interests or hobbies</span>

                    <ul className="flex flex-row flex-wrap gap-[20px] 2xl:gap-[25px] mt-[30px]">
                        {allInterests.map((item: string, index: number) =>
                            <li onClick={() => handleChange(item)} className={`px-[13px] py-[5px] rounded-full
                            2xl:text-lg border text-[#646868] ${selectedInterests.includes(item) ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                            cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                                {capitalizeWords(item)}
                            </li>
                        )}
                    </ul>

                    <div className="flex flex-row items-center gap-x-[40px] mt-[40px]">
                        <button type='submit' className={`font-[500] border border-[#FB5870] transition-colors 
                        duration-300 px-[30px] py-[10px] rounded-xl ${arraysEqual(defaultInterests, selectedInterests) ?
                                'bg-none text-[#dd6073] cursor-not-allowed opacity-90' :
                                'bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white'}`} onClick={handleSubmit}>
                            Save Changes
                        </button>

                        {!arraysEqual(defaultInterests, selectedInterests) &&
                            <button className="text-[#D14157] underline" onClick={handleCancel}>
                                Cancel
                            </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FanInterests