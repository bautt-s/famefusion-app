import { useState } from 'react'
import Filters from '../components/filters/filters'

const filterItems = ['Show All', 'Featured', 'Actors', 'Athletes',
    'Comedians', 'Creators', 'Musicians', 'Professionals', 'Reality TV']

const MainBrowse: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState(filterItems[0])

    return (
        <div className="w-full flex flex-col pb-[120px]">
            <div className="flex flex-col justify-center w-full bg-[#F7F8FC] h-[100px] relative 
            px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] items-center">
                <ul className="flex flex-row gap-[25px]">
                    {filterItems.map((item, index) =>
                        <li onClick={() => setSelectedFilter(filterItems[index])} className={` px-[16px] py-[5px] rounded-full 
                        text-lg border text-[#646868] ${selectedFilter === item ? 'bg-[#1f1f1f] text-white' : 'bg-white'}
                        cursor-pointer transition-colors duration-500 shadow-sm`} key={index}>
                            {item}
                        </li>
                    )}
                </ul>

                <div className="absolute left-0 bottom-[100px] flex flex-row">
                    <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-tr-[27px] z-20"></div>
                    <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative top-[10px] right-[2px] z-10">
                        <div className="w-full h-full bg-white rounded-bl-full"></div>
                    </div>
                </div>

                <div className="absolute right-0 top-[100px] flex flex-row">
                    <div className="w-[25px] h-[25px] bg-[#F7F8FC] relative bottom-[0px] left-[2px] z-10">
                        <div className="w-full h-full bg-white rounded-tr-full"></div>
                    </div>
                    <div className="w-[150px] h-[35px] bg-[#F7F8FC] rounded-bl-[27px] z-20"></div>
                </div>
            </div>

            <div className='flex flex-row justify-center pt-[60px]'>
                <Filters />
            </div>
        </div>
    )
}

export default MainBrowse