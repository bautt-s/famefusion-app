import { useEffect, useState } from "react"
import { celebrityId } from "@/pages/browse/[id]";
import ReviewsPanel from "./reviews";
import AvailabilityPanel from "./availability";
import OpportunitiesPanel from "./opportunities";
import ExperiencesPanel from "./experiences";
import AboutPanel from "./about";
import ProfileSidebar from "./side-bar";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { mutateLike } from "@/store/slices/likesSlice";
import { RootState } from "@/store/store";

const ADD_LIKE = gql`
    mutation addToWishlist($ids: WishlistInput) {
        addToWishlist(ids: $ids) {
            id
        }
    }`

const REMOVE_LIKE = gql`
    mutation removeFromWishlist($ids: WishlistInput) {
        removeFromWishlist(ids: $ids) {
            id
        }
    }`

type WorkListType = celebrityId['getCelebrityById']['workList'];

const MainView: React.FC<any> = (props) => {
    const { data, id } = props
    const dispatch = useDispatch()
    const fanID = useSelector((state: RootState) => state.fan.id)

    const sectionsList = ['About', 'Experiences', 'Business Opportunities', 'Availability', 'Reviews']

    const [section, setSection] = useState(sectionsList[0])
    const [collaborations, setCollaborations] = useState<WorkListType>([])
    const [experiences, setExperiences] = useState<WorkListType>([])

    const [isLiked, setLiked] = useState(false)

    const [addLike] = useMutation(ADD_LIKE);
    const [removeLike] = useMutation(REMOVE_LIKE);

    const handleLike = () => {
        setLiked(!isLiked)

        if (!isLiked) addLike({
            variables: {
                ids: {
                    id: fanID,
                    celId: id
                }
            }
        })
        else removeLike({
            variables: {
                ids: {
                    id: fanID,
                    celId: id
                }
            }
        })

        dispatch(mutateLike(data?.getCelebrityById))
    }

    useEffect(() => {
        if (data) {
            setCollaborations(data?.getCelebrityById?.workList.filter((w: any) => w.collaboration))
            setExperiences(data?.getCelebrityById?.workList.filter((w: any) => !w.collaboration))
        }
    }, [data])

    return (
        <div className="mt-[120px] flex flex-col px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] mb-[120px]">
            <div className="flex akatab font-[500]" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link href="/browse" className="ml-1 inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">Browse Celebrity</Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ml-1 md:ml-2 text-gray-400 cursor-pointer">{data?.getCelebrityById?.name}</span>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="flex flex-row w-full mt-[45px]">
                <ProfileSidebar name={data?.getCelebrityById?.name} description={data?.getCelebrityById?.description} rating={data?.getCelebrityById?.rating}
                    profilePic={data?.getCelebrityById?.associatedUser?.profilePic} birthYear={data?.getCelebrityById?.birthYear} gender={data?.getCelebrityById?.gender}
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

                    <div className="w-full h-full mt-[45px] rounded-[25px] shadow-xl border py-[32px] px-[25px]">
                        {section === 'About' &&
                            <AboutPanel name={data?.getCelebrityById?.name} media={data?.getCelebrityById?.media} associatedBrands={data?.getCelebrityById?.associatedBrands}
                                biography={data?.getCelebrityById?.biography} interests={data?.getCelebrityById?.interests} handleLike={handleLike} isLiked={isLiked} />}

                        {section === 'Experiences' &&
                            <ExperiencesPanel experiences={experiences} />}

                        {section === 'Business Opportunities' &&
                            <OpportunitiesPanel collaborations={collaborations} />}

                        {section === 'Availability' &&
                            <AvailabilityPanel />}

                        {section === 'Reviews' &&
                            <ReviewsPanel reviews={data?.getCelebrityById?.reviewList} rating={data?.getCelebrityById?.rating} />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainView