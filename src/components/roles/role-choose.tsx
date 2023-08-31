type ChooseRoleType = {
    name: string | null,
    roleState: {
        role: string,
        option: string,
        mainScreen: boolean,
        signupCompleted: boolean
    },
    setRoleState: Function
}

const ChooseRole: React.FC<ChooseRoleType> = (props) => {
    const { name, roleState, setRoleState } = props

    const handleRole = () => {
        if (roleState.option) setRoleState({ ...roleState, role: roleState.option, mainScreen: false })
    }

    return (
        <div className="py-[180px] akatab">
            <div className="border-[#bbbbbb] border-[1px] flex flex-col items-center justify-center mx-auto w-fit px-[80px] py-[60px] rounded-[45px]">
                <span className="text-[#8a8a8a] font-[500] text-lg mb-[10px]">Hey {name || 'there'}!</span>
                <h1 className="text-5xl text-[#1f1f1f] outfit font-[700]">Join
                    <strong className="text-[#FB5870]"> FameFusion </strong>as:
                </h1>

                <fieldset>
                    <div className="grid grid-cols-3 gap-[75px] mt-[60px]">
                        <div className="flex flex-col border-[#bbbbbb] border-[1px] rounded-[35px] 
                            p-[32px] cursor-pointer" onClick={() => setRoleState({ ...roleState, option: 'fan' })}>
                            <div className="flex flex-row">
                                <img src='/icon-fan.png' />

                                <input className="ml-auto w-[20px] h-[20px] accent-[#FB5870]" type='radio' id='fan'
                                    name='fan' value='fan' checked={roleState.option === 'fan'} onChange={() => setRoleState({ ...roleState, option: 'fan' })} />
                            </div>
                            <p className="text-lg max-w-[17ch] mt-[15px]">I&apos;m <strong>a fan</strong> seeking memorable experiences with celebrities</p>
                        </div>

                        <div className="flex flex-col border-[#bbbbbb] border-[1px] rounded-[35px] 
                            p-[32px] cursor-pointer" onClick={() => setRoleState({ ...roleState, option: 'business' })}>
                            <div className="flex flex-row">
                                <img src='/icon-business.png' />

                                <input className="ml-auto w-[20px] h-[20px] accent-[#FB5870]" type='radio' id='business'
                                    name='business' value='business' checked={roleState.option === 'business'} onChange={() => setRoleState({ ...roleState, option: 'business' })} />
                            </div>
                            <p className="text-lg max-w-[18ch] mt-[15px]">I&apos;m <strong>a business</strong> interested in collaborating with celebrities</p>
                        </div>

                        <div className="flex flex-col border-[#bbbbbb] border-[1px] rounded-[35px] 
                            p-[32px] cursor-pointer" onClick={() => setRoleState({ ...roleState, option: 'celebrity' })}>
                            <div className="flex flex-row">
                                <img src='/icon-celebrity.png' />

                                <input className="ml-auto w-[20px] h-[20px] accent-[#FB5870]" type='radio' id='celebrity'
                                    name='celebrity' value='celebrity' checked={roleState.option === 'celebrity'} onChange={() => setRoleState({ ...roleState, option: 'celebrity' })} />
                            </div>
                            <p className="text-lg max-w-[18ch] mt-[15px]">I&apos;m <strong>a celebrity</strong> exploring opportunities to connect with fans and businesses.</p>
                        </div>
                    </div>

                    <button className="bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] 
                      text-white py-[12px] w-[320px] rounded-2xl mx-auto flex mt-[60px]" onClick={handleRole}>
                        <span className="mx-auto">
                            {
                                roleState.option ?
                                    'Register as a ' + roleState.option?.charAt(0).toUpperCase() + roleState.option?.slice(1)
                                    : 'Pick a role to continue!'
                            }
                        </span>
                    </button>
                </fieldset>
            </div>
        </div>
    )
}

export default ChooseRole