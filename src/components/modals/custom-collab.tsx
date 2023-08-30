import { TfiClose } from 'react-icons/tfi'

const CustomCollabModal: React.FC<{ setOpen: Function }> = (props) => {
    const { setOpen } = props

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setOpen(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center">
                    <span className='outfit text-4xl font-[700]'>Offer Collaboration</span>
                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setOpen(false)} />
                </div>

                <div className='max-h-[400px] overflow-y-scroll thin-scroll mt-[35px] pr-[25px] akatab'>
                    <p className='max-w-[65ch]'>
                        We value your thoughts and opinions regarding your recent experience meeting celebrities.
                        Your feedback will help us enhance our services and provide an even more memorable experiences in the future.
                    </p>

                    <form className='flex flex-col gap-y-[30px]' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-fit gap-y-[15px] mt-[40px]'>
                            <span className='font-[600]'>What type of collaboration do you want?</span>

                            <div className='flex flex-row items-center pl-[25px] w-full border-[1px] border-[#a1a1a1] py-[7px] rounded-xl'>
                                <input type='radio' className='w-[25px] h-[25px] accent-[#FB5870]' />
                                <span className='ml-[15px]'>Offline</span>
                            </div>

                            <div className='flex flex-row items-center pl-[25px] w-full border-[1px] border-[#a1a1a1] py-[7px] rounded-xl'>
                                <input type='radio' className='w-[25px] h-[25px] accent-[#FB5870]' />
                                <span className='ml-[15px]'>Online</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-[15px]'>
                            <span className='font-[600]'>Location</span>
                            <input className='border-[1px] border-[#a1a1a1] py-[10px] rounded-xl text-sm px-[15px] w-2/3'
                            placeholder='Where would the location be hosted?' />
                        </div>

                        <div className='flex flex-col gap-y-[15px]'>
                            <span className='font-[600]'>Detail the terms and objectives of the collaboration</span>
                            <textarea placeholder='Describe collaboration' 
                            className='border-[1px] border-[#a1a1a1] rounded-xl resize-none px-[15px] py-[7px] text-sm w-full h-[100px]'>
                            </textarea>
                        </div>

                        <div className='flex flex-col gap-y-[10px]'>
                            <span className='font-[600]'>Project price</span>
                            <p>You can discuss the price with celebrity after confirmation</p>
                            <input className='border-[1px] border-[#a1a1a1] py-[10px] rounded-xl text-sm px-[15px] w-2/3' 
                            placeholder='Insert price' />
                        </div>

                        <div className='flex flex-col gap-y-[15px]'>
                            <span className='font-[600]'>Select the amount to buy</span>
                            <select className='border-[1px] border-[#a1a1a1] py-[10px] rounded-xl text-sm px-[15px] w-2/3'>
                                <option>Within the next few weeks</option>
                            </select>
                        </div>

                        <button className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl mt-[15px]
                      hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 w-fit px-[25px]'>Send offer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomCollabModal