import { CiSearch } from 'react-icons/ci'
import { GoChevronDown } from 'react-icons/go'

const portugalIcon = require('../static/icon-portugal.png')

const NavSection: React.FC = () => {
    return (
        <nav className="w-full h-[90px] py-[25px] px-[200px] flex flex-row items-center border-b-[1px]">
            <div className="flex flex-row items-center">
                <span className="font-bold text-3xl text-[#FB5870]">FameFusion</span>

                <ul className="flex flex-row text-base akatab font-[600] gap-[35px] mt-[5px] ml-[65px]">
                    <li>Browse celebrity</li>
                    <li>How it works</li>
                    <li>For business</li>
                    <li>Join as talent</li>
                </ul>
            </div>

            <div className='flex flex-row ml-auto gap-[25px] items-center'>
                <div className='bg-white border-[#bec2c2] border-[2px] flex flex-row items-center px-[15px] rounded-xl py-[5px]'>
                    <CiSearch className='text-2xl text-[#505252]' />

                    <form>
                        <input type="text" placeholder="Search" className="bg-white ml-[15px] w-[100px] akatab" />
                    </form>

                    <GoChevronDown />
                </div>

                <img src={portugalIcon} className='w-[32px] h-[32px]' />

                <button className='bg-[#1E1F1E] text-white px-[35px] rounded-xl akatab py-[8px]'>
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default NavSection