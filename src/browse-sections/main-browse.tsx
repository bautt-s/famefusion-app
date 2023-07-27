import { useState } from 'react'
import Filters from '../components/filters/filters'
import { GoHeartFill } from 'react-icons/go'
import { BsStarFill } from 'react-icons/bs'
import FilterTag from '../components/filters/filter-tag'
import { Link } from 'react-router-dom'

export type FilterProps = {
    setSelectedFilters: Function,
    selectedFilters: {
        locationFilter: {
            city: string
        },

        priceFilter: {
            range: boolean,
            min: number,
            max: number,
        }

        availabilityFilter: {
            startDate: Date | undefined
            endDate: Date | undefined
        }

        ageFilter: string[]
        languageFilter: string[],
        genderFilter: string[],
        interestFilter: string[],
        businessFilter: string[],
    }
}

const dummyCelebrities = [
    {
        id: 0,
        name: 'Hailey Bieber',
        description: 'American model',
        rating: 4.97,
        startingPrice: 100,
        img: 'https://i.pinimg.com/originals/6d/ec/8b/6dec8b8780f11ee59849c01a8e8f2e79.jpg'
    },
    {
        id: 0,
        name: 'Tom Hardy',
        description: "English actor, producer and screenwriter. He's admired for his dedication to roles and chameleon-like abilities on screen.",
        rating: 5.00,
        startingPrice: 150,
        img: 'https://media.gq.com/photos/56d4902a9acdcf20275ef34c/1:1/w_120'
    },
    {
        id: 0,
        name: 'Ariana Grande',
        description: 'American singer and songwriter',
        rating: 4.98,
        startingPrice: 100,
        img: 'https://hips.hearstapps.com/hmg-prod/images/ariana-grande-brown-hair-1635503860.png'
    },
    {
        id: 0,
        name: 'Chris Hemsworth',
        description: 'Australian actor',
        rating: 4.99,
        startingPrice: 90,
        img: 'https://pbs.twimg.com/media/E-TIkcpWQAYy_Pu?format=jpg&name=4096x4096'
    },
    {
        id: 0,
        name: 'Hailey Bieber',
        description: 'American model',
        rating: 4.97,
        startingPrice: 100,
        img: 'https://i.pinimg.com/originals/6d/ec/8b/6dec8b8780f11ee59849c01a8e8f2e79.jpg'
    },
    {
        id: 0,
        name: 'Tom Hardy',
        description: "English actor, producer and screenwriter. He's admired for his dedication to roles and chameleon-like abilities on screen.",
        rating: 5.00,
        startingPrice: 150,
        img: 'https://media.gq.com/photos/56d4902a9acdcf20275ef34c/1:1/w_120'
    },
    {
        id: 0,
        name: 'Ariana Grande',
        description: 'American singer and songwriter',
        rating: 4.98,
        startingPrice: 100,
        img: 'https://hips.hearstapps.com/hmg-prod/images/ariana-grande-brown-hair-1635503860.png'
    },
    {
        id: 0,
        name: 'Chris Hemsworth',
        description: 'Australian actor',
        rating: 4.99,
        startingPrice: 90,
        img: 'https://pbs.twimg.com/media/E-TIkcpWQAYy_Pu?format=jpg&name=4096x4096'
    },
    {
        id: 0,
        name: 'Hailey Bieber',
        description: 'American model',
        rating: 4.97,
        startingPrice: 100,
        img: 'https://i.pinimg.com/originals/6d/ec/8b/6dec8b8780f11ee59849c01a8e8f2e79.jpg'
    },
    {
        id: 0,
        name: 'Tom Hardy',
        description: "English actor, producer and screenwriter. He's admired for his dedication to roles and chameleon-like abilities on screen.",
        rating: 5.00,
        startingPrice: 150,
        img: 'https://media.gq.com/photos/56d4902a9acdcf20275ef34c/1:1/w_120'
    },
    {
        id: 0,
        name: 'Ariana Grande',
        description: 'American singer and songwriter',
        rating: 4.98,
        startingPrice: 100,
        img: 'https://hips.hearstapps.com/hmg-prod/images/ariana-grande-brown-hair-1635503860.png'
    },
    {
        id: 0,
        name: 'Chris Hemsworth',
        description: 'Australian actor',
        rating: 4.99,
        startingPrice: 90,
        img: 'https://pbs.twimg.com/media/E-TIkcpWQAYy_Pu?format=jpg&name=4096x4096'
    },
    {
        id: 0,
        name: 'Hailey Bieber',
        description: 'American model',
        rating: 4.97,
        startingPrice: 100,
        img: 'https://i.pinimg.com/originals/6d/ec/8b/6dec8b8780f11ee59849c01a8e8f2e79.jpg'
    },
    {
        id: 0,
        name: 'Tom Hardy',
        description: "English actor, producer and screenwriter. He's admired for his dedication to roles and chameleon-like abilities on screen.",
        rating: 5.00,
        startingPrice: 150,
        img: 'https://media.gq.com/photos/56d4902a9acdcf20275ef34c/1:1/w_120'
    },
    {
        id: 0,
        name: 'Ariana Grande',
        description: 'American singer and songwriter',
        rating: 4.98,
        startingPrice: 100,
        img: 'https://hips.hearstapps.com/hmg-prod/images/ariana-grande-brown-hair-1635503860.png'
    },
    {
        id: 0,
        name: 'Chris Hemsworth',
        description: 'Australian actor',
        rating: 4.99,
        startingPrice: 90,
        img: 'https://pbs.twimg.com/media/E-TIkcpWQAYy_Pu?format=jpg&name=4096x4096'
    },
    {
        id: 0,
        name: 'Hailey Bieber',
        description: 'American model',
        rating: 4.97,
        startingPrice: 100,
        img: 'https://i.pinimg.com/originals/6d/ec/8b/6dec8b8780f11ee59849c01a8e8f2e79.jpg'
    },
    {
        id: 0,
        name: 'Tom Hardy',
        description: "English actor, producer and screenwriter. He's admired for his dedication to roles and chameleon-like abilities on screen.",
        rating: 5.00,
        startingPrice: 150,
        img: 'https://media.gq.com/photos/56d4902a9acdcf20275ef34c/1:1/w_120'
    },
    {
        id: 0,
        name: 'Ariana Grande',
        description: 'American singer and songwriter',
        rating: 4.98,
        startingPrice: 100,
        img: 'https://hips.hearstapps.com/hmg-prod/images/ariana-grande-brown-hair-1635503860.png'
    },
    {
        id: 0,
        name: 'Chris Hemsworth',
        description: 'Australian actor',
        rating: 4.99,
        startingPrice: 90,
        img: 'https://pbs.twimg.com/media/E-TIkcpWQAYy_Pu?format=jpg&name=4096x4096'
    },
]

