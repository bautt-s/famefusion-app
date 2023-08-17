import { GoChevronLeft, GoChevronRight, GoHeartFill } from 'react-icons/go'
import { BsStarFill } from 'react-icons/bs'
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react'
import Link from 'next/link'

type FeaturedProps = { title: string }

export type StarType = {
    id: number,
    name: string,
    description: string,
    rating: number,
    profilePic: string,
    workList: {
        price: number
    }[]
}

const loadingArray = ['loading', 'loading', 'loading', 'loading', 'loading']

const FeaturedSection: React.FC<FeaturedProps> = (props) => {

    const { title } = props

    const FEATURED = gql`
    query getCelebrities {
        getAllCelebrities {
            id,
            name,
            description,
            rating,
            profilePic,
            workList {
                price
            }
        }
    }`

    const { loading, error, data } = useQuery(FEATURED);

    const [featured, setFeatured] = useState<StarType[]>([])
    const [limit, setLimit] = useState(5)

    let screenWidth = 0
    if (typeof window !== 'undefined') screenWidth = window.innerWidth

    const starsShowed = screenWidth > 1150 ? 5 : 4

    const handleFeatured = (mode: 'asc' | 'desc') => {
        if (mode === 'asc') {
            if (limit < data?.getAllCelebrities?.length) setLimit(limit + 1)
        } else {
            if (limit > starsShowed) setLimit(limit - 1)
        }
    }

    useEffect(() => {
        setFeatured(data?.getAllCelebrities?.slice(limit - starsShowed, limit))
    }, [limit, starsShowed, data])
    
    return (
        <section className='w-full flex flex-col px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] pb-[140px] sm:pb-0 mt-[120px]'>
            <div className='flex flex-row items-center'>
                <h2 className='text-4xl outfit font-[600] tracking-tight'>
                    {title}
                </h2>

                <div className='flex flex-col sm:flex-row items-center gap-y-[10px] sm:gap-y-0 gap-x-[25px] ml-auto'>
                    <button className='akatab underline underline-offset-2 text-lg font-[500]'>
                        Show (112)
                    </button>

                    <div className='flex flex-row gap-[15px]'>
                        <button onClick={() => handleFeatured('desc')}
                            className='rounded-full border p-[7px] text-xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                            <GoChevronLeft />
                        </button>

                        <button onClick={() => handleFeatured('asc')}
                            className='rounded-full border p-[7px] text-xl hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                            <GoChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            {error &&
                <div className='w-full flex justify-center items-center pt-[40px] pb-[250px]'>
                    <span className='akatab text-xl text-[#FB5870]'>Error: could not get stars.</span>
                </div>
            }

            {loading &&
                <div className='grid grid-cols-2 gap-y-[80px] lg:flex flex-row mt-[45px] gap-[25px] lg:h-[600px] w-full'>
                    {loadingArray.slice(0, limit).map((item, index) => 
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
                <div className='grid grid-cols-2 gap-y-[80px] lg:flex flex-row mt-[45px] gap-[25px] lg:h-[600px]'>
                    {featured?.map((c: StarType, index: number) =>
                        <div key={index} className='akatab relative w-full group'>
                            <GoHeartFill className='absolute top-0 right-0 text-2xl text-[#B1B4B4] cursor-pointer
                        hover:text-[#FB5870] heart-shadow mt-[10px] mr-[10px] transition-colors duration-300 z-50' />

                            <Link href={`/browse/${c.id}`}>
                                <img src={c.profilePic} className='w-full object-cover rounded-2xl 
                                featured-img group-hover:scale-105 transition-all duration-300 select-none' alt={c.name} />

                                <div className='flex flex-col sm:flex-row mt-[15px]'>
                                    <h4 className='text-2xl font-[600] max-w-[3ch] sm:max-w-none'>{c.name}</h4>

                                    <div className='flex flex-row items-center sm:ml-auto'>
                                        <BsStarFill className='text-sm' />
                                        <span className='ml-[10px] mt-[2px]'>{c.rating}</span>
                                    </div>
                                </div>

                                <p className='text-lg leading-[25px] my-[15px] text-[#646868] min-h-[50px]'>
                                    {c.description.length > 62 ? c.description.slice(0, 62) + '...' : c.description}
                                </p>

                                <span className='font-[600] text-lg lg:absolute lg:bottom-[185px] 2xl:bottom-[27%]'>
                                    {c?.workList[0]?.price ? `From €${c?.workList[0]?.price}` : 'Learn more'}
                                </span>
                            </Link>
                        </div>
                    )}
                </div>}
        </section>
    )
}

export default FeaturedSection