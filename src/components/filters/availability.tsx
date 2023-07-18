import 'flowbite'
import { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"

const options = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-white",
        todayBtn: "bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]",
        clearBtn: "bg-white text-[#1f1f1f]",
        icons: "",
        text: "font-normal",
        disabledText: "text-gray-400 font-normal",
        input: "bg-white outline-none",
        inputIcon: "",
        selected: "bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63]",
    },
    datepickerClassNames: "top-12",
    inputNameProp: 'Select start date:',
    language: "en",
}

const AvailabilityAcc: React.FC = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

    const handleClose1 = (state: boolean) => {
        setShow1(state)
    }

    const handleClose2 = (state: boolean) => {
        setShow2(state)
    }

    { /* to future me: if you need to log the
         input date, use the onChange attribute.*/ }

    return (
        <div>
            <div className='relative akatab flex flex-col'>
                <span className='text-gray-400 font-[500]'>Add start date:</span>
                <Datepicker options={options} show={show1} setShow={handleClose1} />
            </div>

            <div className='relative akatab mt-[25px] flex flex-col'>
                <span className='text-gray-400 font-[500]'>Add end date:</span>
                <Datepicker options={options} show={show2} setShow={handleClose2} />
            </div>

            <button className='bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white font-[500] px-[35px] py-[10px] rounded-xl mt-[25px]'>
                Apply
            </button>
        </div>
    )
}

export default AvailabilityAcc