const filterItems = ['Show All', 'Featured', 'Actors', 'Athletes',
    'Comedians', 'Creators', 'Musicians', 'Professionals', 'Reality TV']

const MainBrowse: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(filterItems[0])
    const [selectedFilters, setSelectedFilters] = useState({
        locationFilter: {
            city: ''
        },

        priceFilter: {
            range: false,
            min: 0,
            max: 100
        },

        availabilityFilter: {
            startDate: undefined,
            endDate: undefined
        },

        ageFilter: [],
        languageFilter: [],
        genderFilter: [],
        interestFilter: [],
        businessFilter: [],
    })

    const handleClear = () => {
        setSelectedFilters({
            locationFilter: {
                city: ''
            },

            priceFilter: {
                range: false,
                min: 0,
                max: 100
            },

            availabilityFilter: {
                startDate: undefined,
                endDate: undefined
            },

            ageFilter: [],
            languageFilter: [],
            genderFilter: [],
            interestFilter: [],
            businessFilter: [],
        })
    }

    const noFilters = selectedFilters.ageFilter?.length || selectedFilters.languageFilter?.length ||
        selectedFilters.genderFilter?.length || selectedFilters.interestFilter?.length ||
        selectedFilters.businessFilter?.length || selectedFilters.priceFilter?.range ||
        selectedFilters.availabilityFilter?.startDate || selectedFilters.availabilityFilter?.endDate ||
        selectedFilters.locationFilter?.city

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
                        {(selectedFilters.priceFilter?.range) &&
                            <FilterTag item={`€${selectedFilters.priceFilter?.min} - €${selectedFilters.priceFilter?.max}`}
                                setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} origin={'priceFilter'} />
                        }

                        {(selectedFilters.availabilityFilter?.startDate || selectedFilters.availabilityFilter?.endDate) &&
                            <FilterTag item={[selectedFilters.availabilityFilter?.startDate, selectedFilters.availabilityFilter?.endDate]}
                                setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} origin={'availabilityFilter'} />
                        }

                        {(selectedFilters.ageFilter?.length !== 0) && selectedFilters.ageFilter?.map((a: string, index) =>
                            <FilterTag item={a} origin={'ageFilter'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.ageFilter} />
                        )}

                        {(selectedFilters.languageFilter?.length !== 0) && selectedFilters.languageFilter?.map((l: string, index) =>
                            <FilterTag item={l} key={index} origin={'languageFilter'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.languageFilter} />
                        )}

                        {(selectedFilters.genderFilter?.length !== 0) && selectedFilters.genderFilter?.map((g: string, index) =>
                            <FilterTag item={g} key={index} origin={'genderFilter'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.genderFilter} />
                        )}

                        {(selectedFilters.interestFilter?.length !== 0) && selectedFilters.interestFilter?.map((i: string, index) =>
                            <FilterTag item={i} key={index} origin={'interestFilter'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.interestFilter} />
                        )}

                        {(selectedFilters.businessFilter?.length !== 0) && selectedFilters.businessFilter?.map((b: string, index) =>
                            <FilterTag item={b} key={index} origin={'businessFilter'} setSelectedFilters={setSelectedFilters}
                                selectedFilters={selectedFilters} array={selectedFilters.businessFilter} />
                        )}

                        {noFilters && <button onClick={handleClear} className='text-[#D20505]'>Clear filters</button>}
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[20px] gap-y-[60px] w-full transition-all duration-300'>
                        {dummyCelebrities.map((c, index) =>
                            <div key={index} className='akatab relative w-full group'>
                                <GoHeartFill className='absolute top-0 right-0 text-2xl text-[#B1B4B4] cursor-pointer
                                hover:text-[#FB5870] heart-shadow mt-[10px] mr-[10px] transition-colors duration-300' />

                                <Link to={`/browse/${c.id}`}>
                                    <img src={c.img} className='w-full object-cover object-top rounded-2xl featured-img' alt={c.name} />

                                    <div className='flex flex-col sm:flex-row sm:items-center mt-[15px]'>
                                        <h4 className='text-2xl font-[600]'>{c.name}</h4>

                                        <div className='flex flex-row items-center sm:ml-auto'>
                                            <BsStarFill className='text-sm' />
                                            <span className='ml-[10px] mt-[2px]'>{c.rating}</span>
                                        </div>
                                    </div>

                                    <p className='text-lg leading-[25px] my-[15px] text-[#646868] min-h-[50px] text-left'>
                                        {c.description.length > 62 ? c.description.slice(0, 62) + '...' : c.description}
                                    </p>

                                    <span className='font-[600] text-lg '>From €{c.startingPrice}</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBrowse