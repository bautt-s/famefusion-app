import { FilterProps } from "../../browse-sections/main-browse"
import { useState, useEffect } from "react"

const LanguageGroup: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props
    const [languages, setLanguages] = useState<string[]>([])

    const handleCheck = (val: string) => {
        if (languages.includes(val)) setLanguages(languages.filter(l => l !== val))
        else setLanguages([...languages, val])
    }

    useEffect(() => {
        if (languages !== selectedFilters.languageFilter) setSelectedFilters({ ...selectedFilters, languageFilter: languages })
    }, [languages])

    useEffect(() => {
        setLanguages(selectedFilters.languageFilter)
    }, [selectedFilters.languageFilter])

    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.languageFilter.includes('portuguese')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('portuguese')} />Portuguese</label>
                <span className="flex ml-auto">244</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.languageFilter.includes('english')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('english')} />English</label>
                <span className="flex ml-auto">139</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.languageFilter.includes('spanish')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('spanish')} />Spanish</label>
                <span className="flex ml-auto">72</span>
            </div>

            <div className="flex flex-row items-center">
                <label className="flex gap-[7px]"><input type="checkbox" checked={selectedFilters.languageFilter.includes('french')} 
                     className="accent-[#EB5269]" onChange={() => handleCheck('french')} />French</label>
                <span className="flex ml-auto">70</span>
            </div>
        </div>
    )
}

export default LanguageGroup