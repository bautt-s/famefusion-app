import { useState } from "react"
import Payouts from "./payouts"
import PriceList from "./price-list"
import PayoutMethods from "./payout-methods"
import PayoutHistory from "./payout-history"
import Transactions from "./transactions"

const parts = ['Payouts', 'Price List', 'Payout Methods', 'Payout History', 'Transactions']

const PayoutCelebritySection: React.FC = () => {
    const [selectedPart, setSelectedPart] = useState(parts[0])

    const handleScroll = (key: string) => {
        setSelectedPart(key)

        let id = key.toLowerCase()

        if (key === 'Price List') id = 'price-list'
        else if (key === 'Payout Methods') id = 'payouts-methods'
        else if (key === 'Payout History') id = 'payout-history'

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
                <Payouts />
                <PriceList />
                <PayoutMethods />
                <PayoutHistory />
                <Transactions />
            </div>
        </div>
    )
}

export default PayoutCelebritySection