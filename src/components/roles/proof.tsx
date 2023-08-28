import { LuUpload } from "react-icons/lu"

const ProofButton: React.FC = () => {
    return (
        <div className="flex flex-col items-center upload-verification w-[400px] py-[25px] px-[30px] mt-[40px]">
            <LuUpload className='text-3xl' />

            <h3 className="font-[600] text-2xl mt-[20px]">Upload your document</h3>

            <p className="text-[#646868] text-center max-w-[20ch] mt-[15px]">
                PNG, PDF, or JPEG format.
                Maximum file size is 50mb.
            </p>

            <button className="font-[500] ring-1 ring-black px-[30px] py-[10px] mt-[25px]
                rounded-xl hover:bg-gray-50 active:bg-gray-100 duration-300 transition-colors">
                Choose a file
            </button>
        </div>
    )
}

export default ProofButton