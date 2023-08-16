import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import NavSection from "../components/landing-sections/nav";
import FooterSection from "../components/landing-sections/footer";
import { useState } from "react";

const iconFan = require('../static/icon-fan.png')
const iconCelebrity = require('../static/icon-celebrity.png')
const iconBusiness = require('../static/icon-business.png')

const Roles = () => {
    const { user } = useKindeAuth();

    const [selectedOption, setSelectedOption] = useState<null | string>(null)

    return (
        <div>
            <NavSection />

            <div className="pt-[180px] pb-[180px] akatab">
                <div className="border-[#bbbbbb] border-[1px] flex flex-col items-center justify-center mx-auto w-fit px-[80px] py-[60px] rounded-[45px]">
                    <span className="text-[#8a8a8a] font-[500] text-lg mb-[10px]">Hey {user?.given_name}!</span>
                    <h1 className="text-5xl text-[#1f1f1f] outfit font-[700]">Join
                        <strong className="text-[#FB5870]"> FameFusion </strong>as:
                    </h1>

                    <fieldset>
                        <div className="grid grid-cols-3 gap-[75px] mt-[60px]">
                            <div className="flex flex-col border-[#bbbbbb] border-[1px] rounded-[35px] 
                            p-[32px] cursor-pointer" onClick={() => setSelectedOption('fan')}>
                                <div className="flex flex-row">
                                    <img src={iconFan} />

                                    <input className="ml-auto w-[20px] h-[20px] accent-[#FB5870]" type='radio' id='fan' 
                                    name='fan' value='fan' checked={selectedOption === 'fan'} onChange={() => setSelectedOption('fan')}  />
                                </div>
                                <p className="text-lg max-w-[17ch] mt-[15px]">I'm <strong>a fan</strong> seeking memorable experiences with celebrities</p>
                            </div>

                            <div className="flex flex-col border-[#bbbbbb] border-[1px] rounded-[35px] 
                            p-[32px] cursor-pointer" onClick={() => setSelectedOption('business')}>
                                <div className="flex flex-row">
                                    <img src={iconBusiness} />

                                    <input className="ml-auto w-[20px] h-[20px] accent-[#FB5870]" type='radio' id='business' 
                                    name='business' value='business' checked={selectedOption === 'business'} onChange={() => setSelectedOption('business')} />
                                </div>
                                <p className="text-lg max-w-[18ch] mt-[15px]">I'm <strong>a business</strong> interested in collaborating with celebrities</p>
                            </div>

                            <div className="flex flex-col border-[#bbbbbb] border-[1px] rounded-[35px] 
                            p-[32px] cursor-pointer" onClick={() => setSelectedOption('celebrity')}>
                                <div className="flex flex-row">
                                    <img src={iconCelebrity} />

                                    <input className="ml-auto w-[20px] h-[20px] accent-[#FB5870]" type='radio' id='celebrity' 
                                    name='celebrity' value='celebrity' checked={selectedOption === 'celebrity'} onChange={() => setSelectedOption('celebrity')} />
                                </div>
                                <p className="text-lg max-w-[18ch] mt-[15px]">I'm <strong>a celebrity</strong> exploring opportunities to connect with fans and businesses.</p>
                            </div>
                        </div>

                        <button className="bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] 
                    text-white py-[12px] px-[120px] rounded-2xl mx-auto flex mt-[60px]">
                            Register as a Fan
                        </button>
                    </fieldset>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default Roles