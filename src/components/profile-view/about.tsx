import { GoChevronLeft, GoChevronRight, GoHeart, GoShare } from 'react-icons/go'
import { RxTriangleRight } from 'react-icons/rx'
import { PiInstagramLogo, PiFacebookLogo, PiTwitterLogo } from 'react-icons/pi'
import { BsTiktok } from 'react-icons/bs'

type AboutProps = {
    name: string,
    imgGallery: string[],
    associatedBrands: string[]
    longDescription: string,
    followers: { instagram: number, facebook: number, tiktok: number, twitter: number },
    video: string,
    interests: string[]
}

function formatNumber(number: number) {
    let absNumber = Math.abs(number);
    const suffixes = ["", "k", "M", "B", "T"]; // Add more suffixes as needed for larger numbers
    let suffixIndex = 0;

    while (absNumber >= 1000 && suffixIndex < suffixes.length - 1) {
        absNumber /= 1000;
        suffixIndex++;
        const decimalPlaces = (suffixIndex === 0 || absNumber >= 100) ? 0 : 1;

        return (number < 0 ? '-' : '') + absNumber.toFixed(decimalPlaces) + suffixes[suffixIndex];
    }
}


const AboutPanel: React.FC<AboutProps> = (props) => {
    const { name, imgGallery, associatedBrands, longDescription, followers, interests, video } = props

    return (
        <div className="flex flex-col w-full h-full mt-[45px] rounded-[25px] shadow-xl border py-[32px] px-[25px] akatab">
            <div className="flex flex-row items-center">
                <h1 className="font-[700] text-4xl">{name}</h1>

                <div className="flex flex-row items-center gap-[25px] mt-[10px] ml-auto">
                    <div className='flex flex-row items-center gap-[10px]'>
                        <GoShare className='text-2xl' />
                        <span className='text-lg underline underline-offset-4'>Share</span>
                    </div>

                    <div className='flex flex-row items-center gap-[10px]'>
                        <GoHeart className='text-2xl' />
                        <span className='text-lg underline underline-offset-4'>Save</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-[2fr_1fr_1fr_1fr] gap-[25px] w-full mt-[25px]'>
                <div className='relative'>
                    <img src={video} className='rounded-[25px] h-[300px] w-[400px] object-cover' />

                    <div className='p-[5px] rounded-full backdrop-blur-md absolute bottom-[42%] left-[50%] 
                    translate-x-[-50%] translate-y-[-50%] hover:bg-[#0000003f] transition-colors duration-300'>
                        <RxTriangleRight className='text-6xl text-white cursor-pointer' />
                    </div>
                </div>

                {imgGallery.map((item, index) =>
                    <img key={index} src={item} className='rounded-[25px] object-cover h-[300px] w-[200px]' />
                )}
            </div>

            <div className='flex flex-row items-center mt-[20px]'>
                <div className='flex flex-row text-[#646868]'>
                    {associatedBrands.map((brand, index) => (
                        <div className={`${index !== 0 && 'ml-[5px]'}`}>
                            {index !== 0 && ' · '}
                            {brand}
                        </div>
                    ))}
                </div>

                <div className='flex flex-row gap-[20px] ml-auto'>
                    <div className='text-xl border rounded-full p-[7px]'>
                        <GoChevronLeft />
                    </div>

                    <div className='text-xl border rounded-full p-[7px]'>
                        <GoChevronRight />
                    </div>
                </div>
            </div>

            <div className='flex flex-col mt-[15px]'>
                <p className='max-w-[100ch] text-justify'>{longDescription}</p>

                <span className='mt-[25px] text-xl font-[600]'>Social Followers</span>
                <div className='grid grid-cols-3'>
                    <div className='flex flex-row items-center mt-[15px]'>
                        <PiInstagramLogo className='text-2xl' />
                        <span className='ml-[10px] text-[#646868]'>Instagram Followers: 
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'>{formatNumber(followers.instagram)}</strong>
                        </span>
                    </div>

                    <div className='flex flex-row items-center mt-[25px]'>
                        <PiTwitterLogo className='text-2xl' />
                        <span className='ml-[10px] text-[#646868]'>Twitter Followers: 
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'>{formatNumber(followers.twitter)}</strong>
                        </span>
                    </div>

                    <div className='flex flex-row items-center mt-[25px]'>
                        <BsTiktok className='text-xl' />
                        <span className='ml-[10px] text-[#646868]'>TikTok Followers: 
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'>{formatNumber(followers.tiktok)}</strong>
                        </span>
                    </div>

                    <div className='flex flex-row items-center mt-[25px]'>
                        <PiFacebookLogo className='text-2xl' />
                        <span className='ml-[10px] text-[#646868]'>Facebook Followers: 
                            <strong className='ml-[5px] font-[600] text-[#1f1f1f]'>{formatNumber(followers.facebook)}</strong>
                        </span>
                    </div>
                </div>

                <span className='mt-[35px] text-xl font-[600]'>Interests</span>
                <ul className='flex flex-row gap-x-[25px] mt-[20px]'>
                    {interests.map((i, index) => 
                        <li className='bg-[#EFF3FF] rounded-full px-[15px] py-[4px]'>{i[0].toUpperCase() + i.slice(1)}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default AboutPanel