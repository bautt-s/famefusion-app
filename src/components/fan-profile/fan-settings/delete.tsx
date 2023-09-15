import { Checkbox } from "@mui/material"
import { useState } from "react"

const SettingsDelete: React.FC = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='delete-account'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Delete Account</h1>

            <div className="flex flex-row items-center gap-x-[15px]">
                <Checkbox onChange={() => setChecked(!checked)} 
                color="default" value={checked} sx={{
                    color: '#FB5870',
                    '&.Mui-checked': {
                        color: '#FB5870',
                    },
                }} />
                <p>
                    I acknowledge that deleting my account will result in the permanent
                    removal of all my data from FameFusion, and it cannot be recovered.
                </p>
            </div>

            <button className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl mt-[35px] text-center
            hover:bg-[#eb5269] active:bg-[#e64c63] transition-all duration-300 w-fit px-[25px] 
            disabled:opacity-30' disabled={!checked}>
                Delete Account
            </button>
        </div>
    )
}

export default SettingsDelete