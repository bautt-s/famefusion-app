const CelDescription: React.FC<any> = (props) => {
    const { data, setData, skip } = props

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    Describe yourself
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                Briefly describe your career or profession as a celebrity and
                mention what you are famous for to help fans and businesses identify you.
            </span>

            <textarea className="ring-gray-500 ring-1 px-4 py-4 text-gray-700 rounded-xl w-[400px] text-sm
            h-[100px] resize-none focus:ring-[#FB5870] focus:outline-none focus:border-rose-600 mt-[40px] bg-white"
                onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description}
                placeholder="What are you most known for in your celebrity career?
            What sets you apart as a celebrity, and what makes you stand out in your profession?">
            </textarea>
        </div>
    )
}

export default CelDescription