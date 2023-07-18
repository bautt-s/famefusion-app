import { CiSearch } from 'react-icons/ci'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const logo = require('../static/logo.png')
const portugalIcon = require('../static/icon-portugal.png')

const NavSection: React.FC = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => setMenu(!menu)

    // state and function made to show nav on upper scroll
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) setVisible(false)
        else setVisible(true)

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <nav className={`z-[999] transition-all duration-300 bg-white w-full fixed px-[40px] lg:px-[60px] ${prevScrollPos && 'shadow-xl'}
        xl:px-[120px] 2xl:px-[200px] flex flex-row items-center border-b-[1px] ${visible ? 'h-[90px] py-[25px]' : 'h-0'}`}>
            <div className={`flex flex-row items-center ${visible ? 'md:flex' : 'md:hidden'}`}>
                <Link to='/'>
                    <img src={logo} className='lg:w-[140px] lg:h-auto xl:w-[170px] xl:h-[25px]' alt={'FameFusion Logo'} />
                </Link>

                <ul className="hidden lg:flex flex-row text-base akatab font-[500] lg:gap-[15px] xl:gap-[25px] 
                2xl:gap-[35px] mt-[5px] lg:ml-[25px] xl:ml-[40px] ml-[65px] nav-items">
                    <Link className="relative after:absolute after:bg-[#FB5870] after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 
                        after:transition-transform after:ease-in-out after:duration-300 cursor-pointer" to='/browse'>Browse celebrity</Link>

                    <div className="relative after:absolute after:bg-[#FB5870] after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 
                        after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">How it works</div>

                    <div className="relative after:absolute after:bg-[#FB5870] after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 
                        after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">For business</div>

                    <div className="relative after:absolute after:bg-[#FB5870] after:bottom-0 after:left-0 after:h-[2px] 
                        after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 
                        after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">Join as talent</div>
                </ul>
            </div>

            <div className={`hidden flex-row ml-auto lg:gap-[10px] xl:gap-[20px] 2xl:gap-[25px] items-center ${visible ? 'lg:flex' : 'lg:hidden'}`}>
                <div className='bg-white border-[#bec2c2] border-[1px] flex flex-row items-center lg:px-[5px] xl:px-[10px] 2xl:px-[15px] rounded-xl py-[5px]'>
                    <CiSearch className='text-2xl text-[#505252]' />

                    <form>
                        <input type="text" placeholder="Search" className="bg-white ml-[15px] lg:w-[80px] 2xl:w-[100px] 
                        2xl:focus:w-[200px] transition-all duration-500 akatab outline-none searchbar" />
                    </form>
                </div>

                <img src={portugalIcon} className='w-[32px] h-[32px] hidden xl:flex' alt='Country Icon' />

                <button className='bg-[#1E1F1E] hover:bg-[#2b2b2b] active:bg-[#313131] text-white 
                lg:px-[20px] 2xl:px-[35px] rounded-xl akatab py-[8px] font-[500] transition-colors duration-300'>
                    Sign In
                </button>
            </div>

            <BiMenuAltRight onClick={handleMenu} className={`flex lg:hidden mt-[5px] ml-auto text-5xl text-[#FB5870] z-50 
            ursor-pointer ${menu && 'fixed right-[23px] rotate-90'} transition-all duration-300`} />

            <div className={`fixed right-0 top-0 h-screen z-40 lg:hidden w-full ${menu ? 'backdrop-blur-sm' : 'pointer-events-none'}`}>
                <div className={`ml-auto ${menu ? 'w-full md:w-2/3' : 'w-0'} h-screen bg-[#1F1F1F] flex flex-col transition-all duration-300 relative`}>
                    <div className={`flex-row mx-auto mt-[240px] ${menu ? 'flex' : 'hidden'}`}>
                        <div className='bg-white border-[#bec2c2] border-[2px] flex flex-row items-center rounded-full py-[5px] w-fit px-[20px]'>
                            <CiSearch className='text-2xl text-[#505252]' />

                            <form>
                                <input type="text" placeholder="Search" className="bg-white ml-[15px] akatab outline-none w-[200px]" />
                            </form>
                        </div>

                        <img src={portugalIcon} className='w-[48px] h-[48px] ml-[10px]' alt='Country Icon' />
                    </div>

                    <div className={`flex flex-col items-center mt-[40px] ${menu ? 'flex' : 'hidden'}`}>
                        <ul className='akatab text-white text-lg text-center'>
                            <Link to='/browse'>Browse celebrity</Link>
                            <li className='mt-[20px]'>How it works</li>
                            <li className='mt-[20px]'>For business</li>
                            <li className='mt-[20px]'>Join as talent</li>
                        </ul>

                        <button className='bg-[#FB5870] text-white px-[35px] rounded-xl akatab py-[8px] font-[500] w-fit mt-[60px]'>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavSection