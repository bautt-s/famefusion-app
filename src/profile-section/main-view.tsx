import { useState } from "react"
import ProfileSidebar from "../components/profile-view/side-bar"
import AboutPanel from "../components/profile-view/about"

// notes: there's an attribute missing for social network links
const hailey = {
    id: 0,
    name: 'Hailey Bieber',
    description: 'American model',
    rating: 4.97,
    startingPrice: 100,
    img: 'https://i.pinimg.com/originals/6d/ec/8b/6dec8b8780f11ee59849c01a8e8f2e79.jpg',
    location: 'United States, Los Angeles',
    age: 26,
    gender: 'female',
    languages: ['english', 'spanish'],
    imgGallery: ['https://i.pinimg.com/originals/1f/f6/63/1ff663c8f92a7187a8f886c1b940cd09.jpg', 'https://hips.hearstapps.com/hmg-prod/images/levi-s-unbasic-hoodie-in-white-1554485718.jpg'
    ,'https://s.yimg.com/ny/api/res/1.2/t4LoBHQeKMMGFZdh5hqRGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTE0NDA7Y2Y9d2VicA--/https://media.zenfs.com/en/list_wire_usa_today_articles_325/c89984a74177d4ec4143e2247d6c3f02'],
    availability: [],
    associatedBrands: ['Guess', 'Ralph Lauren', 'Vogue', 'Tommy Hilfiger'],
    longDescription: 'Hailey Bieber is a renowned model and influencer, known for her captivating presence on both runways and social media. With a meteoric rise to fame, she has graced the covers of leading fashion magazines and collaborated with esteemed designers worldwide. Her style and personality have made her a global icon.',
    interests: ['fitness', 'travel', 'photography', 'philantrophy'],
    followers: { instagram: 123000, twitter: 85000, tiktok: 465000, facebook: 243000 },
    experiences: {
        offlineExp: [],
        onlineExp: []
    },
    collaborations: {
        offlineCollabs: [],
        onlineCollabs: []
    },
    reviews: [],
    video: 'https://media.vogue.co.jp/photos/5d311a774946e60008bda672/master/w_1600%2Cc_limit/hailey-baldwin1.jpg'
}

const sectionsList = ['About', 'Experiences', 'Business Opportunities', 'Availability', 'Reviews']

const MainView: React.FC = () => {
    const [section, setSection] = useState(sectionsList[0])

    return (
        <div className="mt-[120px] flex flex-col px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">

            <div className="flex akatab font-[500]" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="/browse" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Browse Celebrity</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ml-1 text-gray-500 md:ml-2 dark:text-gray-400">{hailey.name}</span>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="flex flex-row w-full mt-[45px]">
                <ProfileSidebar name={hailey.name} description={hailey.description} rating={hailey.rating} img={hailey.img} location={hailey.location}
                    startingPrice={hailey.startingPrice} age={hailey.age} gender={hailey.gender} languages={hailey.languages} />

                <div className="flex flex-col ml-[35px] grow">
                    <ul className="flex flex-row gap-[25px]">
                        {sectionsList.map((item, index) =>
                            <li onClick={() => setSection(sectionsList[index])} className={`px-[16px] py-[8px] rounded-full 
                        border text-[#646868] ${section === item ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                        cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                                {item}
                            </li>
                        )}
                    </ul>

                    <AboutPanel name={hailey.name} imgGallery={hailey.imgGallery} associatedBrands={hailey.associatedBrands} 
                    longDescription={hailey.longDescription} followers={hailey.followers} interests={hailey.interests} video={hailey.video} />
                </div>
            </div>

        </div>
    )
}

export default MainView