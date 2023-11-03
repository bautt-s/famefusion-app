import FooterSection from "@/components/landing/footer"
import NavSection from "@/components/landing/nav"
import Spinner from "@/components/spinner"
import { gql, useLazyQuery, useMutation } from "@apollo/client"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import ProfileCelebritySection from "@/components/cel-edit-prof/profile"

const sections = ['Profile', 'My Activity', 'Messages',
    'Experiences', 'Prices & Payouts', 'Settings']

const PROFILE = gql`
query getCelebrityById($id: String) {
    getCelebrityById(id: $id) {
        id
        name
        email
        location
        birthYear
        description
        biography
        media
        categories
        associatedBrands
        identityVerified
        locationVerified
        locationImg
        identityImg
        selfieImg
        selfieVerified
        userId
        gender
        languages
        websiteLink
        instagramLink
        facebookLink
        youtubeLink
        tiktokLink
        twitterLink
        associatedUser {
            profilePic
        }
    }
}`

const UPDATE_CEL = gql`
    mutation updateCelebrity($celebrity: CelebrityInput) {
        updateCelebrity(celebrity: $celebrity) {
            media
        }
    }`

const UPDATE_USER = gql`
    mutation updateFan($user: UserInput) {
        updateUser(user: $user) {
            id
        }
    }`

const CelProfile: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    const searchParams = useSearchParams()
    const s = searchParams.get('section')

    const [getCel, { loading, data, refetch }] = useLazyQuery<any>(PROFILE, { variables: { id } });

    const [selectedSection, setSelectedSection] = useState(sections[0])

    const [updateCel, { data: updateCelData }] = useMutation(UPDATE_CEL);
    const [updateUser] = useMutation(UPDATE_USER);

    useEffect(() => {
        if (s) setSelectedSection(sections[parseInt(s)])
    }, [s])

    useEffect(() => {
        if (id) getCel()
    }, [id])

    if (loading || !data) return (
        <div className="flex w-full h-screen justify-center items-center">
            <Head>
                <title>FameFusion | Loading...</title>
            </Head>

            <Spinner />
        </div>
    )

    return (
        <div>
            <Head>
                <title>FameFusion | {data?.getCelebrityById?.name}</title>
            </Head>

            <NavSection />

            <div className="pt-[160px] pb-[80px] akatab">
                <div className="flex flex-col justify-center w-full bg-[#F7F8FC] h-[240px] sm:h-[120px] xl:h-[100px] relative 
                px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] mb-[80px]">
                    <ul className="flex flex-row flex-wrap gap-[20px] 2xl:gap-[25px] w-full sm:w-auto lg:w-[700px] xl:w-auto">
                        {sections.map((item, index) =>
                            <li onClick={() => setSelectedSection(sections[index])} className={`px-[13px] py-[5px] rounded-full
                            2xl:text-lg border text-[#646868] ${selectedSection === item ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                            cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                                {item}
                            </li>
                        )}
                    </ul>

                    <div className="absolute left-0 sm:bottom-[120px] xl:bottom-[100px] hidden sm:flex flex-row">
                        <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-tr-[27px] z-20"></div>
                        <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative top-[10px] right-[2px] z-10">
                            <div className="w-full h-full bg-white rounded-bl-full"></div>
                        </div>
                    </div>

                    <div className="absolute right-0 sm:top-[120px] xl:top-[100px] hidden md:flex flex-row">
                        <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative bottom-[0px] left-[2px] z-10">
                            <div className="w-full h-full bg-white rounded-tr-full"></div>
                        </div>
                        <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-bl-[27px] z-20"></div>
                    </div>
                </div>

                {selectedSection === 'Profile' &&
                    <ProfileCelebritySection data={data} updateCel={updateCel}
                        updateUser={updateUser} refetch={refetch} updateCelData={updateCelData} />}
            </div>

            <FooterSection />
        </div>
    )
}

export default CelProfile