import { LiaPortraitSolid } from "react-icons/lia"
import ImageUploading, { ImageListType } from "react-images-uploading";

const SelfieButton: React.FC<any> = (props) => {
    const { data, setData } = props

    const onChange = (imageList: ImageListType) => {
        setData({ ...data, selfie: imageList as never[] });
    }

    return (
        <ImageUploading
            multiple
            value={data.selfie}
            onChange={onChange}
            maxNumber={5}
        >
            {({
                imageList,
                onImageUpload,
                onImageUpdate,
                isDragging,
                dragProps
            }) => (
                <div className={`flex flex-col items-center w-[400px] py-[25px] px-[30px] mt-[40px]
                ${!isDragging ? 'upload-verification' : 'border border-[#FB5870] rounded-[25px]'}`}>
                    <LiaPortraitSolid className='text-4xl' />

                    <h3 className="font-[600] text-2xl mt-[20px] text-center">Take a selfie to verify identity</h3>

                    <p className="text-[#646868] text-center max-w-[20ch] mt-[15px]">
                        PNG, PDF, or JPEG format.
                        Maximum file size is 50mb.
                    </p>

                    <button className="font-[500] ring-1 ring-black px-[30px] py-[10px] mt-[25px]
                    rounded-xl hover:bg-gray-50 active:bg-gray-100 duration-300 transition-colors"
                    onClick={!imageList[0] ? onImageUpload : () => onImageUpdate(0)} {...dragProps}>
                        Take a photo
                    </button>

                    {imageList[0] && <span className="mt-4 text-sm text-[#646868]">{imageList[0].file?.name}</span>}
                </div>
            )}
        </ImageUploading>
    )
}

export default SelfieButton