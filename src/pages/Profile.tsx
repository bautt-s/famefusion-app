import { gql, useQuery } from "@apollo/client";
import Spinner from "../components/spinner";
import FeaturedSection from "../components/landing-sections/featured-stars";
import FooterSection from "../components/landing-sections/footer";
import HowSection from "../components/landing-sections/how-it-works";
import NavSection from "../components/landing-sections/nav";
import MainView from "../components/profile-section/main-view";
import { useParams } from "react-router-dom"
import { useEffect } from 'react'

export type celebrityId = {
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


function Profile() {
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

    const { id } = useParams()
    const { loading, error, data } = useQuery<celebrityId>(PROFILE, { variables: { id } });

    useEffect(() => {
        if (loading === true) document.title = `FameFusion | Loading...`
        else document.title = `FameFusion | ${data?.getCelebrityById?.name}`
    }, [loading])

    if (loading) return (
        <div className="flex w-full h-screen justify-center items-center">
            <Spinner />
        </div>
    )

    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <NavSection />
            <MainView data={data} />
            <HowSection />

            <div className="mt-[-25px]">
                <FeaturedSection title='You might also like' />
            </div>

            <FooterSection />
        </div>
    );
}

export default Profile;