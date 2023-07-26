import { useEffect, useState } from "react"
import ProfileSidebar from "../components/profile-view/side-bar"
import AboutPanel from "../components/profile-view/about"
import ExperiencesPanel from "../components/profile-view/experiences"
import OpportunitiesPanel from "../components/profile-view/opportunities"
import AvailabilityPanel from "../components/profile-view/availability"
import ReviewsPanel from "../components/profile-view/reviews"

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
        offlineExp: [{
            title: 'Shopping',
            price: 100,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }, 
        {
            title: 'Lunch',
            price: 100,
            description: 'Savor a memorable meal in the company of Hailey Bieber.',
            duration: '4 hours'
        },
        {
            title: 'Model Lesson',
            price: 100,
            description: 'Unlock the secrets of the runway with Hailey Bieber.',
            duration: '4 hours'
        },
        {
            title: 'Shopping',
            price: 100,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }],
        onlineExp: [{
            title: 'Video Call',
            price: 100,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }, 
        {
            title: 'Personal Video',
            price: 100,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        },
        {
            title: 'Message',
            price: 100,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        },
        {
            title: 'Video Call',
            price: 100,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }]
    },
    collaborations: {
        offlineCollabs: [{
            title: 'Party Attendance',
            price: 1200,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }, 
        {
            title: 'Modelling',
            price: 540,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '1 hours'
        },
        {
            title: 'Movie Attendance',
            price: 1000,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '2 hours'
        },
        {
            title: 'Party Attendance',
            price: 1200,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }],
        onlineCollabs: [{
            title: 'Social Media Promo',
            price: 2300,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }, 
        {
            title: 'Restaurant Review',
            price: 1070,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        },
        {
            title: 'Promo Code',
            price: 900,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        },
        {
            title: 'Social Media Promo',
            price: 2300,
            description: 'Join Hailey Bieber on an exclusive shopping experience.',
            duration: '4 hours'
        }]
    },

    reviews: [{
        title: 'Guitar Lesson',
        date: 'June 15th, 2023',
        description: '“Connecting with my favorite celebrity through this platform was a dream come true! The personalized experience exceeded my expectations, and the memories I created will stay with me forever.',
        author: 'Sarah J.',
        images: [],
        stars: 4.5
    },
    {
        title: 'Lunch',
        date: 'June 14th, 2023',
        description: '“Meeting a celebrity offline was an experience I will cherish forever. The platform made it really easy to submit my request. The attention to detail were remarkable. I am grateful for the opportunity and would definitely use this platform again.”',
        author: 'Emily T.',
        images: ['https://people.com/thmb/5hLV0myPundzzVVnNimru43GyJU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/hailey-baldwin7-1-2000-5458768a4cb1449681decf53ebfb250e.jpg',
                'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/e7ljykbveautcte-1627688334.jpg?resize=660:*'],
        stars: 5
    }],

    video: 'https://media.vogue.co.jp/photos/5d311a774946e60008bda672/master/w_1600%2Cc_limit/hailey-baldwin1.jpg'
}

const sectionsList = ['About', 'Experiences', 'Business Opportunities', 'Availability', 'Reviews']

const MainView: React.FC = () => {
    const [section, setSection] = useState(sectionsList[0])

    useEffect(() => {
        document.title = `FameFusion | ${hailey.name}`
    }, [])

    return (
        <div className="mt-[120px] flex flex-col px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] mb-[120px]">

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
                    <ul className="flex flex-row flex-wrap gap-[25px]">
                        {sectionsList.map((item, index) =>
                            <li onClick={() => setSection(sectionsList[index])} className={`px-[16px] py-[8px] rounded-full 
                        border text-[#646868] ${section === item ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                        cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                                {item}
                            </li>
                        )}
                    </ul>

                    {section === 'About' && 
                    <AboutPanel name={hailey.name} imgGallery={hailey.imgGallery} associatedBrands={hailey.associatedBrands} 
                    longDescription={hailey.longDescription} followers={hailey.followers} interests={hailey.interests} video={hailey.video} />}

                    {section === 'Experiences' &&
                    <ExperiencesPanel experiences={hailey.experiences} />}
                    
                    {section === 'Business Opportunities' &&
                    <OpportunitiesPanel collaborations={hailey.collaborations} />}

                    {section === 'Availability' &&
                    <AvailabilityPanel />}

                    {section === 'Reviews' &&
                    <ReviewsPanel reviews={hailey.reviews} />}
                </div>
            </div>

        </div>
    )
}

export default MainView