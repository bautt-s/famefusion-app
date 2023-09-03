import { IoAdd, IoImagesOutline } from "react-icons/io5"
import { RiImageEditFill, RiDeleteBin5Fill } from 'react-icons/ri'
import ImageUploading, { ImageListType } from "react-images-uploading";

const CelImages: React.FC<any> = (props) => {
    const { data, setData, skip } = props
    //const [images, setImages] = useState([]);

    const renderArray = new Array(4).fill('fill')

    const onChange = (imageList: ImageListType) => {
        setData({ ...data, images: imageList as never[] });
    }

    return (
        <div>
            <div className="flex flex-row items-center">
                <h1 className="outfit font-[700] text-4xl mb-[5px]">
                    Add your social channels
                </h1>

                <button className="ml-auto underline" onClick={skip}>Skip</button>
            </div>

            <span className="text-[#646868]">
                These images will be featured on your profile and serve as a means
                for fans and businesses to identify you while showcasing your brand and personality.
            </span>

            <div className="flex flex-row mt-[40px] gap-x-[25px]">
                <div className="upload-verification w-[350px] h-auto aspect-[5/4] bg-[#F7F8FC]">
                    <ImageUploading
                        multiple
                        value={data.images}
                        onChange={onChange}
                        maxNumber={5}
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps
                        }) => (
                            !imageList[0] ?
                                <div className="flex flex-col items-center justify-center pt-10">
                                    <IoImagesOutline className='text-5xl text-[#B1B4B4]' />

                                    <div className="flex flex-col my-[25px] gap-y-[5px]">
                                        <span className="text-[#646868]">Drag or Drop your files here</span>
                                        <span className="text-[#646868] text-center">or:</span>
                                    </div>

                                    <button className={`font-[500] ring-1 px-[30px] py-[10px] w-fit
                                    rounded-xl hover:bg-gray-50 active:bg-gray-100
                                    ${isDragging ? 'ring-[#FB5870] text-[#FB5870]' : 'ring-black'}`}
                                        onClick={!imageList[0] ? onImageUpload : () => null}
                                        {...dragProps}>
                                        Choose a file
                                    </button>
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

                                        <button onClick={() => onImageRemove(0)}>
                                            <RiDeleteBin5Fill
                                                className='hover:text-black transition-all duration-300' />
                                        </button>
                                    </div>
                                </div>
                        )}
                    </ImageUploading>
                </div>

                {renderArray.map((item, index) =>
                    <ImageUploading
                        key={index}
                        multiple
                        value={data.images}
                        onChange={onChange}
                        maxNumber={5}
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps
                        }) => (
                            <button className={`aspect-[9/16] h-[280px] upload__image-wrapper 
                            bg-[#F7F8FC] flex flex-col items-center justify-center group cursor-pointer
                            ${isDragging ? 'border border-[#FB5870] rounded-[25px]' : 'upload-verification'}`}
                                onClick={!imageList[index + 1] ? onImageUpload : () => null}
                                {...dragProps}>
                                {imageList[index + 1] ?

                                    <div className="h-full w-full rounded-[25px] relative">
                                        <img src={imageList[index + 1].dataURL} alt='celebrity image'
                                            className="h-full w-full object-cover rounded-[25px]" />

                                        <div className="absolute bottom-0 left-[50%] text-2xl text-[#1f1f1f] rounded-xl
                                        flex flex-row gap-x-[7px] mb-2 translate-x-[-50%] bg-[#FB5870] py-2 px-4">
                                            <button onClick={() => onImageUpdate(index + 1)}>
                                                <RiImageEditFill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>

                                            <button onClick={() => onImageRemove(index + 1)}>
                                                <RiDeleteBin5Fill
                                                    className='hover:text-black transition-all duration-300' />
                                            </button>
                                        </div>
                                    </div> :

                                    <IoAdd className='text-[#979B9B] text-3xl 
                                    group-hover:rotate-180 transition-all duration-500' />}
                            </button>
                        )}
                    </ImageUploading>
                )}
            </div>
        </div>
    )
}

export default CelImages