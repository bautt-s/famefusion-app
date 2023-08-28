import { useEffect, useState } from "react"
import ReactFlagsSelect from "react-flags-select"
import ProofButton from "../proof"
import SelfieButton from "../selfie"

const FanIdentity: React.FC<any> = (props) => {
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
                    Upload a proof of your identity
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                To verify your identity, we require your identity
                document and a selfie to ensure authenticity.
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

            <div className="flex flex-row gap-x-[60px]">
                <ProofButton />
                <SelfieButton />
            </div>
        </div>
    )
}

export default FanIdentity