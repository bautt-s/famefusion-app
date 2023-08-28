import { useEffect, useState } from "react"
import { LinearProgress, linearProgressClasses, styled } from "@mui/material"

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

const CelSignup: React.FC = () => {
    const [progress, setProgress] = useState(0)

    const [userData, setUserData] = useState({
        stage: 1,
        location: '',
        birthYear: null,
        interests: [],
        identity: null,
        address: null,
        warning: ''
    })

    const [temp, setTemp] = useState({
        location: '',
        birthYear: {
            startDate: null,
            endDate: null
        },
        interests: [],
        identity: null,
        address: null,
    })

    const handleSkip = () => {
        if (userData.stage > 1) setUserData({ ...userData, stage: userData.stage + 1, warning: '' })
    }

    const handleBack = () => {
        if (userData.stage > 1) setUserData({ ...userData, stage: userData.stage - 1, warning: '' })
    }

    const handleNext = () => {
        if (userData.stage === 1 && temp.location.length > 0)
            setUserData({ ...userData, stage: 2, location: temp.location, warning: '' })

        else if (userData.stage === 2 && temp.birthYear.startDate)
            setUserData({ ...userData, stage: 3, birthYear: temp.birthYear.startDate, warning: '' })

        else if (userData.stage === 3 && temp.interests.length >= 3 && temp.interests.length <= 6)
            setUserData({ ...userData, stage: 4, interests: [...temp.interests], warning: '' })

        else if (userData.stage === 4 && temp.address)
            setUserData({ ...userData, stage: 5, warning: '' })

        else if (userData.stage === 5 && temp.identity)
            setUserData({ ...userData, stage: 6, warning: '' })


        // warning set list
        else if (userData.stage === 1 && temp.location.length < 1)
            setUserData({ ...userData, warning: 'You must insert a location.' })

        else if (userData.stage === 2 && !temp.birthYear.startDate)
            setUserData({ ...userData, warning: 'You must provide a date.' })

        else if (userData.stage === 3 && !(temp.interests.length >= 3 && temp.interests.length <= 6))
            setUserData({ ...userData, warning: 'You must provide three to six interests.' })

        else if (userData.stage === 4 && !temp.address)
            setUserData({ ...userData, warning: 'You must provide address verification.' })

        else if (userData.stage === 5 && !temp.identity)
            setUserData({ ...userData, warning: 'You must provide identity verification.' })
    }

    useEffect(() => {
        if (window) window.scrollTo(0, 0)

        const percentage = userData.stage * 100 / 5
        setProgress(percentage)
    }, [userData.stage])

    return (
        <div className="flex flex-col pt-[140px] pb-[60px] akatab px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
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