import BasicInfo from "@/components/fan-profile/basic"
import InterestsInfo from "@/components/fan-profile/interests"
import SocialInfo from "@/components/fan-profile/social-links"
import VerificationInfo from "@/components/fan-profile/verification"
import FooterSection from "@/components/landing/footer"
import NavSection from "@/components/landing/nav"
import Spinner from "@/components/spinner"
import { gql, useMutation, useQuery } from "@apollo/client"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"

const sections = ['Profile', 'Messages', 'Experiences',
    'Balance & Payments', 'Wishlist', 'Settings']

const parts = ['Basic Information', 'Interests', 'Verification', 'Social Media']

const PROFILE = gql`
query getFanById($id: String) {
    getFanById(id: $id) {
        id
        name
        email
        location
        birthYear
        interests
        identityVerified
        locationVerified
        locationImg
        identityImg
        selfieImg
        selfieVerified
        userId
        user {
            profilePic
        }
    }
}`

const UPDATE_FAN = gql`
    mutation updateFan($fan: FanInput) {
        updateFan(fan: $fan) {
            id
        }
    }`

const UPDATE_USER = gql`
    mutation updateFan($user: UserInput) {
        updateUser(user: $user) {
            id
        }
    }`

const FanProfile: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    const { loading, data, refetch } = useQuery<any>(PROFILE, { variables: { id } });

    const [selectedSection, setSelectedSection] = useState(sections[0])
    const [selectedPart, setSelectedPart] = useState(parts[0])

    const [updateFan] = useMutation(UPDATE_FAN);
    const [updateUser] = useMutation(UPDATE_USER);

    if (loading) return (
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
                <title>FameFusion | {data?.getFanById?.name}</title>
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

                <div className="flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] gap-x-[25px]">
                    <ul className="shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl w-[300px] py-[15px] h-fit">
                        {parts.map((item, index) => 
                            <li onClick={() => setSelectedPart(item)} key={index} className={`pl-[25px] py-[10px]
                            ${selectedPart === item ? 'text-[#FB5870] font-[600] border-[#FB5870]' : 'border-white'} 
                            border-l-[2px]  cursor-pointer`}>{item}</li>
                        )}
                    </ul>

                    <div className="w-full">
                        <BasicInfo data={data} updateFan={updateFan} 
                        updateUser={updateUser} refetch={refetch} />

                        <InterestsInfo data={data} updateFan={updateFan} refetch={refetch} />

                        <VerificationInfo data={data} updateFan={updateFan} />

                        <SocialInfo />
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default FanProfile