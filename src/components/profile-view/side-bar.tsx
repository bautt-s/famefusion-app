import { BsStarFill } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { PiInstagramLogo, PiFacebookLogo, PiTwitterLogo } from 'react-icons/pi'
import { BsTiktok } from 'react-icons/bs'

type SidebarProps = {
    name: string,
    description: string,
    rating: number,
    startingPrice: number,
    location: string,
    age: number,
    img: string,
    gender: string,
    languages: string[],
}

const ProfileSidebar: React.FC<SidebarProps> = (props) => {
    const { name, description, rating, startingPrice, age, img, gender, languages, location } = props

    return (
        <div className="w-[550px] xl:w-[500px] 2xl:w-[335px] flex flex-col shadow-xl rounded-b-[25px] self-start">
            <img src={img} className="w-full h-[400px] object-top object-cover rounded-t-[25px]" />

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
                        <strong className='text-[#1f1f1f] font-[600]'>Age: </strong>{age + ' years'}
                    </span>

                    <span className='text-[#646868]'>
                        <strong className='text-[#1f1f1f] font-[600]'>Gender: </strong>{gender[0].toUpperCase() + gender.slice(1)}
                    </span>

                    <span className='text-[#646868]'>
                        <strong className='text-[#1f1f1f] font-[600]'>Languages: </strong>
                        {languages.map((language) => language.charAt(0).toUpperCase() + language.slice(1)).join(', ')}
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
                        Book Experience from €{startingPrice}
                    </button>

                    <button className='bg-white text-[#1f1f1f] font-[500] py-[12px] rounded-xl border-black border-[1px]
                    transition-colors duration-300 hover:bg-[#1f1f1f] active:bg-black hover:text-white active:text-white'>
                        Message (€1)
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar