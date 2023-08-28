import { capitalizeWords } from "@/utils/functions";
import { allInterests } from "@/utils/hardcode";

const FanInterests: React.FC<any> = (props) => {
    const { data, setData } = props

    const handleSelect = (item: string) => {
        if (data?.interests?.includes(item))
            setData({ ...data, interests: data?.interests?.filter((i: string) => i !== item) })

        else setData({ ...data, interests: [...data?.interests, item] })
    }
    
    return (
        <div>
            <h1 className="outfit font-[700] text-4xl mb-[5px]">
                Select some of your personal interests or hobbies
            </h1>

            <span className="text-[#646868]">
                Tell us what motivates you. Three interests minimum, six maximum.
            </span>

            <ul className="flex flex-row flex-wrap gap-[20px] 2xl:gap-[25px]
            w-full sm:w-auto lg:w-[700px] xl:w-auto mt-[40px]">
                {allInterests.map((item, index) =>
                    <li className={`px-[13px] py-[5px] rounded-full 2xl:text-lg border text-[#646868] 
                        ${data?.interests?.includes(item) ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                        cursor-pointer transition-colors duration-500 shadow-sm`} key={index}
                        onClick={() => handleSelect(item)}>
                        {capitalizeWords(item)}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FanInterests