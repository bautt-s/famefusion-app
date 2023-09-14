import { useEffect, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import Icon404 from '@/svgs/Icon404'
import ExperienceCard from './experience-card'

export interface workInterface {
    id: string,
    title: string,
    price: number,
    description: string,
    duration: string,
    collaboration: boolean,
    online: boolean,
}

let screenWidth = 0
if (typeof window !== 'undefined') screenWidth = window.innerWidth

const cardsShowed = screenWidth > 1280 ? 3 : 2

const ExperiencesPanel: React.FC<any> = (props) => {
    const [offlineExp, setOfflineExp] = useState<workInterface[]>([])
    const [onlineExp, setOnlineExp] = useState<workInterface[]>([])

    const [showOffline, setShowOffline] = useState({
        index: 1,
        show: offlineExp?.slice(0, cardsShowed)
    })

    const [showOnline, setShowOnline] = useState({
        index: 1,
        show: onlineExp?.slice(0, cardsShowed)
    })

    const handlePage = (mode: string, sense: string) => {
        if (sense === 'asc') {
            if (mode === 'online') {
                const limit = Math.ceil(onlineExp?.length / cardsShowed)

                if (showOnline.index !== limit) {
                    const newIndex = showOnline.index + 1

                    setShowOnline({
                        index: newIndex,
                        show: onlineExp?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                    })
                }
            } else {
                const limit = Math.ceil(offlineExp?.length / cardsShowed)

                if (showOffline.index !== limit) {
                    const newIndex = showOffline.index + 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineExp?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                    })
                }
            }
        } else {
            if (mode === 'online') {
                if (showOnline.index - 1 !== 0) {
                    const newIndex = showOnline.index - 1

                    setShowOnline({
                        index: newIndex,
                        show: onlineExp?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                    })
                }
            } else {
                if (showOffline.index - 1 !== 0) {
                    const newIndex = showOffline.index - 1

                    setShowOffline({
                        index: newIndex,
                        show: offlineExp?.slice((newIndex - 1) * cardsShowed, newIndex * cardsShowed)
                    })
                }
            }
        }
    }

    useEffect(() => {
        setOfflineExp(props?.experiences?.filter((e: workInterface) => !e?.online))
        setOnlineExp(props?.experiences?.filter((e: workInterface) => !e?.online))
    }, [props?.experiences])

    useEffect(() => {
        setShowOffline({
            index: 1,
            show: offlineExp?.slice(0, cardsShowed)
        })

        setShowOnline({
            index: 1,
            show: onlineExp?.slice(0, cardsShowed)
        })
    }, [onlineExp])
    
    return (
        <div className="flex flex-col akatab h-full">
            <div className="flex flex-col mb-[40px]">
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

                <div className='flex flex-row gap-x-[15px] mt-[25px]'>
                    {offlineExp?.length ? showOffline.show?.map((offExp: workInterface, index: number) =>
                        <ExperienceCard key={index} exp={offExp} />
                    ) :
                        <div className='w-full pt-[60px] pb-[120px] flex flex-col items-center gap-[15px]'>
                            <Icon404 className='flex mx-auto' />
                            <span>Celebrity doesn&apos;t have any offline experiences yet</span>
                        </div>
                    }
                </div>
            </div>

            <div className={`flex flex-col`}>
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

                <div className='flex flex-row gap-x-[15px] mt-[25px]'>
                    {onlineExp?.length ? showOnline.show?.map((onlExp: workInterface, index: number) =>
                        <ExperienceCard key={index} exp={onlExp} />
                    ) :
                        <div className='w-full pt-[60px] flex flex-col items-center gap-[15px]'>
                            <Icon404 className='flex mx-auto' />
                            <span>Celebrity doesn&apos;t have any online experiences yet</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ExperiencesPanel