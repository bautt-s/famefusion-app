import { genders } from "@/utils/hardcode"

const CelGender: React.FC<any> = (props) => {
    const { data, setData, skip } = props

    return (
        <div>
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    What’s your gender?
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                Knowing your gender is important to address you appropriately,
                understanding your unique experiences in the industry, and ensuring
                inclusive language when connecting you with fans and businesses.
            </span>

            <fieldset className="flex flex-col gap-y-[15px] mt-[40px]">
                {genders.map((g, index) =>
                    <div key={index} className="flex flex-row items-center gap-x-[20px] 
                    ring-1 ring-gray-400 w-[300px] py-[7px] pl-[15px] rounded-lg">
                        <input type='radio' className='w-[20px] h-[20px] accent-[#FB5870] cursor-pointer'
                            checked={data.gender === g} onChange={() => setData({ ...data, gender: g })} />
                        <span>{g[0].toUpperCase() + g.slice(1)}</span>
                    </div>
                )}

                <div className="flex flex-row items-center gap-x-[20px] 
                    ring-1 ring-gray-400 w-[300px] py-[7px] pl-[15px] rounded-lg">
                    <input type='radio' className='w-[20px] h-[20px] accent-[#FB5870] cursor-pointer'
                        checked={data.gender === null} onChange={() => setData({ ...data, gender: null })} />
                    <span>I prefer not to answer</span>
                </div>
            </fieldset>
        </div>
    )
}

export default CelGender