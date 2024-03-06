import SettingsDelete from "@/components/fan-profile/fan-settings/delete"
import SettingsNotifications from "@/components/fan-profile/fan-settings/notifications"
import SettingsPreferences from "@/components/fan-profile/fan-settings/preferences"
import SettingsSecurity from "@/components/fan-profile/fan-settings/security"
import { useState } from "react"
import CelSettingsPrivacy from "./settings-privacy"

const parts = ['Login & Security', 'Global Preferences', 'Privacy', 'Notifications', 'Delete Account']

const SettingsCelebritySection: React.FC = () => {
    const [selectedPart, setSelectedPart] = useState(parts[0])

    const handleScroll = (key: string) => {
        setSelectedPart(key)

        let id = key.toLowerCase()

        if (key === 'Login & Security') id = 'security'
        else if (key === 'Global Preferences') id = 'preferences'
        else if (key === 'Delete Account') id = 'delete-account'

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <div className="flex flex-row px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] gap-x-[25px]">
            <ul className="shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl w-[300px] py-[15px] h-fit">
                {parts.map((item, index) =>
                    <li onClick={() => handleScroll(item)} key={index} className={`pl-[25px] py-[10px]
                    ${selectedPart === item ? 'text-[#FB5870] font-[600] border-[#FB5870]' : 'border-white'} 
                    border-l-[2px]  cursor-pointer`}>{item}</li>
                )}
            </ul>

            <div className="w-full flex flex-col gap-y-[40px]">
                <SettingsSecurity />
                <SettingsPreferences />
                <CelSettingsPrivacy />
                <SettingsNotifications />
                <SettingsDelete />
            </div>
        </div>
    )
}

export default SettingsCelebritySection