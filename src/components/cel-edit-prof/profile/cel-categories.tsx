import { capitalizeWords } from "@/utils/functions"
import { allCategories } from "@/utils/hardcode"
import { TfiClose } from "react-icons/tfi"

const CelCategories: React.FC<any> = (props) => {
    const { professionalInfo, setProfessionalInfo, setEdit } = props

    const handleChange = (item: string) => {
        if (!professionalInfo.categories.includes(item)) {
            if (professionalInfo.categories.length < 6) 
                setProfessionalInfo({ 
                    ...professionalInfo, 
                    categories: [...professionalInfo.categories, item] 
            })
        }

        else {
            if (professionalInfo.categories.length > 3) setProfessionalInfo({ 
                ...professionalInfo, 
                categories: professionalInfo.categories.filter((i: string) => i !== item) 
            })
        }
    }
    
    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setEdit(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center">
                    <span className='outfit text-4xl font-[700]'>Category</span>
                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setEdit(false)} />
                </div>

                <div className="mt-[20px]">
                    <span>Select between 3 to 6 categories that best represent your area of expertise.</span>

                    <ul className="flex flex-row flex-wrap gap-[20px] 2xl:gap-[25px] mt-[30px]">
                        {allCategories.map((item: string, index: number) =>
                            <li onClick={() => handleChange(item)} className={`px-[13px] py-[5px] rounded-full
                            2xl:text-lg border text-[#646868] 
                            ${professionalInfo.categories.includes(item) ? 
                            'bg-[#1f1f1f] text-white' : 'bg-white'}
                            cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                                {capitalizeWords(item)}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CelCategories