import { useEffect, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { workInterface } from './experiences'
import CustomCollabModal from '../modals/custom-collab'
import Icon404 from '@/svgs/Icon404'
import ExperienceCard from './experience-card'

let screenWidth = 0
if (typeof window !== 'undefined') screenWidth = window.innerWidth

const cardsShowed = screenWidth > 1280 ? 3 : 2
const offlineShowed = cardsShowed - 1

const OpportunitiesPanel: React.FC<any> = (props) => {
    const [customCollab, setCustomCollab] = useState(false)
    const [offlineCollabs, setOfflineCollabs] = useState<workInterface[]>([])
    const [onlineCollabs, setOnlineCollabs] = useState<workInterface[]>([])

    const [showOffline, setShowOffline] = useState({
        index: 1,
        show: offlineCollabs?.slice(0, offlineShowed)
    })

    const [showOnline, setShowOnline] = useState({
        index: 1,
        show: onlineCollabs?.slice(0, cardsShowed)
    })

    const handlePage = (mode: string, sense: string) => {
        if (sense === 'asc') {
            if (mode === 'online') {
                const limit = Math.ceil(onlineCollabs?.length / cardsShowed)

                if (showOnline.index !== limit) {
                    const newIndex = showOnline.index + 1

                    setShowOnline({
                        index: newIndex,
                        show: offlineCollabs?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                    })
                }
            } else {
                const limit = Math.ceil(offlineCollabs?.length / offlineShowed)

                if (showOffline.index !== limit) {
                    const newIndex = showOffline.index + 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineCollabs?.slice((newIndex - 1) * offlineShowed, newIndex * offlineShowed)
                    })
                }
            }
        } else {
            if (mode === 'online') {
                if (showOnline.index - 1 !== 0) {
                    const newIndex = showOnline.index - 1

                    setShowOnline({
                        index: newIndex,
                        show: onlineCollabs?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                    })
                }
            } else {
                if (showOffline.index - 1 !== 0) {
                    const newIndex = showOffline.index - 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineCollabs?.slice((newIndex - 1) *offlineShowed, newIndex * offlineShowed)
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
            show: offlineCollabs?.slice(0, offlineShowed)
        })

        setShowOnline({
            index: 1,
            show: onlineCollabs?.slice(0, cardsShowed)
        })
    }, [offlineCollabs])

    return (
        <div className="flex flex-col akatab h-full">
            <div className="flex flex-col mb-[40px]">
                <h2 className="text-xl font-[600]">Offline Collaborations</h2>

                <div className="flex flex-row items-center mt-[5px]">
                    <span className='text-[#646868]'>{offlineCollabs?.length || 'None'} available</span>

                    {(offlineCollabs?.length !== 0) &&
                        <div className="flex flex-row items-center ml-auto">
                            <span>
                                {showOffline.index + ' / ' + Math.ceil(offlineCollabs?.length / offlineShowed)}
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

                <div className='flex flex-row gap-x-[15px] mt-[25px]'>
                    {offlineCollabs?.length ? showOffline.show?.map((offExp: workInterface, index: number) =>
                        <ExperienceCard key={index} exp={offExp} />
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

            <div className={`flex flex-col`}>
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

                <div className='flex flex-row gap-x-[15px] mt-[25px]'>
                    {onlineCollabs?.length ?
                        showOnline.show?.map((onlExp: workInterface, index: number) =>
                        <ExperienceCard key={index} exp={onlExp} />
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