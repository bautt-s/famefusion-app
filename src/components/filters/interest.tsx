import { HiOutlineChevronDown } from 'react-icons/hi'
import { useState, useEffect } from "react"
import { FilterProps } from '../../browse-sections/main-browse'

const InterestAcc: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props
    const [interests, setInterests] = useState<string[]>([])

    const handleCheck = (val: string) => {
        if (interests.includes(val)) setInterests(interests.filter(i => i !== val))
        else setInterests([...interests, val])
    }

    useEffect(() => {
        if (interests !== selectedFilters.interestFilter) setSelectedFilters({ ...selectedFilters, interestFilter: interests })
    }, [interests])

    useEffect(() => {
        setInterests(selectedFilters.interestFilter)
    }, [selectedFilters.interestFilter])

    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.interestFilter.includes('cooking')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('cooking')} />Cooking</label>
                <span className="flex ml-auto">17</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.interestFilter.includes('sports')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('sports')} />Sports</label>
                <span className="flex ml-auto">121</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.interestFilter.includes('fashion')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('fashion')} />Fashion</label>
                <span className="flex ml-auto">90</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.interestFilter.includes('photography')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('photography')} />Photography</label>
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