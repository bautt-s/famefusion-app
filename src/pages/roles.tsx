import FooterSection from "@/components/landing/footer";
import BusSignup from "@/components/roles/bus-signup";
import CelSignup from "@/components/roles/cel-signup";
import FanSignup from "@/components/roles/fan-signup";
import ChooseRole from "@/components/roles/role-choose";
import SignupCompleted from "@/components/roles/signup-complete";
import { RootState } from "@/store/store";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useKindeAuth, User } from "@kinde-oss/kinde-auth-nextjs";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyFanData } from "@/store/slices/fanSlice";
import { modifyBusinessData } from "@/store/slices/businessSlice";
import { modifyCelebrityData } from "@/store/slices/celebritySlice";
import { useRouter } from "next/router";
import Spinner from "@/components/spinner";
import NavSection from "@/components/landing/nav";
import { swapRole } from "@/store/slices/commonsSlice";

const Roles = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { user }: { user: User } = useKindeAuth();

    const fanData = useSelector((state: RootState) => state.fan.fanData)
    const businessData = useSelector((state: RootState) => state.business.businessData)
    const celebrityData = useSelector((state: RootState) => state.celebrity.celebrityData)

    const [userId, setUserId] = useState<string>('')
    const [displaySpinner, setDisplaySpinner] = useState(true)

    const [roleState, setRoleState] = useState({
        role: '',
        option: '',
        mainScreen: true,
        signupCompleted: false,
    })

    const USER = gql`
    query getUserByEmail($email: String) {
        getUserByEmail(email: $email) {
            id
            associatedFan {
                id  
                name
            }
            associatedBusiness {
                id
                name
            }
            associatedCelebrity {
                id
                name
            }
        }
    }`

    const CREATE_USER = gql`
    mutation createUser($user: UserInput) {
        createUser(user: $user) {
            id
        }
    }`

    const { loading: loadingUser, data: dataUser } =
        useQuery<any>(USER, { variables: { email: user?.email } });

    const [createUser, { data: createdUserData }] =
        useMutation(CREATE_USER, {
            variables: {
                user: {
                    name: user?.name,
                    email: user?.email,
                    profilePic: user?.picture || undefined
                }
            }
        });

    useEffect(() => {
        if (dataUser?.getUserByEmail === null) setUserId(createdUserData?.createUser?.id)
        else setUserId(dataUser?.getUserByEmail?.id)
    }, [createdUserData, dataUser])

    useEffect(() => {
        if (fanData?.userId?.length === 0 && user) dispatch(modifyFanData({
            ...fanData,
            userId,
            name: user.name || '',
            email: user.email || '',
        }))

        if (businessData?.userId?.length === 0 && user) dispatch(modifyBusinessData({
            ...businessData,
            userId,
            name: user.name || '',
            email: user.email || '',
        }))

        if (celebrityData?.userId?.length === 0 && user) dispatch(modifyCelebrityData({
            ...celebrityData,
            userId,
            name: user.name || '',
            email: user.email || '',
        }))
    }, [userId])

    useEffect(() => {
        if (!loadingUser && dataUser?.getUserByEmail === null) createUser()

        if (dataUser?.getUserByEmail?.associatedFan ||
            dataUser?.getUserByEmail?.associatedBusiness ||
            dataUser?.getUserByEmail?.associatedCelebrity) {
                if (dataUser?.getUserByEmail?.associatedCelebrity && !dataUser?.getUserByEmail?.associatedFan)
                dispatch(swapRole(1))

                else if (dataUser?.getUserByEmail?.associatedFan)
                dispatch(swapRole(0))

                if (!router.query.choosen) router.push('/')
                else setDisplaySpinner(false)
        } else setDisplaySpinner(false)

        if (router.query.choosen === 'celebrity') setRoleState({
            ...roleState,
            role: 'celebrity',
            mainScreen: false
        })
    }, [loadingUser])
    
    if ((!dataUser?.getUserByEmail && !createdUserData) || displaySpinner) return (
        <div className="flex w-full h-screen justify-center items-center">
            <Spinner />
        </div>
    )

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>FameFusion | Roles</title>
            </Head>

            <NavSection />

            <div>
                {roleState.mainScreen &&
                    <ChooseRole roleState={roleState} setRoleState={setRoleState} name={user?.given_name} />}

                {(roleState.role === 'fan' && !roleState.signupCompleted && !roleState.mainScreen) &&
                    <FanSignup roleState={roleState} setRoleState={setRoleState} />}

                {(roleState.role === 'celebrity' && !roleState.signupCompleted && !roleState.mainScreen) &&
                    <CelSignup roleState={roleState} setRoleState={setRoleState} />}

                {(roleState.role === 'business' && !roleState.signupCompleted && !roleState.mainScreen) &&
                    <BusSignup roleState={roleState} setRoleState={setRoleState} />}

                {roleState.signupCompleted &&
                    <SignupCompleted roleState={roleState} />}
            </div>

            <div className="mt-auto">
                <FooterSection />
            </div>
        </div>
    )
}

export default Roles
