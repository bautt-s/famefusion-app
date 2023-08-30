import { capitalizeWords } from "@/utils/functions";
import { allCategories } from "@/utils/hardcode";

const CelCategories: React.FC<any> = (props) => {
    const { data, setData, skip } = props

    const handleSelect = (item: string) => {
        if (data?.categories?.includes(item))
            setData({ ...data, categories: data?.categories?.filter((i: string) => i !== item) })

        else setData({ ...data, categories: [...data?.categories, item] })
    }
    
    return (
        <div>
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    Select categories that best represent your area of expertise
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <ul className="flex flex-row flex-wrap gap-[20px] 2xl:gap-[25px]
            w-full sm:w-auto lg:w-[700px] xl:w-auto mt-[40px]">
                {allCategories.map((item, index) =>
                    <li className={`px-[13px] py-[5px] rounded-full 2xl:text-lg border text-[#646868] 
                        ${data?.categories?.includes(item) ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                        cursor-pointer transition-colors duration-500 shadow-sm`} key={index}
                        onClick={() => handleSelect(item)}>
                        {capitalizeWords(item)}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CelCategories