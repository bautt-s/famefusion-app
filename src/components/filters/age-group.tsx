const AgeGroupAcc: React.FC = () => {
    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Under 30</label>
                <span className="flex ml-auto">152</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />30 - 40</label>
                <span className="flex ml-auto">139</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />40 - 50</label>
                <span className="flex ml-auto">64</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />50+</label>
                <span className="flex ml-auto">29</span>
            </div>
        </div>
    )
}

export default AgeGroupAcc