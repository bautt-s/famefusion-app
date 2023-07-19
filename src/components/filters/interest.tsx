import { HiOutlineChevronDown } from 'react-icons/hi'

const InterestAcc: React.FC = () => {
    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Cooking</label>
                <span className="flex ml-auto">17</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Sports</label>
                <span className="flex ml-auto">121</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Fashion</label>
                <span className="flex ml-auto">90</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Photography</label>
                <span className="flex ml-auto">47</span>
            </div>

            <div className='flex flex-row items-center mt-[15px]'>
                <span className='underline underline-offset-2'>See more</span>
                <HiOutlineChevronDown className='ml-[15px]' />
            </div>
        </div>
    )
}

export default InterestAcc