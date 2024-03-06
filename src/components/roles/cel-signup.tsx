import { useEffect, useState } from "react"
import { LinearProgress, linearProgressClasses, styled } from "@mui/material"
import FanLocation from "./fan/location";
import CelAlias from "./celebrity/alias";
import CelSummary from "./celebrity/summary";
import CelDescription from "./celebrity/description";
import CelProducts from "./celebrity/products";
import CelCategories from "./celebrity/categories";
import FanBirthdate from "./fan/birthDate";
import CelGender from "./celebrity/gender";
import CelLanguages from "./celebrity/languages";
import FanInterests from "./fan/interests";
import CelSocial from "./celebrity/social";
import CelImages from "./celebrity/images";
import FanAddress from "./fan/address";
import FanIdentity from "./fan/identity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { modifyCelebrityData } from "@/store/slices/celebritySlice";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { User, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

const USER = gql`
    query getUserByEmail($email: String) {
        getUserByEmail(email: $email) {
            id
            name
            email
        }
    }`

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[300],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#1f1f1f'
    },
}));

const CelSignup: React.FC<any> = (props) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { user }: { user: User } = useKindeAuth();
    const { data, loading } = useQuery(USER, { variables: { email: user?.email } })

    const { roleState, setRoleState } = props
    const celebrityData = useSelector((state: RootState) => state.celebrity.celebrityData)

    const [progress, setProgress] = useState(0)

    const [userData, setUserData] = useState({
        stage: 1,
        location: '',
        alias: '',
        summary: '',
        description: '',
        products: [],
        categories: [],
        languages: [],
        interests: [],
        images: [],
        birthYear: {
            startDate: null,
            endDate: null
        },
        gender: '',
        identity: [],
        address: [],
        selfie: [],
        social: {
            website: '',
            instagram: '',
            tiktok: '',
            youtube: '',
            twitter: '',
            facebook: ''
        },
        warning: ''
    })

    const [temp, setTemp] = useState({
        location: '',
        alias: '',
        summary: '',
        description: '',
        products: [],
        categories: [],
        languages: [],
        interests: [],
        images: [],
        birthYear: {
            startDate: null,
            endDate: null
        },
        social: {
            website: '',
            instagram: '',
            tiktok: '',
            youtube: '',
            twitter: '',
            facebook: ''
        },
        gender: '',
        identity: [],
        address: [],
        selfie: []
    })

    const handleSkip = () => {
        if (userData.stage >= 1) setUserData({ ...userData, stage: userData.stage + 1, warning: '' })
    }

    const handleBack = () => {
        if (userData.stage > 1) setUserData({ ...userData, stage: userData.stage - 1, warning: '' })
        else if (userData.stage === 1) setRoleState({ ...roleState, mainScreen: true })
    }

    const handleNext = () => {
        if (userData.stage === 1 && temp.location.length > 0)
            setUserData({ ...userData, stage: 2, location: temp.location, warning: '' })

        else if (userData.stage === 2 && temp.alias.length > 0)
            setUserData({ ...userData, stage: 3, alias: temp.alias, warning: '' })

        else if (userData.stage === 3 && temp.summary.length > 0)
            setUserData({ ...userData, stage: 4, summary: temp.summary, warning: '' })

        else if (userData.stage === 4 && temp.description.length > 0)
            setUserData({ ...userData, stage: 5, description: temp.description, warning: '' })

        else if (userData.stage === 5 && temp.products.length > 0)
            setUserData({ ...userData, stage: 6, products: temp.products, warning: '' })

        else if (userData.stage === 6 && temp.categories.length >= 3 && temp.categories.length <= 6)
            setUserData({ ...userData, stage: 7, categories: temp.categories, warning: '' })

        else if (userData.stage === 7 && temp.birthYear.startDate)
            setUserData({ ...userData, stage: 8, birthYear: temp.birthYear.startDate, warning: '' })

        else if (userData.stage === 8)
            setUserData({ ...userData, stage: 9, gender: temp.gender, warning: '' })

        else if (userData.stage === 9 && temp.languages.length > 0)
            setUserData({ ...userData, stage: 10, languages: temp.languages, warning: '' })

        else if (userData.stage === 10 && temp.interests.length >= 3 && temp.interests.length <= 6)
            setUserData({ ...userData, stage: 11, interests: temp.interests, warning: '' })

        else if (userData.stage === 11)
            setUserData({ ...userData, stage: 12, social: temp.social, warning: '' })

        else if (userData.stage === 12)
            setUserData({ ...userData, stage: 13, images: temp.images, warning: '' })

        else if (userData.stage === 13 && temp.address.length > 0)
            setUserData({ ...userData, stage: 14, address: temp.address, warning: '' })

        else if (userData.stage === 14 && temp.identity.length > 0 && temp.selfie.length > 0)
            setUserData({ ...userData, stage: 15, identity: temp.identity, selfie: temp.selfie, warning: '' })

        // warning set list
        else if (userData.stage === 1 && temp.location.length < 1)
            setUserData({ ...userData, warning: 'You must insert a location.' })

        else if (userData.stage === 2 && temp.alias.length < 1)
            setUserData({ ...userData, warning: 'You must provide a name.' })

        else if (userData.stage === 3 && temp.summary.length < 1)
            setUserData({ ...userData, warning: 'You must provide a summary.' })

        else if (userData.stage === 4 && temp.description.length < 1)
            setUserData({ ...userData, warning: 'You must provide a description.' })

        else if (userData.stage === 5 && temp.products.length < 1)
            setUserData({ ...userData, warning: 'You must provide at least one project or product.' })

        else if (userData.stage === 6 && (temp.categories.length < 3 || temp.categories.length > 6))
            setUserData({ ...userData, warning: 'You must provide 3 to 6 categories.' })

        else if (userData.stage === 7 && !temp.birthYear.startDate)
            setUserData({ ...userData, warning: 'You must provide a date.' })

        else if (userData.stage === 8 && temp.gender === '')
            setUserData({ ...userData, warning: 'You must provide a gender.' })

        else if (userData.stage === 9 && temp.languages.length < 1)
            setUserData({ ...userData, warning: 'You must provide at least one language.' })

        else if (userData.stage === 10 && (temp.interests.length < 3 || temp.interests.length > 6))
            setUserData({ ...userData, warning: 'You must provide 3 to 6 interests.' })

        else if (userData.stage === 13 && temp.address.length === 0)
            setUserData({ ...userData, warning: 'You must provide address verification.' })

        else if (userData.stage === 14 && temp.identity.length === 0 && temp.selfie.length === 0)
            setUserData({ ...userData, warning: 'You must provide identity verification.' })
    }

    useEffect(() => {
        if (window) window.scrollTo(0, 0)

        const totalStages = 14
        const percentage = userData.stage * 100 / totalStages

        if (userData.stage > totalStages) {
            setRoleState({ ...roleState, signupCompleted: true })

            const submitedData = {
                nickname: userData.alias,
                location: userData.location,
                biography: userData.summary,
                description: userData.description,
                birthYear: typeof userData.birthYear.startDate === 'string' ? new Date(userData.birthYear.startDate) : new Date(),
                categories: userData.categories,
                interests: userData.interests,
                media: userData.images.map((i: { dataURL: string, file: any }) => i.dataURL),
                languages: userData.languages,
                gender: userData.gender,
                associatedBrands: userData.products,
                websiteLink: userData.social.website.length > 0 ? userData.social.website : undefined,
                instagramLink: userData.social.instagram.length > 0 ? userData.social.instagram : undefined,
                facebookLink: userData.social.facebook.length > 0 ? userData.social.facebook : undefined,
                tiktokLink: userData.social.tiktok.length > 0 ? userData.social.tiktok : undefined,
                youtubeLink: userData.social.youtube.length > 0 ? userData.social.youtube : undefined,
                twitterLink: userData.social.twitter.length > 0 ? userData.social.twitter : undefined,
                selfieImg: userData.selfie.length > 0 ? userData.selfie.map((i: { dataURL: string, file: any }) => i.dataURL)[0] : null,
                identityImg: userData.identity.length > 0 ? userData.identity.map((i: { dataURL: string, file: any }) => i.dataURL)[0] : null,
            }

            dispatch(modifyCelebrityData({ ...celebrityData, ...submitedData }))
        }

        else setProgress(percentage)
    }, [userData.stage])

    useEffect(() => {
        if (router.query.choosen === 'celebrity') {
            if (!loading) {
                dispatch(modifyCelebrityData({
                    ...celebrityData, 
                    name: data?.getUserByEmail?.name,
                    email: data?.getUserByEmail?.email,
                    userId: data?.getUserByEmail?.id 
                }))
            }
        }
    }, [user])

    return (
        <div className="flex flex-col pt-[140px] pb-[60px] akatab px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
            {userData.stage === 1 && <FanLocation data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 2 && <CelAlias data={temp} setData={setTemp} />}
            {userData.stage === 3 && <CelSummary data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 4 && <CelDescription data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 5 && <CelProducts data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 6 && <CelCategories data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 7 && <FanBirthdate data={temp} setData={setTemp} />}
            {userData.stage === 8 && <CelGender data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 9 && <CelLanguages data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 10 && <FanInterests data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 11 && <CelSocial data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 12 && <CelImages data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 13 && <FanAddress data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 14 && <FanIdentity data={temp} setData={setTemp} skip={handleSkip} />}

            <div className="flex flex-col mt-[80px]">
                {(userData.warning.length !== 0) &&
                    <span className="mb-[15px] text-[#e64c64]">{userData.warning}</span>}

                <BorderLinearProgress variant="determinate" value={progress} />

                <div className="flex flex-row items-center mt-[20px]">
                    <button className="font-[500] border border-gray-300 px-[30px] py-[10px] 
                    rounded-xl hover:bg-gray-50 active:bg-gray-100 duration-300 transition-colors"
                        onClick={handleBack}>
                        Back
                    </button>

                    <button className="font-[500] border bg-[#FB5870] text-white hover:bg-[#eb5269] 
                  active:bg-[#e64c63] transition-colors duration-300 px-[30px] py-[10px] rounded-xl ml-auto"
                        onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CelSignup