import { gql, useQuery } from "@apollo/client";
import { TfiClose } from "react-icons/tfi"
import Spinner from "../spinner";
import { workInterface } from "@/pages/booking/[id]";
import { HiOutlineMapPin } from "react-icons/hi2";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { GoHeart, GoShare } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";
import { categories } from "@/utils/hardcode";
import { capitalizeArray } from "@/utils/functions";

const ModalDetail: React.FC<{ id: string, setOpen: Function }> = (props) => {
    const { id, setOpen } = props

    const EXPERIENCE = gql`
    query getWorkById($id: String) {
        getWorkById(id: $id) {
            title,
            type,
            price,
            description,
            duration,
            online,
            collaboration,
            createdAt,

            celebrity {
                id
                name
                rating
                location
                languages

                workList {
                    id
                    title
                    price
                    description
                    duration
                    online
                    collaboration
                }
            }
        }
    }`

    const { loading, error, data } = useQuery<workInterface>(EXPERIENCE, { variables: { id } });

    if (loading) return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setOpen(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center">
                    <span className='outfit text-4xl font-[700]'>Loading...</span>
                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setOpen(false)} />
                </div>

                <div className="flex w-full h-[450px] justify-center items-center">
                    <Spinner />
                </div>
            </div>
        </div>
    )

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setOpen(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row">
                    <h1 className="font-[700] text-4xl outfit text-[#1F1F1F]">{data?.getWorkById?.title}</h1>

                    <div className="flex flex-row items-center text-xl gap-[15px] ml-[25px]">
                        <GoHeart />
                        <GoShare />
                    </div>

                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setOpen(false)} />
                </div>

                <div className="max-h-[450px] overflow-y-scroll thin-scroll ">
                    <div className="flex flex-row items-start">
                        <div className="flex flex-col">
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
                    </div>

                    <div className='mt-[35px] pr-[25px]'>
                        <div className="flex flex-col gap-y-[45px] mt-[45px]">
                            <div className="flex flex-col">
                                <h3 className="text-xl font-[600]">About</h3>
                                <p className="mt-[10px]">
                                    Embark on an exclusive shopping experience with Hailey Bieber.
                                    Explore high-end boutiques, discover the latest fashion trends,
                                    and receive personalized style advice from Hailey herself.
                                    Immerse yourself in the world of fashion and gain
                                    valuable insights from one of the industry's icons.
                                    It's an unforgettable opportunity to elevate your style and
                                    experience the thrill of luxury shopping.
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-xl font-[600]">Includes</h3>
                                <ul className="flex flex-col items-start gap-y-[5px] mt-[10px]">
                                    <li className="flex flex-row items-start gap-[20px]">
                                        <BsCheckLg className='text-[#006015] text-2xl' />
                                        <span>
                                            The opportunity to choose up to 5 of clothing items from the high-end boutiques.
                                        </span>
                                    </li>

                                    <li className="flex flex-row items-start gap-[20px]">
                                        <BsCheckLg className='text-[#006015] text-6xl' />
                                        <span>
                                            Throughout the experience, Hailey will share her fashion insights and knowledge,
                                            providing valuable tips on how to mix and match different pieces, incorporate
                                            current trends, and create versatile outfits for various occasions.
                                        </span>
                                    </li>

                                    <li className="flex flex-row items-start gap-[20px]">
                                        <BsCheckLg className='text-[#006015] text-2xl' />
                                        <span>
                                            Hailey will offer personalized style advice based on her expertise and
                                            understanding of current fashion trends.
                                        </span>
                                    </li>

                                    <li className="flex flex-row items-start gap-[20px]">
                                        <IoMdClose className='text-[#D20505] text-2xl' />
                                        <span>
                                            The payment for shopping items is not included in the experience.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-xl font-[600]">Know before you go</h3>
                                <p className="mt-[10px]">
                                    Please, bring a valid ID, payment methods (credit cards or cash),
                                    and any necessary documents related to the experience.
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-xl font-[600]">Cancellation policy</h3>
                                <p className="mt-[10px]">
                                    Cancel up to 7 days before the Experience start time for a full
                                    refund, or within 24 hours of booking as long as the booking is
                                    made more than 48 hours before the start time.
                                </p>
                            </div>
                        </div>

                        <button className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl mt-[40px]
                      hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 px-[35px]'>
                            <Link href={`/booking/${id}`}>Book Experience</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetail