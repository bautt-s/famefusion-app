import Datepicker from "react-tailwindcss-datepicker"

const FanBirthdate: React.FC<any> = (props) => {
    const { data, setData } = props

    const handleValueChange = (newValue: any) => {
        setData({ ...data, birthYear: newValue });
    }

    return (
        <div>
            <h1 className="outfit font-[700] text-4xl mb-[5px]">What is your date of birth?</h1>

            <span className="text-[#646868]">
                Knowing your age is essential for personalization, legal compliance, safety, and privacy reasons.
            </span>

            <div className='my-[25px] border-[2px] border-gray-300 rounded-lg w-[400px] z-[9999]'>
                <Datepicker
                    primaryColor={"rose"}
                    placeholder='Add Date'
                    useRange={false}
                    asSingle={true}
                    value={data?.birthYear}
                    onChange={handleValueChange}
                    popoverDirection='down'
                />
            </div>
        </div>
    )
}

export default FanBirthdate