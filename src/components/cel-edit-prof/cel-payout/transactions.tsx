import { statusTag } from "./payout-history"

const transactions = [{
    service: 'Shopping',
    username: 'Jane Novikova',
    date: '7 Aug 2023 1:20 AM',
    price: 150,
    status: 'Paid'
}, {
    service: 'Guitar Lesson',
    username: 'Bill Takery',
    date: '7 Aug 2023 1:20 AM',
    price: 150,
    status: 'Pending'
}, {
    service: 'Shopping and Consultation',
    username: 'Jessica Bets',
    date: '7 Aug 2023 1:20 AM',
    price: 150,
    status: 'Failed'
}]

const Transactions: React.FC = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='transactions'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Transactions</h1>

            <table>
                <thead>
                    <tr className="text-left text-lg">
                        <th>Gross</th>
                        <th>Fees</th>
                        <th>Payout Date</th>
                        <th>Net</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((entry, index) => 
                        <tr key={index} className={`${index > 0 && 'border-t-2 border-t-gray-200'}`}>
                            <td className="py-[15px] max-w-[100px]">{entry.service}</td>
                            <td className="py-[15px]">{entry.username}</td>
                            <td className="py-[15px]">{entry.date}</td>
                            <td className="py-[15px] pr-[40px]">{entry.price}</td>
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

export default Transactions