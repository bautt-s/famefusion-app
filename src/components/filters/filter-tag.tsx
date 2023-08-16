import { RxCross1 } from 'react-icons/rx'
import { FilterProps } from '../browse-sections/main-browse'

type TagProps = {
    item: string | (Date | undefined)[],
    selectedFilters: FilterProps['selectedFilters'],
    setSelectedFilters: Function,
    origin: string,
    array?: string[]
}

const FilterTag: React.FC<TagProps> = (props) => {
    const { item, selectedFilters, setSelectedFilters, origin, array } = props

    const handleClear = () => {
        if (origin === 'price') setSelectedFilters({ ...selectedFilters, price: { ...selectedFilters.price, range: false } })
        else setSelectedFilters({ ...selectedFilters, [origin]: array?.filter(o => o !== item) })
    }

    function formatDate(date: Date) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const formattedDate = `${months[monthIndex]} ${day}`;

        return formattedDate;
    }

    const formatItem = (i: string | (Date | undefined)[]) => {
        if (i === '-30') return 'Under 30'
        if (i === 'media-promotion') return 'Media Promotion'

        if (origin === 'availability') {
            const fromDate = i[0] ? new Date(i[0]) : undefined;
            const toDate = i[1] ? new Date(i[1]) : undefined;
    
            if (fromDate && toDate) return `${formatDate(fromDate)} - ${formatDate(toDate)}`;
            else if (fromDate && !toDate) return `From ${formatDate(fromDate)}`;
            else if (!fromDate && toDate) return `Until ${formatDate(toDate)}`;
        }

        return String(i[0]).toUpperCase() + i.slice(1)
    }

    return (
        <div className='flex flex-row items-center bg-[#EEF2FF] px-[15px] py-[2px] rounded-xl'>
            <span className='text-[#6558FB]'>{formatItem(item)}</span>
            <RxCross1 className='text-sm mt-[2px] text-[#1F1F1F] cursor-pointer flex ml-[15px]' onClick={handleClear} />
        </div>
    )
}

export default FilterTag