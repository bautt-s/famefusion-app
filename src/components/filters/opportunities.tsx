import { HiOutlineChevronDown } from 'react-icons/hi'

const OpportunitiesAcc: React.FC = () => {
    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Media Promotion</label>
                <span className="flex ml-auto">17</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Event Attendance</label>
                <span className="flex ml-auto">121</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Affiliate Partnerships</label>
                <span className="flex ml-auto">90</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" className="accent-[#EB5269]" />Reviews</label>
                <span className="flex ml-auto">47</span>
            </div>

            <div className='flex flex-row items-center mt-[15px]'>
                <span className='underline underline-offset-2'>See more</span>
                <HiOutlineChevronDown className='ml-[15px]' />
            </div>
        </div>
    )
}

export default OpportunitiesAcc