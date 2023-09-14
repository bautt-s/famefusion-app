const LoginModal: React.FC<any> = (props) => {
    const { setOpen } = props

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998] akatab'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setOpen(false)}></div>

            <div className="w-[400px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-col items-center gap-y-[15px]">
                    <span className='outfit text-4xl font-[700] mx-auto text-center'>Get the full experience!</span>

                    <p className='text-xl mx-auto text-center text-[#5f6161]'>
                        Sign-up or log-in in order to access all the features
                        that <strong className="text-[#FB5870]">FameFusion</strong> can offer you!
                    </p>

                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl w-full mt-[15px] text-center
                    hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300' href='/api/auth/login'>
                        Sign In
                    </a>

                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a className='bg-white text-[#1f1f1f] font-[500] py-[12px] rounded-xl border-black
                    border-[1px] flex flex-row w-full transition-colors duration-300 justify-center active:text-white
                    hover:bg-[#1f1f1f] active:bg-black hover:text-white' href='/api/auth/register'>
                        Sign Up
                    </a>
                </div>


            </div>
        </div>
    )
}

export default LoginModal