import { useState } from 'react'
import DatePicker from "react-datepicker"
import "./datepicker.css"

const AvailabilityPanel: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const addDays = (newDate: Date, days: number) => {
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }

    const formatDate = (date: Date): string => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}.${month}.${year}`;
    };

    return (
        <div className="flex flex-col w-full h-2/3 mt-[45px] rounded-[25px] shadow-xl border py-[32px] px-[25px] akatab">
            <div className='flex flex-row border w-fit rounded-2xl'>
                <div className='flex flex-col pl-[15px] py-[10px] pr-[60px] rounded-2xl'>
                    <span className='text-[#979B9B] text-sm'>Start date</span>
                    <span className='text-lg font-[500]'>{formatDate(startDate)}</span>
                </div>

                <div className='flex flex-col pl-[15px] py-[10px] pr-[60px] rounded-2xl'>
                    <span className='text-[#979B9B] text-sm'>End date</span>
                    <span className='text-lg font-[500]'>{endDate ? formatDate(endDate) : 'Select end date'}</span>
                </div>
            </div>

            <div className='flex flex-row mt-[25px] justify-center'>
                <DatePicker
                    wrapperClassName="datePicker"
                    calendarClassName="calendarPicker"
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                    minDate={new Date()}
                    monthsShown={2}
                />
            </div>

            <div className='flex flex-row mt-auto ml-auto'>
                <button className='bg-white text-[#1f1f1f] font-[500] py-[8px] px-[35px] rounded-xl border-black border-[1px]
                    transition-colors duration-300 hover:bg-[#1f1f1f] active:bg-black hover:text-white active:text-white'>
                    Clear
                </button>

                <button className='bg-[#FB5870] text-white font-[500] py-[8px] px-[35px] rounded-xl
                    hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 ml-[10px]'>
                    Apply
                </button>
            </div>
        </div>
    )
}

export default AvailabilityPanel