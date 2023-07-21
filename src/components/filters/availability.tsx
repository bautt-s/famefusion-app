import 'flowbite'
import { useState } from 'react'
import { FilterProps } from '../../browse-sections/main-browse'
import Datepicker from "tailwind-datepicker-react"

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const AvailabilityAcc: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [dates, setDates] = useState<Date[]>([new Date(), new Date()])

    const options = {
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        maxDate: new Date("2030-01-01"),
        minDate: yesterday,
        theme: {
            background: "bg-white",
            todayBtn: "bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]",
            clearBtn: "",
            icons: "",
            text: "font-normal",
            disabledText: "text-gray-200",
            input: "",
            inputIcon: "",
            selected: "bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] hover:text-[#FB5870]",
        },
        datepickerClassNames: "top-12",
        inputNameProp: 'Select start date:',
        language: "en",
    }
    
    const options2 = {
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        maxDate: new Date("2030-01-01"),
        minDate: dates[0],
        theme: {
            background: "bg-white",
            todayBtn: "bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]",
            clearBtn: "",
            icons: "",
            text: "font-normal",
            disabledText: "text-gray-200",
            input: "",
            inputIcon: "",
            selected: "bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] hover:text-[#FB5870]",
        },
        datepickerClassNames: "top-12",
        inputNameProp: 'Select end date:',
        language: "en",
    }

    const handleClose1 = (state: boolean) => {
        setShow1(state)
    }

    const handleClose2 = (state: boolean) => {
        setShow2(state)
    }

    const handleChange1 = (selectedDate: Date) => {
        setDates([selectedDate, dates[1]])
    }

    const handleChange2 = (selectedDate: Date) => {
        setDates([dates[0], selectedDate])
    }

    const applyDateFilter = () => {
        setSelectedFilters({ 
            ...selectedFilters, 
            availabilityFilter: { startDate: dates[0], endDate: dates[1] } 
        })
    }

    return (
        <div className='flex flex-col justify-center'>
            <div className='relative akatab flex flex-col'>
                <span className='text-gray-400 font-[500] mb-[5px]'>Add start date:</span>
                <Datepicker options={options} show={show1} setShow={handleClose1} onChange={handleChange1} />
            </div>

            <div className='relative akatab mt-[25px] flex flex-col mb-[5px]'>
                <span className='text-gray-400 font-[500]'>Add end date:</span>
                <Datepicker options={options2} show={show2} setShow={handleClose2} onChange={handleChange2} />
            </div>

            <button onClick={() => applyDateFilter()}
            className='bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white font-[500] px-[35px] py-[10px] rounded-xl mt-[25px]'>
                Apply
            </button>
        </div>
    )
}

export default AvailabilityAcc