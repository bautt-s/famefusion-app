import { FilterProps } from "../../browse-sections/main-browse"
import { useState, useEffect } from "react"

const AgeGroupAcc: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props
    const [ages, setAges] = useState<string[]>([])

    const handleCheck = (val: string) => {
        if (ages.includes(val)) setAges(ages.filter(a => a !== val))
        else setAges([...ages, val])
    }

    useEffect(() => {
        if (ages !== selectedFilters.ageFilter) setSelectedFilters({ ...selectedFilters, ageFilter: ages })
    }, [ages])

    useEffect(() => {
        setAges(selectedFilters.ageFilter)
    }, [selectedFilters.ageFilter])
    
    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.ageFilter.includes('-30')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('-30')} />Under 30</label>
                <span className="flex ml-auto">152</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.ageFilter.includes('30 - 40')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('30 - 40')} />30 - 40</label>
                <span className="flex ml-auto">139</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.ageFilter.includes('40 - 50')} 
                     className="accent-[#EB5269]"onChange={() => handleCheck('40 - 50')} />40 - 50</label>
                <span className="flex ml-auto">64</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.ageFilter.includes('50+')} 
                     className="accent-[#EB5269]"onChange={() => handleCheck('50+')} />50+</label>
                <span className="flex ml-auto">29</span>
            </div>
        </div>
    )
}

export default AgeGroupAcc