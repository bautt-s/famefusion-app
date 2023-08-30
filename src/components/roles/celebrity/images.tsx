import { IoAdd, IoImagesOutline } from "react-icons/io5"

const CelImages: React.FC<any> = (props) => {
    const { data, setData, skip } = props

    const renderArray = new Array(4).fill('fill')

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
                <div className="upload-verification w-[350px] h-auto aspect-[5/4] bg-[#F7F8FC] flex flex-col items-center justify-center">
                    <IoImagesOutline className='text-5xl text-[#B1B4B4]' />

                    <div className="flex flex-col my-[25px] gap-y-[5px]">
                        <span className="text-[#646868]">Drag or Drop your files here</span>
                        <span className="text-[#646868] text-center">or:</span>
                    </div>

                    <button className="font-[500] ring-1 ring-black px-[30px] py-[10px] w-fit
                    rounded-xl hover:bg-gray-50 active:bg-gray-100 duration-300 transition-colors">
                        Choose a file
                    </button>
                </div>

                {renderArray.map((item, index) =>
                    <div key={index} className="upload-verification aspect-[9/16] h-[280px] 
                    bg-[#F7F8FC] flex flex-col items-center justify-center group cursor-pointer">
                        <IoAdd className='text-[#979B9B] text-3xl group-hover:rotate-180 transition-all duration-500' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CelImages