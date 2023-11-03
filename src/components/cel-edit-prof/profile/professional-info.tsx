import { capitalizeWords, compareObjects } from "@/utils/functions"
import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { GoPencil } from "react-icons/go"
import { MdClose } from "react-icons/md"
import CelCategories from "./cel-categories"

const CelProfessionalInfo: React.FC<any> = (props) => {
    const { data, updateCel, refetch } = props

    const [edit, setEdit] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const [defaultProfessional, setDefaultProfessional] = useState({
        summary: data?.getCelebrityById.description,
        description: data?.getCelebrityById.biography,
        products: data?.getCelebrityById.associatedBrands,
        categories: data?.getCelebrityById.categories,
    })

    const [professionalInfo, setProfessionalInfo] = useState(defaultProfessional)

    const handleProduct = () => {
        if (professionalInfo.products.length < 4 && inputValue.length > 0) {
            setProfessionalInfo({ ...professionalInfo, products: [...professionalInfo.products, inputValue] })
            setInputValue('')
        }
    }

    const handleRemove = (item: string) => {
        setProfessionalInfo({
            ...professionalInfo,
            products: professionalInfo.products.filter((p: string) => p !== item)
        })
    }

    const handleSubmit = async () => {
        updateCel({
            variables: {
                celebrity: {
                    id: data?.getCelebrityById.id,
                    associatedBrands: professionalInfo.products,
                    biography: professionalInfo.description,
                    description: professionalInfo.summary,
                    categories: professionalInfo.categories
                }
            }
        })

        await refetch()

        setDefaultProfessional(professionalInfo)
    }

    const handleCancel = () => {
        setProfessionalInfo({
            summary: data?.getCelebrityById.description,
            description: data?.getCelebrityById.biography,
            products: data?.getCelebrityById.associatedBrands,
            categories: data?.getCelebrityById.categories,
        })
    }

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]" id='professional-info'>
            <h1 className="text-2xl font-[600] mb-[25px]">Professional Information</h1>

            <div className="flex flex-col">
                <h2 className="text-xl font-[600] mb-[15px]">Profile Title</h2>
                <p>Compose a brief summary of yourself.</p>

                <input className='ring-1 ring-gray-400 w-[300px] py-[7px] rounded-lg text-sm
                px-[15px] text-gray-800 outline-none focus:ring-[#FB5870] bg-white mt-[20px]'
                    placeholder='Sum up who you are...' value={professionalInfo.summary}
                    onChange={(e) => setProfessionalInfo({ ...professionalInfo, summary: e.target.value })} />
            </div>

            <div className="flex flex-col mt-[35px]">
                <h2 className="text-xl font-[600] mb-[15px]">Description</h2>
                <p>
                    Briefly describe your career or profession as a celebrity and mention
                    what you are famous for to help fans and businesses identify you.
                </p>

                <textarea className='ring-1 ring-gray-400 w-full py-[10px] rounded-lg text-sm resize-none
                px-[15px] text-gray-800 outline-none focus:ring-[#FB5870] bg-white mt-[20px] h-[125px]'
                    placeholder="What are you most known for in your celebrity career? What sets you apart as a celebrity, and what makes you stand out in your profession?"
                    value={professionalInfo.description}
                    onChange={(e) => setProfessionalInfo({ ...professionalInfo, description: e.target.value })}>
                </textarea>
            </div>

            <div className="flex flex-col mt-[35px]">
                <h2 className="text-xl font-[600] mb-[15px]">Projects & Products</h2>
                <p>
                    Please provide a list of no more than 4 main products or projects
                    you have participated in during your celebrity career.
                </p>

                <div className='flex flex-col gap-y-[15px] mt-[25px]'>
                    {professionalInfo.products.map((item: string, index: number) =>
                        <div className='flex flex-row items-center gap-x-[15px]' key={index}>
                            <span className='ring-1 ring-gray-400 w-[300px] 
                            py-[7px] rounded-lg px-[15px] text-gray-800 text-sm'>
                                {item[0].toUpperCase() + item.slice(1)}
                            </span>

                            <MdClose className='text-2xl text-gray-400 cursor-pointer'
                                onClick={() => handleRemove(item)} />
                        </div>
                    )}

                    {(professionalInfo.products.length < 4) &&
                        <input className='ring-1 ring-gray-400 w-[300px] py-[7px] rounded-lg text-sm
                        px-[15px] text-gray-800 outline-none focus:ring-[#FB5870] bg-white'
                            placeholder='Add a project or product...' value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />}
                </div>

                <button onClick={handleProduct} className={`flex flex-row items-center
                gap-x-[10px] border rounded-xl pl-[15px] pr-[25px] py-[7px] mt-[25px] w-fit  
                ${(professionalInfo.products.length < 4) ? 'border-black' : 'text-gray-500 border-gray-500 cursor-no-drop'}`}>
                    <AiOutlinePlus className='text-xl' />
                    <span>Add project</span>
                </button>
            </div>

            <div className="flex flex-col mt-[35px]">
                <h2 className="text-xl font-[600] mb-[15px]">Categories</h2>
                <p>
                    Select categories that best represent your area of expertise.
                </p>

                <div className="flex flex-row flex-wrap items-center gap-x-[25px] gap-y-5 mt-[20px]">
                    {professionalInfo.categories?.map((i: string, index: number) =>
                        <span className='px-[13px] py-[5px] rounded-full 2xl:text-lg border shadow-sm
                 text-[#646868] bg-white transition-colors duration-500' key={index}>
                            {capitalizeWords(i)}
                        </span>
                    )}

                    <button className="flex flex-row items-center gap-x-[10px] ml-2" onClick={() => setEdit(true)}>
                        <GoPencil className='text-lg' />
                        <span className="underline underline-offset-4">Edit</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-row items-center gap-x-[40px] mt-[40px]">
                <button type='submit' className={`font-[500] border border-[#FB5870] transition-colors 
                duration-300 px-[30px] py-[10px] rounded-xl ${compareObjects(defaultProfessional, professionalInfo) ?
                        'bg-none text-[#dd6073] cursor-not-allowed opacity-90' :
                        'bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white'}`}
                    disabled={compareObjects(defaultProfessional, professionalInfo)}
                    onClick={handleSubmit}>
                    Save Changes
                </button>

                {!compareObjects(defaultProfessional, professionalInfo) &&
                    <button className="text-[#D14157] underline" onClick={handleCancel}>
                        Cancel
                    </button>}
            </div>

            {edit && <CelCategories professionalInfo={professionalInfo}
                setProfessionalInfo={setProfessionalInfo} setEdit={setEdit} />}
        </div>
    )
}

export default CelProfessionalInfo