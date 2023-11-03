import { CiFacebook } from "react-icons/ci"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { FiTwitter, FiYoutube } from "react-icons/fi"
import { GoLink } from "react-icons/go"
import { TfiClose } from "react-icons/tfi"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { urlRegex } from "@/utils/hardcode"

type SocialType = {
    websiteLink: string,
    instagramLink: string,
    tiktokLink: string,
    youtubeLink: string,
    twitterLink: string,
    facebookLink: string,
    [key: string]: string,
}

const CelSocialInfo: React.FC<any> = (props) => {
    const { data, updateCel } = props

    const [socialLinks, setSocialLinks] = useState<SocialType>({
        websiteLink: data?.getCelebrityById?.websiteLink || '',
        instagramLink: data?.getCelebrityById?.instagramLink || '',
        tiktokLink: data?.getCelebrityById?.tiktokLink || '',
        youtubeLink: data?.getCelebrityById?.youtubeLink || '',
        twitterLink: data?.getCelebrityById?.twitterLink || '',
        facebookLink: data?.getCelebrityById?.facebookLink || '',
    })

    const [prevLinks, setPrevLinks] = useState<SocialType>({
        websiteLink: data?.getCelebrityById?.websiteLink || '',
        instagramLink: data?.getCelebrityById?.instagramLink || '',
        tiktokLink: data?.getCelebrityById?.tiktokLink || '',
        youtubeLink: data?.getCelebrityById?.youtubeLink || '',
        twitterLink: data?.getCelebrityById?.twitterLink || '',
        facebookLink: data?.getCelebrityById?.facebookLink || '',
    })

    const handleReset = (social: string) => {
        setSocialLinks({
            ...socialLinks,
            [social]: ''
        })

        updateCel({
            variables: {
                celebrity: {
                    id: data?.getCelebrityById?.id,
                    [social]: ''
                }
            }
        })

        toast.success('Social link saved.', {
            position: 'bottom-left',
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            closeButton: false,
            theme: "light",
            bodyClassName: 'text-black akatab'
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setPrevLinks({ ...socialLinks, [key]: socialLinks[key] })
        setSocialLinks({ ...socialLinks, [key]: e.target.value })
    }

    const handleSubmit = (key: string) => {
        if (socialLinks[key] !== prevLinks[key]) {
            if (urlRegex.test(socialLinks[key]) || socialLinks[key].length === 0) {
                updateCel({
                    variables: {
                        celebrity: {
                            id: data?.getCelebrityById?.id,
                            [key]: socialLinks[key]
                        }
                    }
                })
    
                toast.success('Social link saved.', {
                    position: 'bottom-left',
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    closeButton: false,
                    theme: "light",
                    bodyClassName: 'text-black akatab'
                })
            } else {
                toast.error('Insert a valid URL!', {
                    position: "bottom-left",
                    autoClose: 2500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    bodyClassName: 'text-black akatab'
                })
            }
        }
    }

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]" id='social-media'>
            <h1 className="text-2xl font-[600] mb-[25px]">Social Media</h1>

            <div className="grid grid-rows-3 grid-flow-col mt-[10px] gap-y-[15px] gap-x-[80px] w-fit pb-5">
                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-[#FB5870]">
                    <GoLink className='text-xl' />
                    <input placeholder="Add Website" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.websiteLink} onBlur={() => handleSubmit('websiteLink')}
                        onChange={(e) => handleChange(e, 'websiteLink')} />

                    {(socialLinks?.websiteLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('websiteLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-[#FB5870]">
                    <FaInstagram className='text-xl' />
                    <input placeholder="Add Instagram" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.instagramLink} onBlur={() => handleSubmit('instagramLink')}
                        onChange={(e) => handleChange(e, 'instagramLink')} />

                    {(socialLinks?.instagramLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('instagramLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-[#FB5870]">
                    <FaTiktok className='text-xl' />
                    <input placeholder="Add TikTok" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.tiktokLink} onBlur={() => handleSubmit('tiktokLink')}
                        onChange={(e) => handleChange(e, 'tiktokLink')} />

                    {(socialLinks?.tiktokLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('tiktokLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px] focus-within:ring-[#FB5870]">
                    <FiYoutube className='text-2xl' />
                    <input placeholder="Add YouTube" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.youtubeLink} onBlur={() => handleSubmit('youtubeLink')}
                        onChange={(e) => handleChange(e, 'youtubeLink')} />

                    {(socialLinks?.youtubeLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('youtubeLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-[#FB5870]">
                    <FiTwitter className='text-xl' />
                    <input placeholder="Add Twitter" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.twitterLink} onBlur={() => handleSubmit('twitterLink')}
                        onChange={(e) => handleChange(e, 'twitterLink')} />

                    {(socialLinks?.twitterLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('twitterLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px] focus-within:ring-[#FB5870]">
                    <CiFacebook className='text-2xl' />
                    <input placeholder="Add Facebook" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.facebookLink} onBlur={() => handleSubmit('facebookLink')}
                        onChange={(e) => handleChange(e, 'facebookLink')} />

                    {(socialLinks?.facebookLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('facebookLink')} />}
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default CelSocialInfo