const GenderAcc: React.FC = () => {
    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Male</label>
                <span className="flex ml-auto">292</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Female</label>
                <span className="flex ml-auto">236</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Transgender</label>
                <span className="flex ml-auto">64</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Non-binary</label>
                <span className="flex ml-auto">29</span>
            </div>
        </div>
    )
}

export default GenderAcc