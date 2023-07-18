import { GoChevronLeft, GoChevronRight, GoHeartFill } from 'react-icons/go'
import { BsStarFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'

type StarType = {
    name: string,
    description: string,
    rating: number,
    startingPrice: number,
    img: string
}

const dummyCelebrities = [
    {
        name: 'Hailey Bieber',
        description: 'American model',
        rating: 4.97,
        startingPrice: 100,
        img: 'https://i.pinimg.com/originals/6d/ec/8b/6dec8b8780f11ee59849c01a8e8f2e79.jpg'
    },
    {
        name: 'Tom Hardy',
        description: 'English actor, producer and screenwriter',
        rating: 5.00,
        startingPrice: 150,
        img: 'https://media.gq.com/photos/56d4902a9acdcf20275ef34c/1:1/w_120'
    },
    {
        name: 'Ariana Grande',
        description: 'American singer and songwriter',
        rating: 4.98,
        startingPrice: 100,
        img: 'https://hips.hearstapps.com/hmg-prod/images/ariana-grande-brown-hair-1635503860.png'
    },
    {
        name: 'Chris Hemsworth',
        description: 'Australian actor',
        rating: 4.99,
        startingPrice: 90,
        img: 'https://pbs.twimg.com/media/E-TIkcpWQAYy_Pu?format=jpg&name=4096x4096'
    },
    {
        name: 'Madelyn Cline',
        description: 'American actress and model',
        rating: 4.97,
        startingPrice: 120,
        img: 'https://assets.ynap-content.com/story-metadata-image-1639991679929.jpeg'
    },
    {
        name: 'Tom Hiddleston',
        description: 'Famous English actor',
        rating: 5,
        startingPrice: 100,
        img: 'https://images.hdqwalls.com/wallpapers/tom-hiddleston-nm.jpg'
    },
    {
        name: 'Zoe Kravitz',
        description: 'American singer, model and actress',
        rating: 4.97,
        startingPrice: 80,
        img: 'https://media.vogue.es/photos/5f35007dbd28f824f895f5da/2:3/w_1920,c_limit/hf_105_pc_01258r-1.jpg'
    }
]

const FeaturedSection: React.FC = () => {
    const [featured, setFeatured] = useState<StarType[]>([])
    const [limit, setLimit] = useState(5)

    const screenWidth = window.innerWidth
    const starsShowed = screenWidth > 1024 ? 5 : 4
    
    const handleFeatured = (mode: 'asc' | 'desc') => {
        if (mode === 'asc') {
            if (limit < dummyCelebrities.length) setLimit(limit+1)
        } else {
            if (limit > starsShowed) setLimit(limit-1)
        }
    }

    useEffect(() => {
        setFeatured(dummyCelebrities.slice(limit-starsShowed, limit))
    }, [limit, starsShowed])

    return (
        <section className='w-full flex flex-col px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] py-[80px]'>
            <div className='flex flex-row items-center'>
                <h2 className='text-4xl outfit font-[600] tracking-tight'>
                    Featured Stars
                </h2>

                <div className='flex flex-row items-center gap-[25px] ml-auto'>
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

            <div className='grid grid-cols-2 gap-y-[80px] lg:flex flex-row mt-[45px] gap-[25px] lg:h-[600px]'>
                {featured.map((c: StarType, index: number) =>
                    <div key={index} className='akatab relative w-full group'>
                        <img src={c.img} className='w-full h-[380px] lg:group-hover:h-[420px] object-cover rounded-2xl featured-img transition-all duration-300' alt={c.name} />
                        <GoHeartFill className='absolute top-0 right-0 text-3xl text-[#B1B4B4] cursor-pointer
                        hover:text-[#FB5870] heart-shadow mt-[10px] mr-[10px] transition-colors duration-300' />

                        <div className='flex flex-row items-center mt-[15px]'>
                            <h4 className='text-2xl font-[600]'>{c.name}</h4>

                            <div className='flex flex-row items-center ml-auto'>
                                <BsStarFill className='text-sm' />
                                <span className='ml-[10px] mt-[2px]'>{c.rating}</span>
                            </div>
                        </div>

                        <p className='text-lg leading-[25px] my-[15px] text-[#646868] min-h-[50px]'>{c.description}</p>

                        <span className='font-[600] text-lg '>From €{c.startingPrice}</span>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturedSection