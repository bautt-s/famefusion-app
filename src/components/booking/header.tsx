import { GoHeart, GoHeartFill, GoShare } from 'react-icons/go'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { BsStarFill } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'
import { TbWorld } from 'react-icons/tb'
import Datepicker from "react-tailwindcss-datepicker"
import { useState } from 'react'
import Link from "next/link"
import { categories } from '@/utils/hardcode'
import { capitalizeArray } from '@/utils/functions'
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs'
import LoginModal from '../modals/login-modal'

const BookingHeader: React.FC<any> = (props) => {
    const { data, handleLike, isLiked, likeLoaded } = props
    const { isAuthenticated } = useKindeAuth()

    const [loginModal, setLoginModal] = useState(false)

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: any) => {
        setValue(newValue);
    }

    return (
        <section className="pt-[120px]">
            <div className="flex akatab font-[500]" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link href="/browse" className="ml-1 inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">Browse Celebrity</Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link href={`/browse/${data?.getWorkById?.celebrity?.id}`}
                                className="ml-1 md:ml-2 inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 
                                transition-all">{data?.getWorkById?.celebrity?.name}</Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ml-1 md:ml-2 text-gray-400 cursor-pointer">{data?.getWorkById?.title}</span>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="flex flex-row items-start mt-[25px] akatab">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h1 className="font-[700] text-4xl outfit text-[#1F1F1F]">{data?.getWorkById?.title}</h1>

                        <div className={`flex flex-row items-center text-xl gap-[15px] ml-[25px] 
                        ${!likeLoaded ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}>
                            <button disabled={!likeLoaded} 
                            onClick={isAuthenticated ? handleLike : () => setLoginModal(true)}>
                                {isLiked ?
                                    <GoHeartFill className='text-[#FB5870]' /> :
                                    <GoHeart />}
                            </button>

                            <GoShare />
                        </div>
                    </div>

                    <ul className='flex flex-col gap-y-[15px] mt-[40px]'>
                        <li className='flex flex-row items-center gap-x-[10px]'>
                            <HiOutlineMapPin className='text-3xl text-[#1F1F1F]' />
                            <span className='text-[#646868]'>{data?.getWorkById?.celebrity?.location}</span>
                        </li>
                        <li className='flex flex-row items-center gap-x-[10px]'>
                            <AiOutlineClockCircle className='text-3xl text-[#1F1F1F]' />
                            <span className='text-[#646868]'>{data?.getWorkById?.duration}</span>
                        </li>
                        <li className='flex flex-row items-center gap-x-[10px]'>
                            <TbWorld className='text-3xl text-[#1F1F1F]' />
                            <span className='text-[#646868]'>{capitalizeArray(data?.getWorkById?.celebrity?.languages).join(', ')}</span>
                        </li>
                        <li className='flex flex-row items-center gap-x-[10px]'>
                            <MdOutlineVerifiedUser className='text-3xl text-[#1F1F1F]' />
                            <span className='text-[#646868]'>This experience is available for verified account holders.</span>
                        </li>
                        <li className='flex flex-row items-center gap-x-[10px]'>
                            <RxPerson className='text-3xl text-[#1F1F1F]' />
                            <span className='text-[#646868]'>{data?.getWorkById?.online ? 'Online' : 'Offline'}</span>
                        </li>
                    </ul>

                    <div className='flex flex-row gap-[15px] text-[#323434] mt-[25px]'>
                        {categories.map((c, index) =>
                            <span className='bg-[#EEF3FE] py-[5px] px-[20px] rounded-2xl' key={index}>
                                {c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()}
                            </span>
                        )}
                    </div>
                </div>

                <div className='flex flex-col border-[2px] border-gray-300 px-[20px] py-[25px] rounded-[25px] ml-auto'>
                    <div className='flex flex-row items-center text-[#1F1F1F]'>
                        <span className='text-xl font-[600]'>€100</span>

                        <div className='flex flex-row items-center ml-auto gap-[5px]'>
                            <BsStarFill className='text-sm' />
                            <span className='text-sm'>{data?.getWorkById?.celebrity?.rating}</span>
                        </div>
                    </div>

                    <div className='my-[25px] border-[2px] border-gray-300 rounded-lg'>
                        <Datepicker
                            primaryColor={"rose"}
                            placeholder='Add Date'
                            useRange={false}
                            asSingle={true}
                            value={value}
                            onChange={handleValueChange}
                            popoverDirection='down'

                        />
                    </div>

                    <button className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl
                      hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 px-[80px]'>
                        Book Experience
                    </button>

                    <span className='text-sm text-[#646868] mt-3 mx-auto'>
                        You won&apos;t be charged yet
                    </span>
                </div>
            </div>

            {loginModal && <LoginModal setOpen={setLoginModal} />}
        </section>
    )
}

export default BookingHeader