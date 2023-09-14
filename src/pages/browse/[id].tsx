import FeaturedSection from "@/components/landing/featured-stars";
import FooterSection from "@/components/landing/footer";
import HowSection from "@/components/landing/how-it-works";
import NavSection from "@/components/landing/nav";
import MainView from "@/components/cel-profile/main-view";
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
        languages: string[]
        birthYear: string
        gender: string
        location: string
        media: string[]
        associatedBrands: string[]
        interests: string[]

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

        associatedUser: {
            profilePic: string
        }
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
            languages,
            gender,
            location,
            media,
            associatedBrands,
            interests,
            birthYear,

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

            associatedUser {
                profilePic
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

            <MainView data={data} id={id} />
            <HowSection />

            <div className="mt-[-25px]">
                <FeaturedSection title='You might also like' id={id} />
            </div>

            <FooterSection />
        </div>
    );
}

export default Profile;