const LanguageGroup: React.FC = () => {
    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Portuguese</label>
                <span className="flex ml-auto">244</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />English</label>
                <span className="flex ml-auto">139</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Spanish</label>
                <span className="flex ml-auto">72</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />French</label>
                <span className="flex ml-auto">70</span>
            </div>
        </div>
    )
}

export default LanguageGroup