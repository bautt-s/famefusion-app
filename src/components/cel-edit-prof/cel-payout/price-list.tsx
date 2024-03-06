const PriceList: React.FC = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='price-list'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Price List</h1>

            <span>Select your messaging preference:</span>

            <div className="flex flex-col gap-y-[15px] mt-4">
                <div className="flex flex-row items-center gap-x-[20px] 
                ring-1 ring-gray-400 w-fit py-[7px] pl-[15px] pr-[25px] rounded-lg">
                    <input type='radio' className='w-[20px] h-[20px] accent-[#FB5870] cursor-pointer' />
                    <span>Earn money for each message received.</span>
                </div>

                <div className="flex flex-row items-center gap-x-[20px] 
                ring-1 ring-gray-400 w-fit py-[7px] pl-[15px] pr-[25px] rounded-lg">
                    <input type='radio' className='w-[20px] h-[20px] accent-[#FB5870] cursor-pointer' />
                    <span>Do not earn money for received messages.</span>
                </div>
            </div>
        </div>
    )
}

export default PriceList