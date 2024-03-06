const history = [{
    gross: 150.67,
    fees: 15.8,
    date: '7 Aug 2023 1:20 AM',
    net: 132.67,
    status: 'Paid'
}, {
    gross: 2093.76,
    fees: 121.78,
    date: '7 Aug 2023 1:20 AM',
    net: 1332.67,
    status: 'Pending'
}, {
    gross: 78.91,
    fees: 9.98,
    date: '7 Aug 2023 1:20 AM',
    net: 56.9,
    status: 'Failed'
}]

export const statusTag = (status: string) => {
    if (status === 'Paid') return 'text-[#006015] bg-[#E6F3E5]'
    else if (status === 'Pending') return 'text-[#DD6B01] bg-[#FFF1E0]'
    else return 'text-[#D20505] bg-[#FEEEF1]'
}


const PayoutHistory: React.FC = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='payout-history'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Payout History</h1>

            <table>
                <thead>
                    <tr className="text-left text-lg">
                        <th className="pr-[25px]">Gross</th>
                        <th className="pr-[25px]">Fees</th>
                        <th>Payout Date</th>
                        <th>Net</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {history.map((entry, index) => 
                        <tr key={index} className={`${index > 0 && 'border-t-2 border-t-gray-200'}`}>
                            <td className="py-[15px]">{entry.gross}</td>
                            <td className="py-[15px]">{entry.fees}</td>
                            <td className="py-[15px]">{entry.date}</td>
                            <td className="py-[15px]">{entry.net}</td>
                            <td className="py-[15px] max-w-[50px]">
                                <span className={`px-[15px] py-[4px] rounded-full ${statusTag(entry.status)}`}>
                                    {entry.status}
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PayoutHistory