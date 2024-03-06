import { IoIosInformationCircleOutline } from 'react-icons/io'

const Payouts: React.FC = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab gap-y-[50px]
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='payouts'>
            <div>
                <h1 className="outfit font-[600] text-2xl mb-[25px]">Payouts</h1>

                <div className="flex flex-col gap-y-[25px]">
                    <p>
                        All sales will incur a 10% FameFusion fee.
                        Additional fees may also apply based on your chosen payment system.
                        Rest assured, your payout information is safeguarded with top-tier security measures.
                    </p>

                    <span className="underline underline-offset-4">Learn more</span>
                </div>
            </div>

            <div>
                <div className='flex flex-row border-b border-b-gray-300 pb-4'>
                    <h1 className="outfit font-[600] text-2xl">Net Balance</h1>
                    <IoIosInformationCircleOutline className='ml-1' />
                </div>

                <div className='flex flex-row items-center mt-4'>
                    <span className='flex'>Current balance</span>
                    <span className='font-[600] ml-auto flex'>€250.36</span>
                </div>
            </div>

            <button className="font-[500] bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors  
            duration-300 px-[30px] py-[10px] rounded-xl text-white w-fit">
                Withdraw to bank acccount
            </button>
        </div>
    )
}

export default Payouts