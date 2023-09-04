import { modifyBusinessData } from "@/store/slices/businessSlice"
import { modifyFanData } from "@/store/slices/fanSlice"
import { RootState } from "@/store/store"
import { gql, useMutation } from "@apollo/client"
import Link from "next/link"
import { useEffect } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"

const SignupCompleted: React.FC<any> = (props) => {
    const { roleState } = props
    const dispatch = useDispatch()

    const submitFanData = useSelector((state: RootState) => state.fan.fanData)
    const submitBusinessData = useSelector((state: RootState) => state.business.businessData)

    const CREATE_FAN = gql`
    mutation createFan($fan: FanInput) {
        createFan(fan: $fan) {
            id
            name
        }
    }`

    const CREATE_BUSINESS = gql`
    mutation createBusiness($business: BusinessInput) {
        createBusiness(business: $business) {
            id
            name
        }
    }`

    const getMutation = () => {
        const { role } = roleState

        if (role === 'fan') return CREATE_FAN
        else if (role === 'celebrity') return CREATE_FAN
        else return CREATE_BUSINESS
    }

    const [createRole, { data: createdData }] = useMutation(getMutation());

    const handleCreate = () => {
        const { role } = roleState

        if (role === 'fan') {
            const { name, email, location, interests, profilePic,
            userId, selfieImg, locationImg, identityImg, birthYear } = submitFanData

            dispatch(modifyFanData({ ...submitFanData, submited: true }))

            createRole({
                variables: {
                    fan: {
                        name,
                        email,
                        location,
                        birthYear,
                        interests,
                        profilePic,
                        userId,
                        selfieImg,
                        locationImg,
                        identityImg
                    }
                }
            })
        }

        else if (role === 'business') {
            const { name, email, location, profilePic, description, 
            userId, selfieImg, identityImg, categories } = submitBusinessData

            dispatch(modifyBusinessData({ ...submitBusinessData, submited: true }))
                
            createRole({
                variables: {
                    business: {
                        name,
                        email,
                        businessEmail: email,
                        location,
                        description,
                        categories,
                        profilePic,
                        userId,
                        selfieImg,
                        identityImg
                    }
                }
            })
        }
    }

    useEffect(() => {
        switch (roleState.role) {
            case 'fan': 
                if (!submitFanData.submited) handleCreate()
                break;
            case 'business': 
                if (!submitBusinessData.submited) handleCreate()
                break;
            default:
                console.log('No role assigned.')
        }
        
        console.log(createdData)
    })

    return (
        <div className="flex flex-col pt-[140px] pb-[60px] akatab px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
            <h1 className="outfit font-[700] text-4xl">
                Thank you!
            </h1>

            <p className="max-w-[70ch] my-[60px]">
                Your data is being processed, and once your documents are
                verified, you will receive an email and platform notification.
                For now, you can browse celebrities and access all their information.
            </p>

            <Link className='flex flex-row items-center text-lg text-white bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]
                 rounded-xl px-[35px] py-[12px] w-fit transition-colors duration-300' href='/browse'>
                Browse celebrities
                <FaArrowRightLong className='text-lg ml-[20px]' />
            </Link>
        </div>
    )
}

export default SignupCompleted