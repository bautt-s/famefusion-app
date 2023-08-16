import { useState, useEffect } from "react"
import { FilterProps } from "../browse-sections/main-browse"

const GenderAcc: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props
    const [genders, setGenders] = useState<string[]>([])

    const handleCheck = (val: string) => {
        if (genders.includes(val)) setGenders(genders.filter(g => g !== val))
        else setGenders([...genders, val])
    }

    useEffect(() => {
        if (genders !== selectedFilters.gender) setSelectedFilters({ ...selectedFilters, gender: genders })
    }, [genders])

    useEffect(() => {
        setGenders(selectedFilters.gender)
    }, [selectedFilters.gender])

    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]">
                    <input type="checkbox" checked={selectedFilters.gender.includes('male')} 
                    className="accent-[#EB5269]" onChange={() => handleCheck('male')} />Male</label>
                <span className="flex ml-auto">292</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]">
                    <input type="checkbox" checked={selectedFilters.gender.includes('female')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('female')} />Female</label>
                <span className="flex ml-auto">236</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]">
                    <input type="checkbox" checked={selectedFilters.gender.includes('transgender')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('transgender')} />Transgender</label>
                <span className="flex ml-auto">64</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]">
                    <input type="checkbox" checked={selectedFilters.gender.includes('non-binary')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('non-binary')} />Non-binary</label>
                <span className="flex ml-auto">29</span>
            </div>
        </div>
    )
}

export default GenderAcc