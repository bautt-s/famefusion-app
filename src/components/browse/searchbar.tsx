import { useSearchParams } from "next/navigation"
import { FilterProps } from "./main-browse"
import { useEffect, useState } from 'react'

const SearchbarSection: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props
    
    const searchQuery = useSearchParams()
    const searchQueryValue = searchQuery.get('search')

    const [search, setSearch] = useState('')
    
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setSelectedFilters({ ...selectedFilters, name: search })
    }

    useEffect(() => {
        if (searchQueryValue) setSearch(searchQueryValue)
    }, [searchQueryValue])

    return (
        <div className="flex flex-col items-center mt-[140px] pb-[100px] lg:pb-[60px]">
            <h1 className="outfit text-5xl font-[700] text-center leading-[55px]">Explore the <br className="lg:hidden"/>World of Celebrities</h1>

            <form className='flex flex-row mt-[25px] border-[#bec2c2] border-[1px] border-r-0 rounded-2xl' onSubmit={(e) => handleSearch(e)}>
                <input type="text" placeholder="Enter the name, keywords, category"
                value={search} onChange={(e) => setSearch(e.target.value)} className='bg-white outline-none
                rounded-l-2xl border-r-0 sm:w-[340px] lg:w-[610px] py-[10px] pl-[15px] pr-[30px]' />

                <button className='bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white 
                rounded-2xl font-[500] transition-colors duration-300 py-[12px] px-[32px] relative'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchbarSection