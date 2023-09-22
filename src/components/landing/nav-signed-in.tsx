import { GoBell } from "react-icons/go"
import { useState } from 'react'
import Link from "next/link"
import { defaultImg } from "@/utils/hardcode"

const NavSignedIn: React.FC<any> = (props) => {
    const { data, loading } = props
    const [userTab, setUserTab] = useState(false)

    return (
        <div className="flex flex-row items-center gap-x-[20px]">
            <button>
                <GoBell className='text-3xl' />
            </button>

            <div className="relative akatab text-[#1f1f1f]">
                <img src={data?.getUserByEmail?.profilePic} onClick={() => setUserTab(!userTab)}
                    className="w-[40px] h-[40px] rounded-full border border-gray-400 cursor-pointer object-cover" />

                <div className={`bg-white flex-col items-center p-[25px] w-[220px] absolute top-[60px] right-[50%] 
                translate-x-[50%] rounded-2xl shadow-[0px_0px_9px_3px_rgba(0,0,0,0.15)] ${userTab ? 'flex' : 'hidden'}`}>
                    <img src={!loading ? data?.getUserByEmail?.profilePic : defaultImg}
                        className="w-[60px] h-[60px] rounded-full border border-gray-400 object-cover" />

                    <h4 className="font-[600] mt-[20px] mb-[10px] text-center">{data?.getUserByEmail?.name}</h4>

                    <div className="flex flex-col text-sm w-full items-start">
                        <Link href={`/fan/${data?.getUserByEmail?.associatedFan?.id}?section=0`}
                            className="py-[12px] hover:underline">Profile</Link>

                        <ul className="flex flex-col items-start border-y border-gray-200 w-full">
                            <Link href={`/fan/${data?.getUserByEmail?.associatedFan?.id}?section=1`}
                                className="py-[12px] hover:underline">Messages</Link>

                            <Link href={`/fan/${data?.getUserByEmail?.associatedFan?.id}?section=2`}
                                className="py-[12px] hover:underline">Experiences</Link>

                            <Link href={`/fan/${data?.getUserByEmail?.associatedFan?.id}?section=3`}
                                className="py-[12px] hover:underline">Balance & Payments</Link>

                            <Link href={`/fan/${data?.getUserByEmail?.associatedFan?.id}?section=4`}
                                className="py-[12px] hover:underline">Wishlist</Link>
                        </ul>

                        <ul className="flex flex-col items-start">
                            <Link href={`/fan/${data?.getUserByEmail?.associatedFan?.id}?section=5`}
                                className="py-[12px] hover:underline">Settings</Link>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href='/api/auth/logout' className="py-[12px] hover:underline text-[#D20505]">Log out</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSignedIn