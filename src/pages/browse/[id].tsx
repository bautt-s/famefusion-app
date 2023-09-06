import FeaturedSection from "@/components/landing/featured-stars";
import FooterSection from "@/components/landing/footer";
import HowSection from "@/components/landing/how-it-works";
import NavSection from "@/components/landing/nav";
import MainView from "@/components/profile/main-view";
import Spinner from "@/components/spinner";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from 'next/router'

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
                id
                title
                price
                description
                duration
                online
                collaboration
            }

            reviewList {
                id
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

    const router = useRouter()
    const { id } = router.query

    const { loading, data } = useQuery<celebrityId>(PROFILE, { variables: { id } });

    if (loading) return (
        <div className="flex w-full h-screen justify-center items-center">
            <Spinner />
        </div>
    )

    return (
        <div className="w-screen overflow-x-hidden antialiased">
            <Head>
                <title>FameFusion | {data?.getCelebrityById?.name || 'Loading...'}</title>
            </Head>

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