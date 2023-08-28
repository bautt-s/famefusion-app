import FooterSection from "@/components/landing/footer";
import NavSection from "@/components/landing/nav";
import FanSignup from "@/components/roles/fan-signup";
import ChooseRole from "@/components/roles/role-choose";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useKindeAuth, User } from "@kinde-oss/kinde-auth-nextjs";
import Head from "next/head";
import { useState } from "react";

const Roles = () => {
    const { user }: { user: User } = useKindeAuth();
    const [selectedOption, setSelectedOption] = useState<null | string>(null)
    const [selectedRole, setSelectedRole] = useState<null | string>(null)

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
        <div>
            <Head>
                <title>FameFusion | Roles</title>
            </Head>

            <NavSection />

            <div>
                {
                    !selectedRole &&
                    <ChooseRole selectedOption={selectedOption} setSelectedOption={setSelectedOption}
                        name={user?.given_name} setSelectedRole={setSelectedRole} />
                }
                
                {
                    selectedRole === 'fan' &&
                    <FanSignup />
                }
            </div>

            <FooterSection />
        </div>
    )
}

export default Roles