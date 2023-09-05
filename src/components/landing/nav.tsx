"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { CiSearch } from 'react-icons/ci'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GoBell } from "react-icons/go";
import { gql, useQuery } from "@apollo/client";

const NavSection: React.FC = () => {
    const { user, isAuthenticated } = useKindeAuth();
    const [userTab, setUserTab] = useState(false)

    const USER = gql`
    query getUserByEmail($email: String) {
        getUserByEmail(email: $email) {
            name
            profilePic
        }
    }`

    const { data, loading } = useQuery<any>(USER, { variables: { email: user?.email } });

    const [menu, setMenu] = useState(false)
    const handleMenu = () => setMenu(!menu)

    // state and function made to show nav on upper scroll
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) setVisible(false)
        else setVisible(true)

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <nav className={`z-[999] transition-all duration-500 bg-white w-full fixed px-[40px] lg:px-[60px] border-b-[1px]
        xl:px-[120px] 2xl:px-[200px] flex flex-row items-center h-[90px] py-[25px] ${prevScrollPos ? 'border-gray-300' : 'border-white'}`}>
            <div className='flex flex-row items-center'>
                <Link href='/'>
                    <img src='/logo.png' className='lg:w-[140px] lg:h-auto xl:w-[170px] xl:h-[25px]' alt={'FameFusion Logo'} />
                </Link>

                <ul className="hidden lg:flex flex-row lg:text-sm xl:text-base akatab font-[500] lg:gap-[15px] xl:gap-[25px] 
                2xl:gap-[35px] mt-[5px] lg:ml-[25px] xl:ml-[40px] ml-[65px] nav-items">
                    <Link className="relative after:absolute after:bg-[#FB5870] after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 
                        after:transition-transform after:ease-in-out after:duration-300 cursor-pointer" href='/browse'>Browse celebrity</Link>

                    <div className="relative after:absolute after:bg-[#FB5870] after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 
                        after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">For business</div>

                    <div className="relative after:absolute after:bg-[#FB5870] after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 
                        after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">Join as talent</div>
                </ul>
            </div>

            <div className='hidden flex-row ml-auto lg:gap-[10px] xl:gap-[20px] 2xl:gap-[25px] items-center lg:flex'>
                <div className='bg-white border-[#bec2c2] border-[1px] flex flex-row items-center lg:px-[5px] xl:px-[10px] 2xl:px-[15px] rounded-xl py-[8px]'>
                    <CiSearch className='text-2xl text-[#505252]' />

                    <form>
                        <input type="text" placeholder="Search" className="bg-white ml-[15px] lg:w-[80px] 2xl:w-[100px] 
                        2xl:focus:w-[200px] transition-all duration-500 akatab outline-none searchbar" />
                    </form>
                </div>

                <img src='/icon-portugal.png' className='w-[32px] h-[32px] hidden lg:flex' alt='Country Icon' />

                {!isAuthenticated ?
                    <div className="flex flex-row lg:gap-[10px] xl:gap-[20px] 2xl:gap-[25px] items-center">
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href='/api/auth/register' className='akatab font-[500] underline'>
                            Sign Up
                        </a>

                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href='/api/auth/login' className='bg-[#1E1F1E] hover:bg-[#2b2b2b] active:bg-[#313131] text-white 
                        lg:px-[20px] 2xl:px-[35px] rounded-xl akatab py-[8px] font-[500] transition-colors duration-300'>
                            Sign In
                        </a>
                    </div>
                    :
                    <div className="flex flex-row items-center gap-x-[20px]">
                        <button>
                            <GoBell className='text-3xl' />
                        </button>

                        <div className="relative akatab text-[#1f1f1f]">
                            <img src={data?.getUserByEmail?.profilePic} onClick={() => setUserTab(!userTab)}
                                className="w-[40px] h-[40px] rounded-full border border-gray-400 cursor-pointer" />

                            <div className={`bg-white flex-col items-center p-[25px] w-[220px] absolute top-[60px] right-[50%] 
                            translate-x-[50%] rounded-2xl shadow-[0px_0px_9px_3px_rgba(0,0,0,0.15)] ${userTab ? 'flex' : 'hidden'}`}>
                                <img src={data?.getUserByEmail?.profilePic}
                                className="w-[60px] h-[60px] rounded-full border border-gray-400" />

                                <h4 className="font-[600] mt-[20px] mb-[10px] text-center">{data?.getUserByEmail?.name}</h4>

                                <div className="flex flex-col text-sm w-full items-start">
                                    <button className="py-[12px] hover:underline">Profile</button>

                                    <ul className="flex flex-col items-start border-y border-gray-200 w-full">
                                        <button className="py-[12px] hover:underline">Messages</button>
                                        <button className="py-[12px] hover:underline">Experiences</button>
                                        <button className="py-[12px] hover:underline">Balance & Payments</button>
                                        <button className="py-[12px] hover:underline">Wishlist</button>
                                    </ul>

                                    <ul className="flex flex-col items-start">
                                        <button className="py-[12px] hover:underline">Settings</button>
                                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                        <a href='/api/auth/logout' className="py-[12px] hover:underline text-[#D20505]">Log out</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <BiMenuAltRight onClick={handleMenu} className={`flex lg:hidden mt-[5px] ml-auto text-5xl text-[#FB5870] z-50 
            ursor-pointer ${menu && 'fixed right-[23px] rotate-90'} transition-all duration-300`} />

            <div className={`fixed right-0 top-0 h-screen z-40 lg:hidden w-full ${menu ? 'backdrop-blur-sm' : 'pointer-events-none'}`}>
                <div className={`ml-auto ${menu ? 'w-full md:w-2/3' : 'w-0'} h-screen bg-[#1F1F1F] flex flex-col transition-all duration-300 relative`}>
                    <div className={`flex-row mx-auto mt-[240px] ${menu ? 'flex' : 'hidden'}`}>
                        <div className='bg-white border-[#bec2c2] border-[2px] flex flex-row items-center rounded-full py-[5px] w-fit px-[20px]'>
                            <CiSearch className='text-2xl text-[#505252]' />

                            <form>
                                <input type="text" placeholder="Search" className="bg-white ml-[15px] akatab outline-none w-[200px]" />
                            </form>
                        </div>

                        <img src='/icon-portugal.png' className='w-[48px] h-[48px] ml-[10px]' alt='Country Icon' />
                    </div>

                    <div className={`flex flex-col items-center mt-[40px] ${menu ? 'flex' : 'hidden'}`}>
                        <ul className='akatab text-white text-lg text-center'>
                            <Link href='/browse'>Browse celebrity</Link>
                            <li className='mt-[20px]'>For business</li>
                            <li className='mt-[20px]'>Join as talent</li>
                        </ul>

                        <Link href='/sign-in' className='bg-[#FB5870] text-white px-[35px] rounded-xl akatab py-[8px] font-[500] w-fit mt-[60px]'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavSection