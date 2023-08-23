import { useEffect, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import Icon404 from '@/svgs/Icon404'
import { LuClock } from 'react-icons/lu'
import Link from 'next/link'
import ModalDetail from '../booking/detail-modal'

export interface workInterface {
    id: string,
    title: string,
    price: number,
    description: string,
    duration: string,
    collaboration: boolean,
    online: boolean,
}

const ExperiencesPanel: React.FC<any> = (props) => {
    const [open, setOpen] = useState(false)
    const [detailId, setDetailId] = useState('')

    const [offlineExp, setOfflineExp] = useState<workInterface[]>([])
    const [onlineExp, setOnlineExp] = useState<workInterface[]>([])

    const [showOffline, setShowOffline] = useState({
        index: 1,
        show: offlineExp?.slice(0, 3)
    })

    const [showOnline, setShowOnline] = useState({
        index: 1,
        show: onlineExp?.slice(0, 3)
    })

    const handlePage = (mode: string, sense: string) => {
        if (sense === 'asc') {
            if (mode === 'online') {
                const limit = Math.ceil(onlineExp?.length / 3)

                if (showOnline.index !== limit) {
                    const newIndex = showOnline.index + 1

                    setShowOnline({
                        index: newIndex,
                        show: onlineExp?.slice((newIndex - 1) * 3, newIndex * 3)
                    })
                }
            } else {
                const limit = Math.ceil(offlineExp?.length / 3)

                if (showOffline.index !== limit) {
                    const newIndex = showOffline.index + 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineExp?.slice((newIndex - 1) * 3, newIndex * 3)
                    })
                }
            }
        } else {
            if (mode === 'online') {
                if (showOnline.index - 1 !== 0) {
                    const newIndex = showOnline.index - 1

                    setShowOnline({
                        index: newIndex,
                        show: onlineExp?.slice((newIndex - 1) * 3, newIndex * 3)
                    })
                }
            } else {
                if (showOffline.index - 1 !== 0) {
                    const newIndex = showOffline.index - 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineExp?.slice((newIndex - 1) * 3, newIndex * 3)
                    })
                }
            }
        }
    }

    const handleDetail = (id: string) => {
        setDetailId(id)
        setOpen(true)
    }

    useEffect(() => {
        setOfflineExp(props?.experiences?.filter((e: workInterface) => !e?.online))
        setOnlineExp(props?.experiences?.filter((e: workInterface) => !e?.online))
    }, [props?.experiences])

    useEffect(() => {
        setShowOffline({
            index: 1,
            show: offlineExp?.slice(0, 3)
        })

        setShowOnline({
            index: 1,
            show: onlineExp?.slice(0, 3)
        })
    }, [onlineExp])
    
    return (
        <div className="flex flex-col w-full h-full mt-[45px] rounded-[25px] shadow-xl border py-[32px] px-[25px] akatab">
            <div className="flex-col">
                <h2 className="text-xl font-[600]">Offline Experiences</h2>

                <div className="flex flex-row items-center mt-[5px]">
                    <span className='text-[#646868]'>{offlineExp?.length || 'None'} available</span>

                    {(offlineExp?.length !== 0) &&
                        <div className="flex flex-row items-center ml-auto">
                            <span>
                                {showOffline.index + ' / ' + Math.ceil(offlineExp?.length / 3)}
                            </span>

                            <div className='flex flex-row gap-[15px] ml-[15px]'>
                                <button onClick={() => handlePage('offline', 'desc')}
                                    className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                                    <GoChevronLeft />
                                </button>

                                <button onClick={() => handlePage('offline', 'asc')}
                                    className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                                    <GoChevronRight />
                                </button>
                            </div>
                        </div>}
                </div>

                <div className='flex flex-row gap-x-[25px] mt-[25px]'>
                    {offlineExp?.length ? showOffline.show?.map((offExp: workInterface, index: number) =>
                        <div key={index} className='border-[#CBCDCD] border-[1px] rounded-[25px] px-[20px] py-[25px] w-full max-w-[350px]'>
                            <div className='flex flex-row items-center'>
                                <h5 className='font-[600] text-lg'>{offExp.title}</h5>
                                <span className='font-[600] ml-auto text-lg'>€{offExp.price}</span>
                            </div>

                            <p className='mt-[15px] max-w-[22ch] text-lg'>{offExp.description}</p>

                            <div className='flex flex-row items-center mt-[15px] text-lg'>
                                <LuClock className='text-2xl' />
                                <span className='ml-[10px]'>
                                    <strong className='mr-[5px]'>Duration:</strong> {offExp?.duration}
                                </span>
                            </div>

                            <div className='flex flex-row items-center mt-[25px]'>
                                <span onClick={() => handleDetail(offExp?.id)} 
                                className='cursor-pointer underline underline-offset-4 text-lg'>
                                    Details
                                </span>

                                <button className='bg-[#FB5870] text-white font-[500] py-[8px] px-[35px] rounded-xl
                                hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 ml-auto text-lg'>
                                    <Link href={`/booking/${offExp?.id}`}>Choose</Link>
                                </button>
                            </div>
                        </div>
                    ) :
                        <div className='w-full pt-[60px] pb-[120px] flex flex-col items-center gap-[15px]'>
                            <Icon404 className='flex mx-auto' />
                            <span>Celebrity doesn&apos;t have any offline experiences yet</span>
                        </div>
                    }
                </div>
            </div>

            <div className={`flex-col ${onlineExp?.length !== 0 && 'mt-auto'}`}>
                <h2 className="text-xl font-[600]">Online Experiences</h2>

                <div className="flex flex-row items-center mt-[5px]">
                    <span className='text-[#646868]'>{onlineExp?.length || 'None'} available</span>

                    {(onlineExp?.length !== 0) &&
                        <div className="flex flex-row items-center ml-auto">
                            <span>
                                {showOnline.index + ' / ' + Math.ceil(onlineExp?.length / 3)}
                            </span>

                            <div className='flex flex-row gap-[15px] ml-[15px]'>
                                <button onClick={() => handlePage('online', 'desc')}
                                    className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                                    <GoChevronLeft />
                                </button>

                                <button onClick={() => handlePage('online', 'asc')}
                                    className='text-xl border rounded-full p-[7px] hover:bg-[#ececec] active:bg-[#dddddd] transition-colors duration-300'>
                                    <GoChevronRight />
                                </button>
                            </div>
                        </div>}
                </div>

                <div className='flex flex-row gap-x-[25px] mt-[25px]'>
                    {onlineExp?.length ? showOnline.show?.map((onlExp: workInterface, index: number) =>
                        <div key={index} className='border-[#CBCDCD] border-[1px] rounded-[25px] px-[20px] py-[25px] w-full max-w-[350px]'>
                            <div className='flex flex-row items-center'>
                                <h5 className='font-[600] text-lg'>{onlExp.title}</h5>
                                <span className='font-[600] ml-auto text-lg'>€{onlExp.price}</span>
                            </div>

                            <p className='mt-[15px] max-w-[22ch] text-lg'>{onlExp.description}</p>

                            <div className='flex flex-row items-center mt-[15px] text-lg'>
                                <LuClock className='text-2xl' />
                                <span className='ml-[10px]'>
                                    <strong className='mr-[5px]'>Duration:</strong> {onlExp?.duration}
                                </span>
                            </div>

                            <div className='flex flex-row items-center mt-[25px]'>
                                <span onClick={() => handleDetail(onlExp?.id)} 
                                className='cursor-pointer underline underline-offset-4 text-lg'>
                                    Details
                                </span>

                                <button className='bg-[#FB5870] text-white font-[500] py-[8px] px-[35px] rounded-xl
                                hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 ml-auto text-lg'>
                                    <Link href={`/booking/${onlExp?.id}`}>Choose</Link>
                                </button>
                            </div>
                        </div>
                    ) :
                        <div className='w-full pt-[60px] flex flex-col items-center gap-[15px]'>
                            <Icon404 className='flex mx-auto' />
                            <span>Celebrity doesn&apos;t have any online experiences yet</span>
                        </div>
                    }
                </div>
            </div>

            {open && <ModalDetail id={detailId} setOpen={setOpen} />}
        </div>
    )
}

export default ExperiencesPanel