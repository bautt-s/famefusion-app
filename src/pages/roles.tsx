import FooterSection from "@/components/landing/footer";
import NavSection from "@/components/landing/nav";
import BusSignup from "@/components/roles/bus-signup";
import CelSignup from "@/components/roles/cel-signup";
import FanSignup from "@/components/roles/fan-signup";
import ChooseRole from "@/components/roles/role-choose";
import SignupCompleted from "@/components/roles/signup-complete";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useKindeAuth, User } from "@kinde-oss/kinde-auth-nextjs";
import Head from "next/head";
import { useState } from "react";

const Roles = () => {
    const { user }: { user: User } = useKindeAuth();

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

    const { loading: loadingUser, error: errorUser, data: dataUser } =
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


    if (!loadingUser && dataUser?.getUserByEmail === null) {
        createUser()
    }

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
                <SignupCompleted />}
            </div>

            <div className="mt-auto">
                <FooterSection />
            </div>
        </div>
    )
}

export default Roles
