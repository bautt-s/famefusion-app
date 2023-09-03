import FooterSection from "@/components/landing/footer";
import NavSection from "@/components/landing/nav";
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

const Roles = () => {
    const dispatch = useDispatch()
    const { user }: { user: User } = useKindeAuth();
    const fanData = useSelector((state: RootState) => state.fan.fanData)
    
    const [userId, setUserId] = useState<string>('')

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

    const [createUser, { data: createdUserData, loading: createdUserLoading, error: createdUserError }] =
        useMutation(CREATE_USER, {
            variables: {
                user: {
                    name: user?.name,
                    email: user?.email
                }
            }
        });

    useEffect(() => {
        if (dataUser?.getUserByEmail === null) setUserId(createdUserData?.createUser?.id)
        else setUserId(dataUser?.getUserByEmail?.id)
    }, [createdUserData])

    useEffect(() => {
        if (!loadingUser && dataUser?.getUserByEmail === null) createUser()

        if (fanData?.userId?.length === 0 && user) dispatch(modifyFanData({
            ...fanData, 
            userId,
            name: user.name || '',
            email: user.email || '',
        }))
    }, [loadingUser])
    console.log(userId)
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
