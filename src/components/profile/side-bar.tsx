import { BsStarFill } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { PiInstagramLogo, PiFacebookLogo, PiTwitterLogo } from 'react-icons/pi'
import { BsTiktok } from 'react-icons/bs'
import { BiInfoCircle } from 'react-icons/bi'
import { calculateAge } from '@/utils/functions'

const ProfileSidebar: React.FC<any> = (props) => {
    const { name, description, rating, profilePic, gender, languages, location, workList, birthYear } = props

    return (
        <div className="w-[550px] xl:w-[500px] 2xl:w-[335px] flex flex-col shadow-xl rounded-b-[25px] self-start">
            <img src={profilePic} className="w-full h-[400px] object-top object-cover rounded-t-[25px]" />

            <div className='flex flex-col px-[25px] py-[32px] akatab rounded-b-[25px] border'>
                <div className="flex flex-row items-center">
                    <h2 className="text-2xl font-[600]">{name}</h2>

                    <div className='flex flex-row items-center mt-[3px] ml-auto'>
                        <BsStarFill className='text-xs' />
                        <span className='ml-[10px] mt-[2px] text-xs'>{rating}</span>
                    </div>
                </div>

                <span className='mt-[10px]'>{description}</span>

                <div className='mt-[35px] flex flex-col gap-y-[10px]'>
                    <span className='text-[#646868]'>
                        <strong className='text-[#1f1f1f] font-[600]'>Location: </strong>{location}
                    </span>

                    <span className='text-[#646868]'>
                        <strong className='text-[#1f1f1f] font-[600]'>Age: </strong>{calculateAge(new Date(birthYear)) + ' years'}
                    </span>

                    <span className='text-[#646868]'>
                        <strong className='text-[#1f1f1f] font-[600]'>Gender: </strong>{gender?.slice(0, 1)?.toUpperCase() + gender?.slice(1)}
                    </span>

                    <span className='text-[#646868]'>
                        <strong className='text-[#1f1f1f] font-[600]'>Languages: </strong>
                        {languages?.map((language: string) => language?.charAt(0)?.toUpperCase() + language?.slice(1))?.join(', ')}
                    </span>
                </div>

                <div className='mt-[35px] flex flex-col gap-y-[10px]'>
                    <div className='flex flex-row items-center'>
                        <span className='text-[#1f1f1f] font-[600]'>On the WEB</span>
                        <MdVerified className='text-[#405EFF] text-xl ml-[15px]' />
                    </div>

                    <div className='flex flex-row items-center gap-[15px]'>
                        <PiInstagramLogo className='text-[#FB5870] text-2xl' />
                        <PiFacebookLogo className='text-[#FB5870] text-2xl' />
                        <PiTwitterLogo className='text-[#FB5870] text-2xl' />
                        <BsTiktok className='text-[#FB5870] text-xl' />
                    </div>
                </div>

                <div className='mt-[35px] flex flex-col gap-y-[10px]'>
                    <button className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl
                    hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300'>
                        {workList?.length ? `Book Experience from €${workList[0]?.price}` : 'Book Experience'}
                    </button>

                    <button className='bg-white text-[#1f1f1f] font-[500] py-[12px] rounded-xl border-black border-[1px] flex flex-row justify-center
                    transition-colors duration-300 hover:bg-[#1f1f1f] active:bg-black hover:text-white active:text-white items-center'>
                        <span>Message for 5 credits</span>

                        <div className='ml-[5px] relative group'>
                            <BiInfoCircle />

                            <div className='hidden group-hover:inline w-0 h-0 border-triangle absolute bottom-0 left-[50%] translate-x-[-50%] top-[25px]'></div>
                            <div className='hidden group-hover:inline text-black absolute bg-white shadow-2xl px-[15px] py-[20px] rounded-xl left-[7px] top-[40px] translate-x-[-50%]'>
                                
                                <p className='w-[18ch] text-left'>
                                    You will be charged only when a celebrity responds to your communication.
                                </p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar