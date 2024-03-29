import { GoChevronLeft, GoChevronRight, GoHeart, GoHeartFill, GoShare } from 'react-icons/go'
import { PiInstagramLogo, PiFacebookLogo, PiTwitterLogo } from 'react-icons/pi'
import { BsTiktok } from 'react-icons/bs'
import { useState } from 'react'
import LoginModal from '../modals/login-modal'
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs'

let screenWidth = 0
if (typeof window !== 'undefined') screenWidth = window.innerWidth
let imgsShowed = 0

if (screenWidth > 1536) imgsShowed = 4
else if (screenWidth > 1279) imgsShowed = 3
else if (screenWidth > 1024) imgsShowed = 2
else imgsShowed = 1

const AboutPanel: React.FC<any> = (props) => {
    const { name, media, associatedBrands, biography, interests, handleLike, isLiked } = props

    const { isAuthenticated } = useKindeAuth();
    const [loginModal, setLoginModal] = useState(false)    

    return (
        <div className="flex flex-col akatab">
            <div className="flex flex-col lg:flex-row items-center">
                <h1 className="font-[700] text-4xl">{name}</h1>

                <div className="flex flex-row items-center gap-[25px] mt-[10px] lg:ml-auto">
                    <div className='flex flex-row items-center gap-[10px]'>
                        <GoShare className='text-2xl' />
                        <span className='text-lg underline underline-offset-4'>Share</span>
                    </div>

                    <button className='flex flex-row items-center gap-[10px]' 
                    onClick={isAuthenticated ? handleLike : () => setLoginModal(true)}>
                        {!isLiked ?
                        <GoHeart className='text-2xl' /> :
                        <GoHeartFill className='text-2xl text-[#FB5870]' />}

                        <span className='text-lg underline underline-offset-4'>Save</span>
                    </button>
                </div>
            </div>

            <div className='md:flex md:flex-row lg:grid lg:grid-cols-[2fr_1fr] xl:grid-cols-[2fr_1fr_1fr] 
            2xl:grid-cols-[2fr_1fr_1fr_1fr] md:gap-[15px] 2xl:gap-[25px] w-full mt-[25px] justify-center h-[350px]'>
                {media?.slice(0, imgsShowed).map((item: string, index: number) =>
                    <div style={{backgroundImage: `url(${item})`, backgroundSize: 'cover', backgroundPosition: 'center'}} 
                    className='max-w-full rounded-[25px] bg-gray-300' key={index}></div>
                )}
            </div>

            <div className='flex flex-col lg:flex-row items-center mt-[20px]'>
                <div className='flex flex-row text-[#646868]'>
                    {associatedBrands?.map((brand: string, index: number) => (
                        <div key={index} className={`${index !== 0 && 'ml-[5px]'}`}>
                            {index !== 0 && ' · '}
                            {brand}
                        </div>
                    ))}
                </div>

                <div className='hidden lg:flex flex-row gap-[20px] ml-auto'>
                    <div className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronLeft />
                    </div>

                    <div className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronRight />
                    </div>
                </div>
            </div>

            <div className='flex flex-col mt-[15px]'>
                <p className='min-w-full w-0 text-justify text-base'>{biography}</p>

                <span className='mt-[25px] text-xl font-[600]'>Social Followers</span>
                {/*<div className='grid grid-cols-2 xl:grid-cols-3'>
                    <div className='flex flex-row items-center mt-[15px]'>
                        <PiInstagramLogo className='text-2xl' />
                        <span className='ml-[10px] text-[#646868]'>Instagram <br className='flex lg:hidden' />Followers:
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'><br className='flex lg:hidden' />
                            {formatNumber(followers.instagram)}</strong>
                        </span>
                    </div>

                    <div className='flex flex-row items-center md:mt-[15px] xl:mt-[25px]'>
                        <PiTwitterLogo className='text-2xl' />
                        <span className='ml-[10px] text-[#646868]'>Twitter <br className='flex lg:hidden' />Followers:
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'><br className='flex lg:hidden' />
                            {formatNumber(followers.twitter)}</strong>
                        </span>
                    </div>

                    <div className='flex flex-row items-center mt-[25px]'>
                        <BsTiktok className='text-xl' />
                        <span className='ml-[10px] text-[#646868]'>TikTok <br className='flex lg:hidden' />Followers:
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'><br className='flex lg:hidden' />
                            {formatNumber(followers.tiktok)}</strong>
                        </span>
                    </div>

                    <div className='flex flex-row items-center mt-[25px]'>
                        <PiFacebookLogo className='text-2xl' />
                        <span className='ml-[10px] text-[#646868]'>Facebook <br className='flex lg:hidden' />Followers:
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'><br className='flex lg:hidden' />
                            {formatNumber(followers.facebook)}</strong>
                        </span>
                    </div>
                </div>*/}

                <span className='mt-[35px] text-xl font-[600]'>Interests</span>
                <ul className='flex flex-row flex-wrap gap-[25px] mt-[20px]'>
                    {interests?.map((i: string, index: number) =>
                        <li key={index} className='bg-[#EFF3FF] rounded-full px-[15px] py-[4px]'>
                        {i[0].toUpperCase() + i.slice(1)}</li>
                    )}
                </ul>
            </div>

            {loginModal && <LoginModal setOpen={setLoginModal} />}
        </div>
    )
}

export default AboutPanel