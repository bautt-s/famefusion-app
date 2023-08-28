import { useEffect, useState } from "react"
import ReactFlagsSelect from "react-flags-select"
import ProofButton from "../proof"

const FanAddress: React.FC<any> = (props) => {
    const { data, setData, skip } = props
    const [countries, setCountries] = useState<any>([]);

    const [selectedCountry, setSelectedCountry] =
        useState<{ value: string, label: string }>({ value: '', label: '' });

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                setSelectedCountry(data.userSelectValue);
            });
    }, []);

    const handleSelect = (code: string) => {
        const selected = countries.filter((c: any) => c.value === code)
        setSelectedCountry(selected[0])
    }

    return (
        <div>
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    Upload a proof of your address
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                Requesting proof of address is done for identity verification,
                authenticity, legal compliance, and security purposes to ensure
                accurate and secure interactions on the platform. Rest assured,
                we prioritize your privacy, and all your data is securely protected.
            </span>

            <div className="flex flex-col w-[400px] mt-[40px]">
                <span className="mb-[10px]">Goverment ID Country:</span>

                <ReactFlagsSelect
                    searchable
                    placeholder="Select country"
                    selected={selectedCountry?.value}
                    onSelect={(code) => handleSelect(code)}
                />
            </div>

            <ProofButton />
        </div>
    )
}

export default FanAddress