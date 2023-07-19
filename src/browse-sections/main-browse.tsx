import { useState } from 'react'
import Filters from '../components/filters/filters'
import { GoHeartFill } from 'react-icons/go'
import { BsStarFill } from 'react-icons/bs'

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
]

const filterItems = ['Show All', 'Featured', 'Actors', 'Athletes',
    'Comedians', 'Creators', 'Musicians', 'Professionals', 'Reality TV']

const MainBrowse: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState(filterItems[0])

    return (
        <div className="w-full flex flex-col pb-[120px]">
            <div className="flex flex-col justify-center w-full bg-[#F7F8FC] h-[100px] relative 
            px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] items-center">
                <ul className="flex flex-row gap-[20px] 2xl:gap-[25px]">
                    {filterItems.map((item, index) =>
                        <li onClick={() => setSelectedFilter(filterItems[index])} className={`px-[13px] py-[5px] rounded-full 
                        2xl:text-lg border text-[#646868] ${selectedFilter === item ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                        cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                            {item}
                        </li>
                    )}
                </ul>

                <div className="absolute left-0 bottom-[100px] flex flex-row">
                    <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-tr-[27px] z-20"></div>
                    <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative top-[10px] right-[2px] z-10">
                        <div className="w-full h-full bg-white rounded-bl-full"></div>
                    </div>
                </div>

                <div className="absolute right-0 top-[100px] flex flex-row">
                    <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative bottom-[0px] left-[2px] z-10">
                        <div className="w-full h-full bg-white rounded-tr-full"></div>
                    </div>
                    <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-bl-[27px] z-20"></div>
                </div>
            </div>

            <div className='flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] py-[60px] gap-x-[35px] justify-center'>
                <Filters />

                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>

                    </div>

                    <div className='grid grid-cols-2 xl:grid-cols-4 gap-x-[20px] gap-y-[60px]'>
                        {dummyCelebrities.map((c, index) =>
                            <div key={index} className='akatab relative w-full group'>
                                <img src={c.img} className='w-full h-[320px] object-cover object-top rounded-2xl featured-img' alt={c.name} />
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
                </div>
            </div>
        </div>
    )
}

export default MainBrowse