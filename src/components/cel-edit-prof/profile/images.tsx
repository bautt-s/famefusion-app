import { deleteFromIndex, extractDataUrls } from "@/utils/functions";
import { useEffect, useState } from "react";
import { IoAdd, IoImagesOutline } from "react-icons/io5"
import { RiDeleteBin5Fill, RiImageEditFill } from "react-icons/ri"
import ImageUploading, { ImageListType } from "react-images-uploading";

const CelImages: React.FC<any> = (props) => {
    const { data, updateCel, refetch, updateCelData } = props

    const renderArray = new Array(4).fill('fill')

    const [original, setOriginal] = useState<(string | undefined)[]>(data?.getCelebrityById.media)
    const [duplicate, setDuplicate] = useState<(string | undefined)[]>(data?.getCelebrityById.media)
    const [uploaded, setUploaded] = useState<ImageListType>([])

    const onChange = (imageList: ImageListType) => {
        setUploaded(imageList);
    }

    const handleEdit = (index: number, onImageUpdate: Function) => {
        onImageUpdate(index)
        if (uploaded[index]) setDuplicate(duplicate.slice(0, index).concat(undefined, duplicate.slice(index + 1)))
    }

    const handleDelete = (index: number, onImageRemove?: Function) => {
        const uploadedTemp = uploaded

        setDuplicate(duplicate.slice(0, index + 1).concat(undefined, duplicate.slice(index + 2)))

        if (onImageRemove && index !== -1) deleteFromIndex(uploaded, index + 1)
        else if (onImageRemove && index === -1) deleteFromIndex(uploaded, 0)

        setUploaded(uploadedTemp)
    }

    const handleCancel = () => {
        setDuplicate(data?.getCelebrityById.media)
        setUploaded([])
    }

    const handleSubmit = () => {
        const result = [];
        const filteredUploads = extractDataUrls(uploaded)
        const maxLength = Math.max(duplicate.length, filteredUploads.length);

        for (let i = 0; i < maxLength; i++) {
            if (i < duplicate.length && i < filteredUploads.length) {
                if (filteredUploads[i] !== undefined && filteredUploads[i] !== null) {
                    result.push(filteredUploads[i]);
                } else {
                    result.push(duplicate[i]);
                }
            } else if (i < duplicate.length) {
                result.push(duplicate[i]);
            } else if (i < filteredUploads.length) {
                result.push(filteredUploads[i]);
            }
        }

        updateCel({
            variables: {
                celebrity: {
                    id: data?.getCelebrityById?.id,
                    media: result.filter(r => r !== undefined && r !== null),
                    emailKey: data?.getCelebrityById?.email
                }
            }
        })
    }

    const checkModified = () => {
        const originalModified = original.every((m: any) => duplicate.includes(m))
        const uploadedMedia = !(Array.isArray(uploaded) && uploaded.some(u => u !== undefined))

        return originalModified && uploadedMedia
    }

    useEffect(() => {
        if (updateCelData?.updateCelebrity.media) {
            setDuplicate(updateCelData?.updateCelebrity.media)
            setOriginal(updateCelData?.updateCelebrity.media)
        }
    }, [updateCelData])
    
    return (
        <div className="flex flex-col py-[30px] px-[60px] shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl mt-[40px]" id='images'>
            <h1 className="text-2xl font-[600] mb-[25px]">Images</h1>

            <span>Add images and videos of you and your work.</span>

            <div className="flex flex-row mt-[40px] gap-y-[25px] gap-x-[25px] flex-wrap w-">
                <div className="upload-verification w-[350px] h-auto aspect-[5/4] bg-[#F7F8FC]">
                    <ImageUploading
                        multiple
                        maxFileSize={1000000}
                        value={uploaded}
                        onChange={onChange}
                        maxNumber={1}
                    >
                        {({
                            imageList,
                            onImageUpdate,
                            onImageRemove,
                        }) => (
                            (duplicate[0] || uploaded[0]) ?
                                (!uploaded[0] ?
                                    <div className="h-full w-full rounded-[25px] relative">
                                        <img src={duplicate[0] || ''} alt='celebrity image'
                                            className="h-full w-full object-cover rounded-[25px]" />

                                        <div className="absolute bottom-0 left-[50%] text-2xl text-[#1f1f1f] rounded-xl
                                    flex flex-row gap-x-[7px] mb-2 translate-x-[-50%] bg-[#FB5870] py-2 px-4">
                                            <button onClick={() => handleEdit(0, onImageUpdate)}>
                                                <RiImageEditFill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>

                                            <button onClick={() => handleDelete(-1)}>
                                                <RiDeleteBin5Fill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>
                                        </div>
                                    </div> :
                                    <div className="h-full w-full rounded-[25px] relative">
                                        <img src={imageList[0].dataURL} alt='celebrity image'
                                            className="h-full w-full object-cover rounded-[25px]" />

                                        <div className="absolute bottom-0 left-[50%] text-2xl text-[#1f1f1f] rounded-xl
                                        flex flex-row gap-x-[7px] mb-2 translate-x-[-50%] bg-[#FB5870] py-2 px-4">
                                            <button onClick={() => onImageUpdate(0)}>
                                                <RiImageEditFill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>

                                            <button onClick={() => handleDelete(-1, onImageRemove)}>
                                                <RiDeleteBin5Fill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>
                                        </div>
                                    </div>) :
                                <div className="flex flex-col items-center justify-center pt-10">
                                    <IoImagesOutline className='text-5xl text-[#B1B4B4]' />

                                    <div className="flex flex-col my-[25px] gap-y-[5px]">
                                        <span className="text-[#646868]">Upload an image below</span>
                                        <span className="text-[#646868] text-center">(max. size 10 MB)</span>
                                    </div>

                                    <button className='font-[500] ring-1 px-[30px] py-[10px] w-fit
                                    rounded-xl hover:bg-gray-50 active:bg-gray-100 ring-black'
                                        onClick={!imageList[0] ? () => handleEdit(0, onImageUpdate) : () => null}>
                                        Choose a file
                                    </button>
                                </div>
                        )}
                    </ImageUploading>
                </div>

                {renderArray.map((item, index) =>
                    <ImageUploading
                        key={index}
                        multiple
                        value={uploaded}
                        onChange={onChange}
                        maxNumber={5}
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove
                        }) => (
                            uploaded[index + 1] ?
                                <div className='aspect-[9/16] h-[280px] upload__image-wrapper cursor-pointer
                                bg-[#F7F8FC] flex flex-col items-center justify-center group upload-verification'
                                    onClick={!imageList[index + 1] ? onImageUpload : () => null}>

                                    <div className="h-full w-full rounded-[25px] relative">
                                        <img src={imageList[index + 1].dataURL} alt='celebrity image'
                                            className="h-full w-full object-cover rounded-[25px]" />

                                        <div className="absolute bottom-0 left-[50%] text-2xl text-[#1f1f1f] rounded-xl
                                        flex flex-row gap-x-[7px] mb-2 translate-x-[-50%] bg-[#FB5870] py-2 px-4">
                                            <button onClick={() => onImageUpdate(index + 1)}>
                                                <RiImageEditFill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>

                                            <button onClick={() => handleDelete(index, onImageRemove)}>
                                                <RiDeleteBin5Fill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>
                                        </div>
                                    </div>
                                </div> :
                                duplicate[index + 1] ? <div className="aspect-[9/16] h-[280px] upload__image-wrapper 
                                bg-[#F7F8FC] flex flex-col items-center justify-center group cursor-pointer rounded-[25px]">
                                    <div className="h-full w-full rounded-[25px] relative">
                                        <img src={duplicate[index + 1] || ''} alt='celebrity image'
                                            className="h-full w-full object-cover rounded-[25px]" />

                                        <div className="absolute bottom-0 left-[50%] text-2xl text-[#1f1f1f] rounded-xl
                                        flex flex-row gap-x-[7px] mb-2 translate-x-[-50%] bg-[#FB5870] py-2 px-4">
                                            <button onClick={() => handleEdit(index + 1, onImageUpdate)}>
                                                <RiImageEditFill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>

                                            <button onClick={() => handleDelete(index)}>
                                                <RiDeleteBin5Fill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>
                                        </div>
                                    </div>
                                </div> :
                                    <button className='aspect-[9/16] h-[280px] upload__image-wrapper upload-verification
                                    bg-[#F7F8FC] flex flex-col items-center justify-center group cursor-pointer'
                                        onClick={!imageList[index + 1] ?
                                            () => handleEdit(index + 1, onImageUpdate) : () => null}>
                                        <IoAdd className='text-[#979B9B] text-3xl 
                                        group-hover:rotate-180 transition-all duration-500' />
                                    </button>
                        )}
                    </ImageUploading>
                )}
            </div>

            <div className="flex flex-row items-center gap-x-[40px] mt-[40px]">
                <button type='submit' className={`font-[500] border border-[#FB5870] transition-colors 
                duration-300 px-[30px] py-[10px] rounded-xl ${checkModified()
                        ? 'bg-none text-[#dd6073] cursor-not-allowed opacity-90'
                        : 'bg-[#FB5870] hover:bg-[#eb5269] active:bg-[#e64c63] text-white'}`}
                    onClick={handleSubmit} disabled={checkModified()}>
                    Save Changes
                </button>


                {!checkModified() && <button className="text-[#D14157] underline" onClick={handleCancel}>
                    Cancel
                </button>}
            </div>
        </div>
    )
}

export default CelImages