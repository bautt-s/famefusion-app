import { useEffect, useState } from "react"
import ProfileSidebar from "../components/profile-view/side-bar"
import AboutPanel from "../components/profile-view/about"
import ExperiencesPanel from "../components/profile-view/experiences"
import OpportunitiesPanel from "../components/profile-view/opportunities"
import AvailabilityPanel from "../components/profile-view/availability"
import ReviewsPanel from "../components/profile-view/reviews"
import { useQuery, gql, ApolloError } from "@apollo/client";
import { useParams } from "react-router-dom"

type celebrityId = {
    getCelebrityById: {
        name: string
        biography: string
        description: string
        rating: number
        profilePic: string
        languages: string[]
        age: number
        gender: string
        location: string
        media: string[]
        associatedBrands: string[]
        interests: string[]
        video: string

        workList: {
            title: string
            price: number
            description: string
            duration: string
            online: boolean
            collaboration: boolean
        }[]

        reviewList: {
            title: string
            description: string
            images: string
            stars: number
            createdAt: Date
            author: {
                name: string
            }
        }[]
    }
}

type WorkListType = celebrityId['getCelebrityById']['workList'];

const MainView: React.FC = () => {
    const { id } = useParams()
    const sectionsList = ['About', 'Experiences', 'Business Opportunities', 'Availability', 'Reviews']

    const PROFILE = gql`
    query getCelebrityById($id: String) {
        getCelebrityById(id: $id) {
            name,
            biography,
            description,
            rating,
            profilePic,
            languages,
            age,
            gender,
            location,
            media,
            associatedBrands,
            interests,
            video

            workList {
                title
                price
                description
                duration
                online
                collaboration
            }

            reviewList {
                title
                description
                images
                stars
                createdAt
                author {
                    name
                }
            }
        }
    }`

    const { loading, error, data } = useQuery<celebrityId>(PROFILE, { variables: { id } });

    const [section, setSection] = useState(sectionsList[0])
    const [collaborations, setCollaborations] = useState<WorkListType>([])
    const [experiences, setExperiences] = useState<WorkListType>([])

    useEffect(() => {
        if (!loading) document.title = `FameFusion | ${data?.getCelebrityById?.name}`
        else document.title = `FameFusion | Loading...`

        if (data) {
            setCollaborations(data?.getCelebrityById?.workList.filter(w => w.collaboration))
            setExperiences(data?.getCelebrityById?.workList.filter(w => !w.collaboration))
        }
    }, [data])

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
                            <span className="ml-1 text-gray-500 md:ml-2 dark:text-gray-400">{data?.getCelebrityById?.name}</span>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="flex flex-row w-full mt-[45px]">
                <ProfileSidebar name={data?.getCelebrityById?.name} description={data?.getCelebrityById?.description} rating={data?.getCelebrityById?.rating} 
                profilePic={data?.getCelebrityById?.profilePic} age={data?.getCelebrityById?.age} gender={data?.getCelebrityById?.gender} 
                languages={data?.getCelebrityById?.languages} location={data?.getCelebrityById?.location} workList={data?.getCelebrityById?.workList} />

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
                        <AboutPanel name={data?.getCelebrityById?.name} media={data?.getCelebrityById?.media} associatedBrands={data?.getCelebrityById?.associatedBrands}
                            biography={data?.getCelebrityById?.biography} interests={data?.getCelebrityById?.interests} video={data?.getCelebrityById?.video} />}

                    {section === 'Experiences' &&
                        <ExperiencesPanel experiences={experiences} />}

                    {section === 'Business Opportunities' &&
                        <OpportunitiesPanel collaborations={collaborations} />}

                    {section === 'Availability' &&
                        <AvailabilityPanel />}

                    {section === 'Reviews' &&
                        <ReviewsPanel reviews={data?.getCelebrityById?.reviewList} />}
                </div>
            </div>

        </div>
    )
}

export default MainView