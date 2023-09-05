import { useState, useEffect } from 'react'
import Filters from './filters/filters'
import { GoHeartFill } from 'react-icons/go'
import { BsStarFill } from 'react-icons/bs'
import FilterTag from './filters/filter-tag'
import { useQuery, gql } from "@apollo/client";
import Link from 'next/link'
import { StarType } from '../landing/featured-stars'
import { filterItems } from '@/utils/hardcode'

const loadingArray = new Array(8).fill('loading')

export type FilterProps = {
    setSelectedFilters: Function,
    selectedFilters: {
        location: string

        price: {
            range: boolean,
            min: number,
            max: number,
        }

        availability: {
            startDate: Date | undefined
            endDate: Date | undefined
        }

        ageFilter: string[],
        ageGroup: number[],
        languages: string[],
        gender: string[],
        interests: string[],
        opportunities: string[],
        category: string,
        name: string
    }
}

const MainBrowse: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props

    const BROWSE = gql`
    query getFilteredCelebrities($filterObj: DataFilter) {
        getFilteredCelebrities(filter: $filterObj) {
            id,
            name,
            description,
            rating,
            associatedUser {
                profilePic
            }
            categories,
            workList {
                price
            }
        }
    }`

    const [selectedCategory, setSelectedCategory] = useState(filterItems[0])

    const { loading, error, data, refetch } = useQuery(BROWSE, { variables: { filterObj: selectedFilters } });

    const handleClear = () => {
        setSelectedFilters({
            location: '',

            price: {
                range: false,
                min: 0,
                max: 100
            },

            availability: {
                startDate: undefined,
                endDate: undefined
            },

            ageFilter: [],
            ageGroup: [],
            languages: [],
            gender: [],
            interests: [],
            opportunities: [],
            category: '',
            name: ''
        })
    }

    const noFilters = selectedFilters.ageFilter?.length || selectedFilters.languages?.length ||
        selectedFilters.gender?.length || selectedFilters.interests?.length ||
        selectedFilters.opportunities?.length || selectedFilters.price?.range ||
        selectedFilters.availability?.startDate || selectedFilters.availability?.endDate ||
        selectedFilters.location?.length

    useEffect(() => {
        setSelectedFilters({
            ...selectedFilters, 
            category: selectedCategory === 'Show All' ? '' : selectedCategory
        })
    }, [selectedCategory])

    useEffect(() => {
        refetch()
    }, [selectedFilters])
    
    return (
        <div className="w-full flex flex-col pb-[120px]">
            <div className="flex flex-col justify-center w-full bg-[#F7F8FC] h-[240px] sm:h-[120px] xl:h-[100px] relative 
            px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] items-center">
                <ul className="flex flex-row flex-wrap gap-[20px] 2xl:gap-[25px] justify-center w-full sm:w-auto lg:w-[700px] xl:w-auto">
                    {filterItems.map((item, index) =>
                        <li onClick={() => setSelectedCategory(filterItems[index])} className={`px-[13px] py-[5px] rounded-full
                        2xl:text-lg border text-[#646868] ${selectedCategory === item ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                        cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                            {item}
                        </li>
                    )}
                </ul>

                <div className="absolute left-0 sm:bottom-[120px] xl:bottom-[100px] hidden sm:flex flex-row">
                    <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-tr-[27px] z-20"></div>
                    <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative top-[10px] right-[2px] z-10">
                        <div className="w-full h-full bg-white rounded-bl-full"></div>
                    </div>
                </div>

                <div className="absolute right-0 sm:top-[120px] xl:top-[100px] hidden md:flex flex-row">
                    <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative bottom-[0px] left-[2px] z-10">
                        <div className="w-full h-full bg-white rounded-tr-full"></div>
                    </div>
                    <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-bl-[27px] z-20"></div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] py-[60px] gap-x-[35px] justify-center'>
                <Filters setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />

                <div className='flex flex-col w-full akatab'>
                    <div className={`flex flex-row items-center gap-[20px] ${noFilters && 'mb-[45px]'} select-none`}>
                        {(selectedFilters.price?.range) &&
                            <FilterTag item={`€${selectedFilters.price?.min} - €${selectedFilters.price?.max}`}
                                setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} origin={'price'} />
                        }

                        {(selectedFilters.availability?.startDate || selectedFilters.availability?.endDate) &&
                            <FilterTag item={[selectedFilters.availability?.startDate, selectedFilters.availability?.endDate]}
                                setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} origin={'availability'} />
                        }

                        {(selectedFilters.ageFilter?.length !== 0) && selectedFilters.ageFilter?.map((a: string, index) =>
                            <FilterTag item={a} origin={'ageFilter'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.ageFilter} key={index} />
                        )}

                        {(selectedFilters.languages?.length !== 0) && selectedFilters.languages?.map((l: string, index) =>
                            <FilterTag item={l} key={index} origin={'languages'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.languages} />
                        )}

                        {(selectedFilters.gender?.length !== 0) && selectedFilters.gender?.map((g: string, index) =>
                            <FilterTag item={g} key={index} origin={'gender'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.gender} />
                        )}

                        {(selectedFilters.interests?.length !== 0) && selectedFilters.interests?.map((i: string, index) =>
                            <FilterTag item={i} key={index} origin={'interests'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.interests} />
                        )}

                        {(selectedFilters.opportunities?.length !== 0) && selectedFilters.opportunities?.map((b: string, index) =>
                            <FilterTag item={b} key={index} origin={'opportunities'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.opportunities} />
                        )}

                        {noFilters !== 0 && <button onClick={handleClear} className='text-[#D20505]'>Clear filters</button>}
                    </div>

                    {error &&
                        <div className='w-full flex justify-center items-center pt-[40px] pb-[250px]'>
                            <span className='akatab text-xl text-[#FB5870]'>Error: could not get stars.</span>
                        </div>
                    }

                    {loading &&
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[20px] gap-y-[60px] w-full'>
                            {loadingArray.map((item, index) =>
                                <div key={index} className='w-full'>
                                    <div className='w-full h-[200px] bg-gray-500 animate-pulse rounded-lg'></div>
                                    <div className='w-[150px] h-[15px] bg-gray-500 animate-pulse mt-[15px] rounded-full'></div>
                                    <div className='w-full h-[10px] bg-gray-500 animate-pulse mt-[15px] rounded-full'></div>
                                    <div className='w-full h-[10px] bg-gray-500 animate-pulse mt-[5px] rounded-full'></div>
                                    <div className='w-full h-[10px] bg-gray-500 animate-pulse mt-[5px] rounded-full'></div>
                                </div>
                            )}
                        </div>
                    }

                    {(!loading && !error) &&
                        (data?.getFilteredCelebrities !== null ?
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[20px] gap-y-[60px] w-full transition-all duration-300'>
                                {data?.getFilteredCelebrities?.map((c: StarType, index: number) =>
                                    <div key={index} className='akatab relative w-full group'>
                                        <GoHeartFill className='absolute top-0 right-0 text-2xl text-[#B1B4B4] cursor-pointer
                                hover:text-[#FB5870] heart-shadow mt-[10px] mr-[10px] transition-colors duration-300 z-50' />

                                        <Link href={`/browse/${c.id}`}>
                                            <img src={c.associatedUser.profilePic} className='w-full object-cover rounded-2xl object-top 
                                    featured-img group-hover:scale-105 transition-all duration-300 select-none' alt={c.name} />

                                            <div className='flex flex-col sm:flex-row sm:items-center mt-[15px]'>
                                                <h4 className='text-2xl font-[600]'>{c?.name}</h4>

                                                <div className='flex flex-row items-center sm:ml-auto'>
                                                    <BsStarFill className='text-sm' />
                                                    <span className='ml-[10px] mt-[2px]'>{c?.rating}</span>
                                                </div>
                                            </div>

                                            <p className='text-lg leading-[25px] my-[15px] text-[#646868] min-h-[50px] text-left'>
                                                {c?.description.length > 62 ? c?.description.slice(0, 62) + '...' : c?.description}
                                            </p>

                                            <span className='font-[600] text-lg '>
                                                {c?.workList[0]?.price ? `From €${c?.workList[0]?.price}` : 'Learn more'}
                                            </span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        :
                            <div className='w-full flex justify-center items-center pt-[40px] pb-[250px]'>
                                <span className='akatab text-xl text-[#FB5870]'>There are no celebrities that match those requirements.</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MainBrowse