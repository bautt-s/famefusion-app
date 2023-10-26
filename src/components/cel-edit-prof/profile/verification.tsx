import { IoMdClose } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import AddressInfo from "../../modals/adressModal";
import IdentityInfo from "../../modals/identityModal";

const CelVerificationInfo: React.FC<any> = (props) => {
    const { data, updateCel } = props

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

        if ((!data?.getCelebrityById?.locationVerified && data?.getCelebrityById?.locationImg) || verifiedImages.address[0]) 
        res = 'Waiting for verification'

        if (data?.getCelebrityById?.locationVerified && data?.getCelebrityById?.locationImg) 
        res = data?.getCelebrityById?.location

        return res
    }

    const handleIdentity = () => {
        let res = 'Not provided'

        if ((!data?.getCelebrityById.selfieImg && data?.getCelebrityById.identityImg) || 
        (!verifiedImages.selfie[0] && verifiedImages.identity[0]))
        res = 'Missing selfie verification'

        if ((data?.getCelebrityById.selfieImg && !data?.getCelebrityById.identityImg) || 
        (verifiedImages.selfie[0] && !verifiedImages.identity[0]))
        res = 'Missing document verification'

        if ((!data?.getCelebrityById.selfieImg && !data?.getCelebrityById.identityImg) || 
        (verifiedImages.selfie[0] && verifiedImages.identity[0]))
        res = 'Waiting for verification'

        if (data?.getCelebrityById?.selfieVerified && data?.getCelebrityById?.identityVerified) 
        res = 'Identity verified'

        return res
    }

    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]" id='verification'>
            <h1 className="text-2xl font-[600]">Verification</h1>

            <div className="grid grid-cols-3 gap-x-[] mt-[35px]">
                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <h4>Identity</h4>

                        {data?.getCelebrityById?.identityVerified ? 
                        <BsCheckLg className='text-[#006015] text-xl mt-1' /> : 
                        <IoMdClose className='text-[#FB5870] text-xl mt-1' />}
                    </div>

                    <span className="text-[#646868] text-sm">
                        {handleIdentity()}
                    </span>

                    {((!(data?.getCelebrityById?.identityImg && data?.getCelebrityById?.selfieImg)) || (!(verifiedImages.selfie.length && verifiedImages.identity.length))) && 
                    <button onClick={() => setOpenModals({ ...openModals, identity: true })} 
                    className="w-fit underline underline-offset-4 mt-3">Add</button>}
                </div>

                <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <h4>Address</h4>

                        {data?.getCelebrityById?.locationVerified ? 
                        <BsCheckLg className='text-[#006015] text-xl mt-1' /> : 
                        <IoMdClose className='text-[#FB5870] text-xl mt-1' />}
                    </div>

                    <span className="text-[#646868] text-sm">
                        {handleAddress()}
                    </span>

                    {((!data?.getCelebrityById?.locationImg) || (!verifiedImages.address)) && 
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
                        {data?.getCelebrityById?.email}
                    </span>
                </div>
            </div>

            {openModals.address && <AddressInfo open={setOpenModals} verifiedImages={verifiedImages}
            setVerifiedImages={setVerifiedImages} updateFan={updateCel} tempImages={tempImages}
            setTempImages={setTempImages} id={data?.getCelebrityById?.id} celebrity={true} />}

            {openModals.identity && <IdentityInfo open={setOpenModals} verifiedImages={verifiedImages}
            setVerifiedImages={setVerifiedImages} updateFan={updateCel} tempImages={tempImages}
            setTempImages={setTempImages} id={data?.getCelebrityById?.id} celebrity={true} />}
        </div>
    )
}

export default CelVerificationInfo