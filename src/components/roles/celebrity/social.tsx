import { CiFacebook } from "react-icons/ci"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { GoLink } from "react-icons/go"
import { FiYoutube } from "react-icons/fi"
import { FiTwitter } from 'react-icons/fi'

const CelSocial: React.FC<any> = (props) => {
    const { data, setData, skip } = props

    return (
        <div>
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    Add your social channels
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                Display links to the business's official website and verified social media profiles.
            </span>

            <div className="grid grid-rows-3 grid-flow-col mt-[40px] gap-y-[15px] gap-x-[80px] w-fit">
                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px]">
                    <GoLink className='text-xl' />
                    <input placeholder="Add Website" className="px-[5px] w-full outline-none font-[500]"
                    value={data.social.website} 
                    onChange={(e) => setData({ ...data, social: { ...data.social, website: e.target.value } })} />
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px]">
                    <FaInstagram className='text-xl' />
                    <input placeholder="Add Instagram" className="px-[5px] w-full outline-none font-[500]"
                    value={data.social.instagram} 
                    onChange={(e) => setData({ ...data, social: { ...data.social, instagram: e.target.value } })} />
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px]">
                    <FaTiktok className='text-xl' />
                    <input placeholder="Add TikTok" className="px-[5px] w-full outline-none font-[500]"
                    value={data.social.tiktok} 
                    onChange={(e) => setData({ ...data, social: { ...data.social, tiktok: e.target.value } })} />
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px]">
                    <FiYoutube className='text-2xl' />
                    <input placeholder="Add YouTube" className="px-[5px] w-full outline-none font-[500]"
                    value={data.social.youtube} 
                    onChange={(e) => setData({ ...data, social: { ...data.social, youtube: e.target.value } })} />
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[20px]">
                    <FiTwitter className='text-xl' />
                    <input placeholder="Add Twitter" className="px-[5px] w-full outline-none font-[500]"
                    value={data.social.twitter} 
                    onChange={(e) => setData({ ...data, social: { ...data.social, twitter: e.target.value } })} />
                </div>

                <div className="flex flex-row items-center gap-x-[10px] ring-1 ring-gray-400 
                rounded-lg w-[300px] py-[10px] px-[18px]">
                    <CiFacebook className='text-2xl' />
                    <input placeholder="Add Facebook" className="px-[5px] w-full outline-none font-[500]"
                    value={data.social.facebook} 
                    onChange={(e) => setData({ ...data, social: { ...data.social, facebook: e.target.value } })} />
                </div>
            </div>
        </div>
    )
}

export default CelSocial