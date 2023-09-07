import { IoMdClose } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import AddressInfo from "../modals/adressModal";
import IdentityInfo from "../modals/identityModal";

const VerificationInfo: React.FC<any> = (props) => {
    const { data, updateFan } = props

    const [verifiedImages, setVerifiedImages] = useState({
        identity: [],
        address: [],
        selfie: []
    })

    const [tempImages, setTempImages] = useState({
        identity: [],
        address: [],
        selfie: []
    })

    const [openModals, setOpenModals] = useState({
        identity: false,
        address: false
    })

    const handleAddress = () => {
        let res = 'Not provided'

        if ((!data?.getFanById?.locationVerified && data?.getFanById?.locationImg) || verifiedImages.address[0]) 
        res = 'Waiting for verification'

        if (data?.getFanById?.locationVerified && data?.getFanById?.locationImg) 
        res = data?.getFanById?.location

        return res
    }

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]">
            <h1 className="text-2xl font-[600]">Verification</h1>

            <div className="grid grid-cols-3 gap-x-[] mt-[35px]">
                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <h4>Identity</h4>

                        {data?.getFanById?.identityVerified ? 
                        <BsCheckLg className='text-[#006015] text-xl mt-1' /> : 
                        <IoMdClose className='text-[#FB5870] text-xl mt-1' />}
                    </div>

                    <span className="text-[#646868] text-sm">
                        {data?.getFanById?.identityVerified ? 'Identity verified' : 'Not provided'}
                    </span>

                    {((!(data?.getFanById?.identityImg && data?.getFanById?.selfieImg)) || (!(verifiedImages.selfie.length && verifiedImages.identity.length))) && 
                    <button onClick={() => setOpenModals({ ...openModals, identity: true })} 
                    className="w-fit underline underline-offset-4 mt-3">Add</button>}
                </div>

                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <h4>Address</h4>

                        {data?.getFanById?.locationVerified ? 
                        <BsCheckLg className='text-[#006015] text-xl mt-1' /> : 
                        <IoMdClose className='text-[#FB5870] text-xl mt-1' />}
                    </div>

                    <span className="text-[#646868] text-sm">
                        {handleAddress()}
                    </span>

                    {!data?.getFanById?.locationImg || !verifiedImages.address && 
                    <button onClick={() => setOpenModals({ ...openModals, address: true })} 
                    className="w-fit underline underline-offset-4 mt-3">
                        Add
                    </button>}
                </div>

                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <h4>Email</h4>

                        <BsCheckLg className='text-[#006015] text-xl mt-1' />
                    </div>

                    <span className="text-[#646868] text-sm">
                        {data?.getFanById?.email}
                    </span>
                </div>
            </div>

            {openModals.address && <AddressInfo open={setOpenModals} verifiedImages={verifiedImages}
            setVerifiedImages={setVerifiedImages} updateFan={updateFan} tempImages={tempImages}
            setTempImages={setTempImages} id={data?.getFanById?.id} />}

            {openModals.identity && <IdentityInfo open={setOpenModals} verifiedImages={verifiedImages}
            setVerifiedImages={setVerifiedImages} updateFan={updateFan} tempImages={tempImages}
            setTempImages={setTempImages} id={data?.getFanById?.id} />}
        </div>
    )
}

export default VerificationInfo