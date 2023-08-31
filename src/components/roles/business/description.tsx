const BusDescription: React.FC<any> = (props) => {
    const { data, setData, skip } = props

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    Describe your brand
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                Provide a brief overview of the business, its products or services, 
                and its purpose. Providing this information will enable celebrities 
                to gain deeper insights into your brand.
            </span>

            <textarea className="ring-gray-500 ring-1 px-4 py-4 text-gray-700 rounded-xl w-[400px] text-sm
            h-[100px] resize-none focus:ring-[#FB5870] focus:outline-none focus:border-rose-600 mt-[40px] bg-white"
                onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description}
                placeholder="What is your product? What are your goals? What are the company values?">
            </textarea>
        </div>
    )
}

export default BusDescription