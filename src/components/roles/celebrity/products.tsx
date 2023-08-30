import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

const CelProducts: React.FC<any> = (props) => {
    const { data, setData, skip } = props
    const [inputValue, setInputValue] = useState('')

    const handleProject = () => {
        if (data.products.length < 4) {
            setData({ ...data, products: [...data.products, inputValue] })
            setInputValue('')
        }
    }

    const handleRemove = (item: string) => {
        setData({ ...data, products: data.products.filter((p: string) => p !== item) })
    }

    return (
        <div>
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    Which are the most popular products or projects you have been involved in?
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                Please provide a list of no more than 4 main products or projects you 
                have participated in during your celebrity career.
            </span>

            <div className='flex flex-col mt-[25px] gap-y-[15px]'>
                {data.products.map((item: string, index: number) =>
                    <div className='flex flex-row items-center gap-x-[15px]' key={index}>
                        <span className='ring-1 ring-gray-400 w-[300px] 
                        py-[7px] rounded-lg px-[15px] text-gray-800'>{item}</span>

                        <MdClose className='text-2xl text-gray-400 cursor-pointer' 
                        onClick={() => handleRemove(item)} />
                    </div>
                )}

                {(data.products.length < 4) &&
                    <input className='ring-1 ring-gray-400 w-[300px] py-[7px] rounded-lg
                    px-[15px] text-gray-800 outline-none focus:ring-[#FB5870]'
                    placeholder='Guess' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />}
            </div>

            <button onClick={handleProject} className={`flex flex-row items-center
             gap-x-[10px] border rounded-lg pl-[15px] pr-[25px] py-[10px] mt-[25px]  
            ${(data.products.length < 4) ? 'border-black' : 'text-gray-500 border-gray-500 cursor-no-drop'}`}>
                <AiOutlinePlus className='text-xl' />
                <span>Add project</span>
            </button>
        </div>
    )
}

export default CelProducts