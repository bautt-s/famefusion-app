import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { BsCheckLg } from "react-icons/bs"
import { CiFacebook } from "react-icons/ci"

const SettingsSecurity: React.FC = () => {
    const { getToken } = useKindeAuth();

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    };

    const inputBody = `{
        "is_password_reset_requested": true
      }`;

    const resetPassword = () => {
        fetch(`${process.env.NEXT_PUBLIC_ISSUER_URL}/api/v1/user`,
            {
                method: 'PATCH',
                body: inputBody,
                headers: headers
            })
            .then(function (res) {
                console.log(res.json())
            }).then(function (body) {
                console.log(body);
            });

        alert('Next time you log in, password will need a reset')
    }

    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='security'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Login & Security</h1>

            <div className="flex flex-col gap-y-[25px]">
                <div className="flex flex-col gap-y-[10px]">
                    <h3 className="text-lg font-[500]">Password</h3>

                    <div className="flex flex-row">
                        <div className="flex flex-row items-center gap-x-[15px]">
                            <BsCheckLg className='text-2xl text-[#006015]' />
                            <span>Password has been set</span>
                        </div>

                        <button onClick={resetPassword} className="underline underline-offset-4 font-[600] ml-auto">
                            Update
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[10px]">
                    <h3 className="text-lg font-[500]">Social Account</h3>

                    <div className="flex flex-row">
                        <div className="flex flex-row items-center gap-x-[15px]">
                            <CiFacebook className='text-2xl' />
                            <span>Log in with Facebook</span>
                        </div>

                        <span className="text-[#979B9B] font-[600] ml-auto">
                            Connected
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsSecurity