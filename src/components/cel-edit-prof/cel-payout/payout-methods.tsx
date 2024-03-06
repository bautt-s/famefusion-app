import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import { LiaPlusSolid } from "react-icons/lia";

const PayoutMethods: React.FC = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='payout-methods'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Payout Methods</h1>

            <div className="flex flex-col gap-y-[15px]">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center gap-x-[15px]">
                        <FaCcMastercard className='text-xl' />
                        <span>MasterCard *** 3456</span>
                    </div>

                    <span className='underline underline-offset-4 text-[#D20505] ml-auto'>
                        Remove
                    </span>
                </div>

                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center gap-x-[15px]">
                        <FaCcVisa className='text-xl' />
                        <span>Visa *** 2808</span>
                    </div>

                    <span className='underline underline-offset-4 text-[#D20505] ml-auto'>
                        Remove
                    </span>
                </div>
            </div>

            <button className='flex flex-row items-center border border-black transition-all
            px-[25px] py-[10px]  rounded-xl w-fit gap-x-[15px] mt-8 hover:bg-gray-100 duration-300'>
                <LiaPlusSolid className='text-xl' />
                <span className='font-[500]'>Add payout method</span>
            </button>
        </div>
    )
}

export default PayoutMethods