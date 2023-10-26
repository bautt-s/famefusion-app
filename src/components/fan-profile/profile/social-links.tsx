import { CiFacebook } from "react-icons/ci"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { FiTwitter, FiYoutube } from "react-icons/fi"
import { GoLink } from "react-icons/go"
import { TfiClose } from "react-icons/tfi"
import { useState } from 'react'
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

const SocialInfo: React.FC<any> = (props) => {
    const { data, updateFan } = props

    const [socialLinks, setSocialLinks] = useState<SocialType>({
        websiteLink: data?.getFanById?.websiteLink || '',
        instagramLink: data?.getFanById?.instagramLink || '',
        tiktokLink: data?.getFanById?.tiktokLink || '',
        youtubeLink: data?.getFanById?.youtubeLink || '',
        twitterLink: data?.getFanById?.twitterLink || '',
        facebookLink: data?.getFanById?.facebookLink || '',
    })

    const handleReset = (social: string) => {
        setSocialLinks({
            ...socialLinks,
            [social]: ''
        })

        updateFan({
            variables: {
                fan: {
                    id: data?.getFanById?.id,
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

    const handleSubmit = (key: string) => {
        if (urlRegex.test(socialLinks[key]) || socialLinks[key].length === 0) {
            updateFan({
                variables: {
                    fan: {
                        id: data?.getFanById?.id,
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

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]" id='social'>
            <h1 className="text-2xl font-[600] mb-[25px]">Social Media</h1>

            <div className="grid grid-rows-3 grid-flow-col mt-[10px] gap-y-[15px] gap-x-[80px] w-fit pb-5">
                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <GoLink className='text-xl' />
                    <input placeholder="Add Website" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.websiteLink} onBlur={() => handleSubmit('websiteLink')}
                        onChange={(e) => setSocialLinks({ ...socialLinks, websiteLink: e.target.value })} />

                    {(socialLinks?.websiteLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('websiteLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <FaInstagram className='text-xl' />
                    <input placeholder="Add Instagram" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.instagramLink} onBlur={() => handleSubmit('instagramLink')}
                        onChange={(e) => setSocialLinks({ ...socialLinks, instagramLink: e.target.value })} />

                    {(socialLinks?.instagramLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('instagramLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <FaTiktok className='text-xl' />
                    <input placeholder="Add TikTok" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.tiktokLink} onBlur={() => handleSubmit('tiktokLink')}
                        onChange={(e) => setSocialLinks({ ...socialLinks, tiktokLink: e.target.value })} />

                    {(socialLinks?.tiktokLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('tiktokLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px] focus-within:ring-blue-500">
                    <FiYoutube className='text-2xl' />
                    <input placeholder="Add YouTube" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.youtubeLink} onBlur={() => handleSubmit('youtubeLink')}
                        onChange={(e) => setSocialLinks({ ...socialLinks, youtubeLink: e.target.value })} />

                    {(socialLinks?.youtubeLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('youtubeLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px] focus-within:ring-blue-500">
                    <FiTwitter className='text-xl' />
                    <input placeholder="Add Twitter" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.twitterLink} onBlur={() => handleSubmit('twitterLink')}
                        onChange={(e) => setSocialLinks({ ...socialLinks, twitterLink: e.target.value })} />

                    {(socialLinks?.twitterLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('twitterLink')} />}
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px] focus-within:ring-blue-500">
                    <CiFacebook className='text-2xl' />
                    <input placeholder="Add Facebook" className="px-[5px] w-full outline-none font-[500] bg-white"
                        value={socialLinks.facebookLink} onBlur={() => handleSubmit('facebookLink')}
                        onChange={(e) => setSocialLinks({ ...socialLinks, facebookLink: e.target.value })} />

                    {(socialLinks?.facebookLink?.length > 0) &&
                        <TfiClose className='text-sm cursor-pointer' onClick={() => handleReset('facebookLink')} />}
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default SocialInfo