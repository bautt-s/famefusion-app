import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { TfiClose } from "react-icons/tfi"
import { starReview } from "@/utils/functions"

const ReviewsModal: React.FC<{ reviews: any, rating: number, setOpen: Function }> = (props) => {
    const { reviews, rating, setOpen } = props

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setOpen(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center mb-[10px]">
                    <div className="flex flex-row items-center">
                        <span className='outfit text-4xl font-[700]'>Reviews</span>

                        <div className="flex flex-row items-center ml-[25px] gap-[10px]">
                            <BsStarFill className='text-lg' />
                            <span className="text-2xl">{rating}</span>
                        </div>
                    </div>

                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setOpen(false)} />
                </div>

                <span className="text-[#646868]">{reviews.length} reviews</span>

                <div className='max-h-[350px] 2xl:max-h-[600px] overflow-y-scroll thin-scroll 
                mt-[35px] pr-[25px] flex flex-col gap-y-[25px]'>
                    {reviews?.map((r: any, index: number) =>
                        <div key={index} className={`flex flex-col rounded-[25px] p-[32px] ${index % 2 === 0 ? 'bg-[#F7F8FC]' : 'bg-[#EEF3FE]'}`}>
                            <h5 className="text-xl font-[600]">{r.title}</h5>
                            <span className="text-[#646868]">{r.date}</span>

                            <p className="my-[25px] max-w-[80ch] text-justify">{r.description}</p>

                            {(r.images?.length !== 0) &&
                                <div className='flex flex-row gap-[25px]'>
                                    {r.images?.map((i: any, index: number) =>
                                        <img key={index} src={i}
                                            className='h-[160px] w-[120px] object-cover rounded-[25px]' />
                                    )}
                                </div>
                            }

                            <div className="flex flex-row items-center mt-[20px]">
                                <div className='flex flex-row text-[#FB5870] gap-x-[7px]'>
                                    {starReview(r.stars).map((star, index) =>
                                        <div key={index}>
                                            {star === 'star' && <BsStarFill />}
                                            {star === 'half' && <BsStarHalf />}
                                            {star === 'empty' && <BsStar />}
                                        </div>
                                    )}
                                </div>

                                <span className="font-[600] ml-[15px]">{r.author}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReviewsModal