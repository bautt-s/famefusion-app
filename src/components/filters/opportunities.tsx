import { HiOutlineChevronDown } from 'react-icons/hi'
import { useState, useEffect } from "react"
import { FilterProps } from '../../browse-sections/main-browse'

const OpportunitiesAcc: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props
    const [opportunities, setOpportunities] = useState<string[]>([])

    const handleCheck = (val: string) => {
        if (opportunities.includes(val)) setOpportunities(opportunities.filter(o => o !== val))
        else setOpportunities([...opportunities, val])
    }

    useEffect(() => {
        if (opportunities !== selectedFilters.businessFilter) setSelectedFilters({ ...selectedFilters, businessFilter: opportunities })
    }, [opportunities])

    useEffect(() => {
        if (opportunities.length) setOpportunities(selectedFilters.businessFilter)
    }, [selectedFilters.businessFilter])

    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.businessFilter.includes('media-promotion')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('media-promotion')} />Media Promotion</label>
                <span className="flex ml-auto">17</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.businessFilter.includes('events')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('events')} />Event Attendance</label>
                <span className="flex ml-auto">121</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.businessFilter.includes('partnerships')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('partnerships')} />Affiliate Partnerships</label>
                <span className="flex ml-auto">90</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.businessFilter.includes('reviews')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('reviews')} />Reviews</label>
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