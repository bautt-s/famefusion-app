import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react'
import FeaturedCard from './featured-card';

type FeaturedProps = { title: string }

export type StarType = {
    id: string,
    name: string,
    description: string,
    rating: number,
    associatedUser: {
        profilePic: string,
    }
    workList: {
        price: number
    }[]
}

const loadingArray = new Array(5).fill('loading')

const FeaturedSection: React.FC<FeaturedProps> = (props) => {
    const { title } = props

    const FEATURED = gql`
    query getCelebrities {
        getAllCelebrities {
            id,
            name,
            description,
            rating,
            associatedUser {
                profilePic
            }
            workList {
                price
            }
            savedIDs
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
                            <div className='w-full h-[200px] bg-gray-500 animate-pulse rounded-2xl'></div>
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
                        <FeaturedCard key={index} c={c} />
                    )}
                </div>}
        </section>
    )
}

export default FeaturedSection