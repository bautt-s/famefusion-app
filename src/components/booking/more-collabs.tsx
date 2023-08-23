import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import { useState } from 'react'
import Link from "next/link"
import { LuClock } from "react-icons/lu"

let screenWidth = 0
if (typeof window !== 'undefined') screenWidth = window.innerWidth
let cardsShowed = 0

if (screenWidth > 1024) cardsShowed = 4
else if (screenWidth > 768) cardsShowed = 3
else if (screenWidth > 640) cardsShowed = 2
else cardsShowed = 1

const BookingCollabs: React.FC<{ name: any, workList: any }> = (props) => {
    const { name, workList } = props

    const [showCollabs, setShowCollabs] = useState({
        index: 1,
        show: workList?.slice(0, cardsShowed)
    })

    const handlePage = (sense: string) => {
        if (sense === 'asc') {
            const limit = Math.ceil(workList?.length / cardsShowed)

            if (showCollabs.index !== limit) {
                const newIndex = showCollabs.index + 1

                setShowCollabs({
                    index: newIndex,
                    show: workList?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                })
            }
        } else {
            const limit = Math.ceil(workList?.length / cardsShowed)

            if (showCollabs.index - 1 !== 0) {
                const newIndex = showCollabs.index - 1

                setShowCollabs({
                    index: newIndex,
                    show: workList?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                })
            }
        }
    }

    return (
        <div className="flex flex-col mt-[45px]">
            <div className="flex flex-row items-center">
                <h3 className="text-xl font-[600]">More by {name}</h3>

                <div className='flex flex-row gap-[15px] ml-auto'>
                    <button onClick={() => handlePage('desc')}
                        className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronLeft />
                    </button>

                    <button onClick={() => handlePage('asc')}
                        className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                        <GoChevronRight />
                    </button>
                </div>
            </div>

            <div className="flex flex-row gap-x-[25px] mt-[15px]">
                {showCollabs.show.map((item: any, index: number) =>
                    <div key={index} className='border-[#CBCDCD] border-[1px] rounded-[25px] px-[20px] py-[25px] w-full max-w-[350px]'>
                        <div className='flex flex-row items-start'>
                            <h5 className='font-[600] text-lg h-[55px]'>{item.title}</h5>
                            <span className='font-[600] ml-auto text-lg'>€{item.price}</span>
                        </div>

                        <p className='mt-[15px] max-w-[20ch] 2xl:max-w-[22ch] 2xl:text-lg'>{item.description}</p>

                        <div className='flex flex-row items-center mt-[15px] 2xl:text-lg'>
                            <LuClock className='text-2xl' />
                            <span className='ml-[10px]'>
                                <strong className='mr-[5px]'>Duration:</strong> {item?.duration}
                            </span>
                        </div>

                        <div className='flex flex-row items-center mt-[25px]'>
                            <span className='cursor-pointer underline underline-offset-4 2xl:text-lg'>Details</span>

                            <button className='bg-[#FB5870] text-white font-[500] py-[8px] px-[25px] 2xl:px-[35px] rounded-xl
                          hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 ml-auto text-lg'>
                                <Link href={`/booking/${item?.id}`}>Choose</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookingCollabs