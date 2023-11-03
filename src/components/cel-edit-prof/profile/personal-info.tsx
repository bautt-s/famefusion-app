import { genders } from "@/utils/hardcode"
import { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { toast } from "react-toastify"

const CelPersonalInfo: React.FC<any> = (props) => {
    const { data, updateCel } = props

    const [selectedGender, setSelectedGender] = useState(data?.getCelebrityById.gender)
    const [inputValue, setInputValue] = useState('')
    const [languages, setLanguages] = useState<string[]>(data?.getCelebrityById.languages)

    const handleLanguage = () => {
        if (languages.length < 4 && inputValue.length > 0) {
            setLanguages([...languages, inputValue])
            setInputValue('')
        }
    }

    const handleRemove = (item: string) => {
        setLanguages(languages.filter((l: string) => l !== item))
    }

    const onGenderChange = (gender: string) => {
        updateCel({
            variables: {
                celebrity: {
                    id: data?.getCelebrityById?.id,
                    gender
                }
            }
        })

        setSelectedGender(gender)

        toast.success('Gender saved.', {
            position: 'bottom-left',
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            closeButton: false,
            theme: "light",
            bodyClassName: 'text-black akatab'
        })
    }

    useEffect(() => {
        if (languages !== data?.getCelebrityById?.languages) {
            updateCel({
                variables: {
                    celebrity: {
                        id: data?.getCelebrityById?.id,
                        languages
                    }
                }
            })

            toast.success('Languages saved.', {
                position: 'bottom-left',
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
                theme: "light",
                bodyClassName: 'text-black akatab'
            })
        }
    }, [languages])

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]" id='personal-info'>
            <h1 className="text-2xl font-[600] mb-[25px]">Personal Information</h1>

            <div className="flex flex-col">
                <h2 className="text-xl font-[600] mb-[15px]">Gender</h2>
                <p>
                    Knowing your gender is important for addressing you appropriately,
                    understanding their unique experiences in the industry, and ensuring
                    inclusive language when connecting you with fans and businesses.
                </p>

                <select onChange={e => onGenderChange(e.target.value)} value={selectedGender}
                    className='border-[1px] border-[#a1a1a1] py-[10px] rounded-xl text-sm px-[15px] mt-[20px] w-[300px]'>
                    {genders.map((g: string, index) =>
                        <option value={g} key={index}>
                            {g[0].toUpperCase() + g.slice(1)}
                        </option>)}
                </select>
            </div>

            <div className="flex flex-col mt-[35px]">
                <h2 className="text-xl font-[600] mb-[15px]">Languages you speak</h2>

                <div className='flex flex-col gap-y-[15px]'>
                    {languages.map((item: string, index: number) =>
                        <div className='flex flex-row items-center gap-x-[15px]' key={index}>
                            <span className='ring-1 ring-gray-400 w-[300px] 
                            py-[7px] rounded-lg px-[15px] text-gray-800 text-sm'>
                                {item[0].toUpperCase() + item.slice(1)}
                            </span>

                            <MdClose className='text-2xl text-gray-400 cursor-pointer'
                                onClick={() => handleRemove(item)} />
                        </div>
                    )}

                    {(languages.length < 4) &&
                        <input className='ring-1 ring-gray-400 w-[300px] py-[7px] rounded-lg text-sm
                        px-[15px] text-gray-800 outline-none focus:ring-[#FB5870] bg-white'
                        placeholder='Add a language...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />}
                </div>

                <button onClick={handleLanguage} className={`flex flex-row items-center
                gap-x-[10px] border rounded-xl pl-[15px] pr-[25px] py-[7px] mt-[25px] w-fit  
                ${(languages.length < 4) ? 'border-black' : 'text-gray-500 border-gray-500 cursor-no-drop'}`}>
                    <AiOutlinePlus className='text-xl' />
                    <span>Add language</span>
                </button>
            </div>
        </div>
    )
}

export default CelPersonalInfo