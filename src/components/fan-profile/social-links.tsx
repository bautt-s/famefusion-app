import { CiFacebook } from "react-icons/ci"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { FiTwitter, FiYoutube } from "react-icons/fi"
import { GoLink } from "react-icons/go"
import { TfiClose } from "react-icons/tfi"
import { useState } from 'react'

const SocialInfo: React.FC<any> = (props) => {
    const [socialLinks, setSocialLinks] = useState({
        website: '',
        instagram: '',
        tiktok: '',
        youtube: '',
        twitter: '',
        facebook: ''
    })

    const handleReset = (social: string) => {
        setSocialLinks({
            ...socialLinks,
            [social]: ''
        })
    }

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]">
            <h1 className="text-2xl font-[600] mb-[25px]">Social Media</h1>

            <div className="grid grid-rows-3 grid-flow-col mt-[10px] gap-y-[15px] gap-x-[80px] w-fit pb-5">
                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <GoLink className='text-xl' />
                    <input placeholder="Add Website" className="px-[5px] w-full outline-none font-[500] bg-white"
                    value={socialLinks.website} onChange={(e) => setSocialLinks({ ...socialLinks, website: e.target.value })} />

                    {(socialLinks.website.length > 0) && 
                    <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('website')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <FaInstagram className='text-xl' />
                    <input placeholder="Add Instagram" className="px-[5px] w-full outline-none font-[500] bg-white"
                    value={socialLinks.instagram} onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })} />
                    
                    {(socialLinks.instagram.length > 0) && 
                    <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('instagram')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <FaTiktok className='text-xl' />
                    <input placeholder="Add TikTok" className="px-[5px] w-full outline-none font-[500] bg-white"
                    value={socialLinks.tiktok} onChange={(e) => setSocialLinks({ ...socialLinks, tiktok: e.target.value })} />
                    
                    {(socialLinks.tiktok.length > 0) && 
                    <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('tiktok')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px] focus-within:ring-blue-500">
                    <FiYoutube className='text-2xl' />
                    <input placeholder="Add YouTube" className="px-[5px] w-full outline-none font-[500] bg-white"
                    value={socialLinks.youtube} onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })} />
                    
                    {(socialLinks.youtube.length > 0) && 
                    <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('youtube')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <FiTwitter className='text-xl' />
                    <input placeholder="Add Twitter" className="px-[5px] w-full outline-none font-[500] bg-white"
                    value={socialLinks.twitter} onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })} />
                    
                    {(socialLinks.twitter.length > 0) && 
                    <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('twitter')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px] focus-within:ring-blue-500">
                    <CiFacebook className='text-2xl' />
                    <input placeholder="Add Facebook" className="px-[5px] w-full outline-none font-[500] bg-white"
                    value={socialLinks.facebook} onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })} />
                    
                    {(socialLinks.facebook.length > 0) && 
                    <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('facebook')} />}
                </div>
            </div>
        </div>
    )
}

export default SocialInfo