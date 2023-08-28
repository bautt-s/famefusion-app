const FanLocation: React.FC<any> = (props) => {
    const { data, setData } = props

    return (
        <div>
            <h1 className="outfit font-[700] text-4xl mb-[5px]">Where are you located?</h1>

            <span className="text-[#646868]">
                Your address is used solely to find nearby matches, prioritizing your privacy.
            </span>

            <div className="bg-white py-4 mt-[25px]">
                <div className="relative bg-inherit">
                    <input type="text" id="username" name="username" value={data.location}
                     className="peer bg-transparent h-10 w-[400px] rounded-xl text-gray-700 
                     placeholder-transparent ring-1 px-4 ring-gray-500 focus:ring-[#FB5870]
                     focus:outline-none focus:border-rose-600" placeholder="Enter your city" 
                     onChange={(e) => setData({ ...data, location: e.target.value })} />

                    <label htmlFor="username" className="absolute cursor-text left-0 -top-3 text-sm 
                    text-gray-400 bg-inherit mx-1 px-2 peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 
                    peer-focus:text-[#FB5870] peer-focus:text-sm transition-all">Enter your city</label>
                </div>
            </div>
        </div>
    )
}

export default FanLocation