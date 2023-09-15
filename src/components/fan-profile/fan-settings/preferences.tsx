import SelectTimezones from "./timezones"

const SettingsPreferences: React.FC = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='preferences'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Global Preferences</h1>

            <div className="flex flex-col gap-y-[25px]">
                <div className='flex flex-col gap-y-[15px]'>
                    <span className='font-[600]'>Preferred Language</span>
                    <div className='border-[1px] border-[#a1a1a1] rounded-xl text-sm px-[15px] w-2/3'>
                        <select className="w-full h-full py-[10px]">
                            <option>Portuguese (PT)</option>
                            <option>English (EN)</option>
                            <option>Spanish (ES)</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col gap-y-[15px]'>
                    <span className='font-[600]'>Preferred Currency</span>
                    <div className='border-[1px] border-[#a1a1a1] rounded-xl text-sm px-[15px] w-2/3'>
                        <select className="w-full h-full py-[10px]">
                            <option>Euro (€)</option>
                            <option>US Dollar ($)</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col gap-y-[15px]'>
                    <span className='font-[600]'>Timezone</span>
                    <div className='border-[1px] border-[#a1a1a1] rounded-xl text-sm px-[15px] w-2/3'>
                        <SelectTimezones />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPreferences