import { useEffect, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { LuClock } from 'react-icons/lu'
import { workInterface } from './experiences'
import CustomCollabModal from '../modals/custom-collab'
import Icon404 from '@/svgs/Icon404'

const OpportunitiesPanel: React.FC<any> = (props) => {
    const [customCollab, setCustomCollab] = useState(false)
    const [offlineCollabs, setOfflineCollabs] = useState<workInterface[]>([])
    const [onlineCollabs, setOnlineCollabs] = useState<workInterface[]>([])

    const [showOffline, setShowOffline] = useState({
        index: 1,
        show: offlineCollabs?.slice(0, 2)
    })

    const [showOnline, setShowOnline] = useState({
        index: 1,
        show: onlineCollabs?.slice(0, 3)
    })

    const handlePage = (mode: string, sense: string) => {
        if (sense === 'asc') {
            if (mode === 'online') {
                const limit = Math.ceil(onlineCollabs?.length / 3)

                if (showOnline.index !== limit) {
                    const newIndex = showOnline.index + 1

                    setShowOnline({
                        index: newIndex,
                        show: offlineCollabs?.slice((newIndex - 1) * 3, newIndex * 3)
                    })
                }
            } else {
                const limit = Math.ceil(offlineCollabs?.length / 2)

                if (showOffline.index !== limit) {
                    const newIndex = showOffline.index + 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineCollabs?.slice((newIndex - 1) * 2, newIndex * 2)
                    })
                }
            }
        } else {
            if (mode === 'online') {
                if (showOnline.index - 1 !== 0) {
                    const newIndex = showOnline.index - 1

                    setShowOnline({
                        index: newIndex,
                        show: onlineCollabs?.slice((newIndex - 1) * 3, newIndex * 3)
                    })
                }
            } else {
                if (showOffline.index - 1 !== 0) {
                    const newIndex = showOffline.index - 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineCollabs?.slice((newIndex - 1) * 2, newIndex * 2)
                    })
                }
            }
        }
    }

    useEffect(() => {
        setOfflineCollabs(props?.collaborations?.filter((e: workInterface) => !e?.online))
        setOnlineCollabs(props?.collaborations?.filter((e: workInterface) => !e?.online))
    }, [props?.collaborations])

    useEffect(() => {
        setShowOffline({
            index: 1,
            show: offlineCollabs?.slice(0, 2)
        })

        setShowOnline({
            index: 1,
            show: onlineCollabs?.slice(0, 3)
        })
    }, [offlineCollabs])

    console.log(onlineCollabs)

    return (
        <div className="flex flex-col w-full h-full mt-[45px] rounded-[25px] shadow-xl border py-[32px] px-[25px] akatab">
            <div className="flex-col">
                <h2 className="text-xl font-[600]">Offline Collaborations</h2>

                <div className="flex flex-row items-center mt-[5px]">
                    <span className='text-[#646868]'>{offlineCollabs?.length || 'None'} available</span>

                    {(offlineCollabs?.length !== 0) &&
                        <div className="flex flex-row items-center ml-auto">
                            <span>
                                {showOffline.index + ' / ' + Math.ceil(offlineCollabs?.length / 3)}
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
                    {offlineCollabs?.length ? showOffline.show?.map((offExp: workInterface, index: number) =>
                        <div key={index} className='border-[#CBCDCD] border-[1px] rounded-[25px] px-[20px] py-[25px] w-full max-w-[350px]'>
                            <div className='flex flex-row items-center'>
                                <h5 className='font-[600] text-lg'>{offExp.title}</h5>
                                <span className='font-[600] ml-auto text-lg'>€{offExp.price}</span>
                            </div>

                            <p className='mt-[15px] max-w-[22ch] text-lg'>{offExp.description}</p>

                            <div className='flex flex-row items-center mt-[15px] text-lg'>
                                <LuClock className='text-2xl' />
                                <span className='ml-[10px]'>
                                    <strong className='mr-[5px]'>Duration:</strong> {offExp.duration}
                                </span>
                            </div>

                            <div className='flex flex-row items-center mt-[25px]'>
                                <span className='cursor-pointer underline underline-offset-4 text-lg'>Details</span>

                                <button className='bg-[#FB5870] text-white font-[500] py-[8px] px-[35px] rounded-xl
                                hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 ml-auto text-lg'>
                                    Choose
                                </button>
                            </div>
                        </div>
                    ) :
                        <div className='w-full pt-[60px] pb-[120px] flex flex-col items-center gap-[15px]'>
                            <Icon404 className='flex mx-auto' />
                            <span>Celebrity doesn&apos;t have any offline experiences yet</span>
                        </div>
                    }

                    {(offlineCollabs?.length !== 0) && 
                    <div className='border-[#CBCDCD] border-[1px] rounded-[25px] px-[20px] py-[25px] w-full max-w-[350px] flex flex-col'>
                        <h5 className='font-[600] text-lg'>Custom Collaboration</h5>

                        <p className='mt-[15px] max-w-[22ch] text-lg'>
                            You can offer a collaboration tailored to your preferences and aligns with your objectives.
                        </p>

                        <button onClick={() => setCustomCollab(true)}
                            className='bg-white text-[#1f1f1f] font-[500] py-[12px] rounded-xl border-black border-[1px] mt-auto
                        transition-colors duration-300 hover:bg-[#1f1f1f] active:bg-black hover:text-white active:text-white'>
                            Offer Collaboration
                        </button>
                    </div>}
                </div>
            </div>

            <div className={`flex-col ${onlineCollabs?.length !== 0 && 'mt-auto'}`}>
                <h2 className="text-xl font-[600]">Online Collaborations</h2>

                <div className="flex flex-row items-center mt-[5px]">
                    <span className='text-[#646868]'>{onlineCollabs?.length || 'None'} available</span>

                    {(onlineCollabs?.length !== 0) &&
                        <div className="flex flex-row items-center ml-auto">
                            <span>
                                {showOnline.index + ' / ' + Math.ceil(onlineCollabs?.length / 3)}
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
                    {onlineCollabs?.length ?
                        showOnline.show?.map((onlExp: workInterface, index: number) =>
                            <div key={index} className='border-[#CBCDCD] border-[1px] rounded-[25px] px-[20px] py-[25px] w-full max-w-[350px]'>
                                <div className='flex flex-row items-center'>
                                    <h5 className='font-[600] text-lg'>{onlExp.title}</h5>
                                    <span className='font-[600] ml-auto text-lg'>€{onlExp.price}</span>
                                </div>

                                <p className='mt-[15px] max-w-[22ch] text-lg'>{onlExp.description}</p>

                                <div className='flex flex-row items-center mt-[15px] text-lg'>
                                    <LuClock className='text-2xl' />
                                    <span className='ml-[10px]'>
                                        <strong className='mr-[5px]'>Duration:</strong> {onlExp.duration}
                                    </span>
                                </div>

                                <div className='flex flex-row items-center mt-[25px]'>
                                    <span className='cursor-pointer underline underline-offset-4 text-lg'>Details</span>

                                    <button className='bg-[#FB5870] text-white font-[500] py-[8px] px-[35px] rounded-xl
                                hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 ml-auto text-lg'>
                                        Choose
                                    </button>
                                </div>
                            </div>
                        ) :
                        <div className='w-full pt-[60px] flex flex-col items-center gap-[15px]'>
                            <Icon404 className='flex mx-auto' />
                            <span>Celebrity doesn&apos;t have any offline experiences yet</span>
                        </div>
                    }
                </div>
            </div>

            {customCollab && <CustomCollabModal setOpen={setCustomCollab} />}
        </div>
    )
}

export default OpportunitiesPanel