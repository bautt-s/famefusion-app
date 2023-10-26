import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { TfiClose } from "react-icons/tfi"
import { compareObjects } from "@/utils/functions";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { LuUpload } from "react-icons/lu";

const AddressInfo: React.FC<any> = (props) => {
    const { open, verifiedImages, setVerifiedImages, updateFan, tempImages, setTempImages, id, celebrity } = props

    const [countries, setCountries] = useState<any>([]);

    const [selectedCountry, setSelectedCountry] =
        useState<{ value: string, label: string }>({ value: '', label: '' });

    const handleSelect = (code: string) => {
        const selected = countries.filter((c: any) => c.value === code)
        setSelectedCountry(selected[0])
    }

    const handleSubmit = () => {
        updateFan({
            variables: celebrity ? 
            {
                celebrity: {
                    id,
                    locationImg: tempImages.address[0].dataURL
                }
            } : 
            {
                fan: {
                    id,
                    locationImg: tempImages.address[0].dataURL
                }
            }

        })

        setVerifiedImages({ ...verifiedImages, address: tempImages.address })
    }

    const onChange = (imageList: ImageListType) => {
        setTempImages({ ...tempImages, address: imageList as never[] });
    }

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

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => open(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center">
                    <span className='outfit text-4xl font-[700]'>Proof of Address</span>
                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => open(false)} />
                </div>

                <div className="mt-[20px] overflow-y-scroll thin-scroll h-[400px]">
                    <span className="text-[#646868]">
                        Requesting proof of address is done for identity verification,
                        authenticity, legal compliance, and security purposes to ensure
                        accurate and secure interactions on the platform.
                    </span>

                    <div className="flex flex-col w-[400px] mt-[20px]">
                        <span className="mb-[10px]">Goverment ID Country:</span>

                        <ReactFlagsSelect
                            searchable
                            placeholder="Select country"
                            selected={selectedCountry?.value}
                            onSelect={(code) => handleSelect(code)}
                        />
                    </div>

                    <ImageUploading
                        multiple
                        value={tempImages.address}
                        onChange={onChange}
                        maxNumber={1}
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemoveAll,
                            isDragging,
                            dragProps
                        }) => (
                            <>
                                <div className={`flex flex-col items-center w-[400px] py-[25px] px-[30px] mt-[40px] z-50
                            ${!isDragging ? 'upload-verification' : 'border border-[#FB5870] rounded-[25px]'}`}>
                                    <LuUpload className='text-3xl' />

                                    <h3 className="font-[600] text-2xl mt-[20px]">Upload your document</h3>

                                    <p className="text-[#646868] text-center max-w-[27ch] mt-[15px]">
                                        PNG, PDF, or JPEG format.
                                        Maximum file size is 50mb.
                                    </p>

                                    <button className="font-[500] ring-1 ring-black px-[30px] py-[10px] mt-[25px]
                                rounded-xl hover:bg-gray-50 active:bg-gray-100 duration-300 transition-colors"
                                        onClick={!imageList[0] ? onImageUpload : () => onImageUpdate(0)} {...dragProps}>
                                        Choose or drop a file
                                    </button>

                                    {imageList[0] && <span className="mt-4 text-sm text-[#646868]">
                                        {imageList[0].file?.name}
                                    </span>}
                                </div>

                                <div className="flex flex-row items-center gap-x-[40px] mt-[40px]">
                                    <button type='submit' className={`font-[500] border border-[#FB5870] transition-colors 
                                    duration-300 px-[30px] py-[10px] rounded-xl 
                                    ${compareObjects(tempImages.address[0], verifiedImages.address[0]) ?
                                            'bg-none text-[#dd6073] cursor-not-allowed opacity-90' :
                                            'bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white'}`}
                                        onClick={handleSubmit}>
                                        Save Changes
                                    </button>

                                    {tempImages.address[0] &&
                                        <button className="text-[#D14157] underline" onClick={onImageRemoveAll}>
                                            Cancel
                                        </button>}
                                </div>
                            </>
                        )}
                    </ImageUploading>
                </div>
            </div>
        </div>
    )
}

export default AddressInfo