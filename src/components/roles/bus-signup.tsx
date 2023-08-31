import { useEffect, useState } from "react"
import { LinearProgress, linearProgressClasses, styled } from "@mui/material"
import FanLocation from "./fan/location";
import BusName from "./business/alias";
import BusDescription from "./business/description";
import BusCategories from "./business/categories";
import CelSocial from "./celebrity/social";
import FanIdentity from "./fan/identity";

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

const BusSignup: React.FC<any> = (props) => {
    const { roleState, setRoleState } = props

    const [progress, setProgress] = useState(0)

    const [userData, setUserData] = useState({
        stage: 1,
        location: '',
        alias: '',
        description: '',
        categories: [],
        social: {
            website: null,
            instagram: null,
            tiktok: null,
            youtube: null,
            twitter: null,
            facebook: null
        },
        identity: null,
        warning: ''
    })

    const [temp, setTemp] = useState({
        location: '',
        alias: '',
        description: '',
        categories: [],
        social: {
            website: null,
            instagram: null,
            tiktok: null,
            youtube: null,
            twitter: null,
            facebook: null
        },
        identity: null,
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

        else if (userData.stage === 3 && temp.description.length > 0)
        setUserData({ ...userData, stage: 4, description: temp.description, warning: '' })

        else if (userData.stage === 4 && temp.categories.length >= 3 && temp.categories.length <= 6)
        setUserData({ ...userData, stage: 5, categories: temp.categories, warning: '' })

        else if (userData.stage === 5)
        setUserData({ ...userData, stage: 6, social: temp.social, warning: '' })

        else if (userData.stage === 6 && temp.identity)
        setUserData({ ...userData, stage: 7, warning: '' })

        // warning set list
        else if (userData.stage === 1 && temp.location.length < 1)
        setUserData({ ...userData, warning: 'You must insert a location.' })

        else if (userData.stage === 2 && temp.alias.length < 1)
        setUserData({ ...userData, warning: 'You must insert an alias.' })

        else if (userData.stage === 3 && temp.description.length < 1)
        setUserData({ ...userData, warning: 'You must insert a description.' })

        else if (userData.stage === 4 && (temp.categories.length < 3 || temp.categories.length > 6))
        setUserData({ ...userData, warning: 'You must provide 3 to 6 categories.' })

        else if (userData.stage === 7 && !temp.identity)
        setUserData({ ...userData, warning: 'You must provide identity verification.' })
    }

    useEffect(() => {
        if (window) window.scrollTo(0, 0)

        const totalStages = 6
        const percentage = userData.stage * 100 / totalStages

        if (userData.stage > totalStages) setRoleState({ ...roleState, signupCompleted: true })
        else setProgress(percentage)
    }, [userData.stage])

    return (
        <div className="flex flex-col pt-[140px] pb-[60px] akatab px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
            {userData.stage === 1 && <FanLocation data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 2 && <BusName data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 3 && <BusDescription data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 4 && <BusCategories data={temp} setData={setTemp} skip={handleSkip} />}
            {userData.stage === 5 && <CelSocial data={temp} setData={setTemp} skip={handleSkip} business={true} />}
            {userData.stage === 6 && <FanIdentity data={temp} setData={setTemp} skip={handleSkip} business={true} />}

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

export default BusSignup