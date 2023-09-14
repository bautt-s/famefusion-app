import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import Reviews404 from '@/svgs/Reviews404'
import { useState } from 'react'
import ReviewsModal from '../modals/reviews-modal'
import { starReview } from '@/utils/functions'

interface reviewInterface {
    title: string,
    date: string,
    author: string,
    description: string,
    images: string[],
    stars: number
}

const ReviewsPanel: React.FC<any> = (props) => {
    const { reviews, rating } = props
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col akatab gap-y-[25px]">
            {reviews.length ?
                reviews?.slice(-2).map((r: reviewInterface, index: number) =>
                    <div key={index} className={`flex flex-col rounded-[25px] p-[32px] ${index % 2 === 0 ? 'bg-[#F7F8FC]' : 'bg-[#EEF3FE]'}`}>
                        <h5 className="text-xl font-[600]">{r.title}</h5>
                        <span className="text-[#646868]">{r.date}</span>

                        <p className="my-[25px] w-0 min-w-full text-justify">{r.description}</p>

                        {(r.images?.length !== 0) &&
                            <div className='flex flex-row gap-[25px]'>
                                {r.images?.map((i, index) =>
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
                ) :
                <div className='w-full pt-[60px] pb-[120px] flex flex-col items-center gap-[15px]'>
                    <Reviews404 className='flex mx-auto' />
                    <span>Celebrity doesn&apos;t have any offline experiences yet</span>
                </div>
            }

            {reviews.length !== 0 &&
                <button onClick={() => setOpen(true)} 
                className="text-[#1f1f1f] underline underline-offset-4 mt-auto w-fit">
                    Show all {reviews?.length} reviews
                </button>
            }

            {open && <ReviewsModal setOpen={setOpen} rating={rating} reviews={reviews} />}
        </div>
    )
}

export default ReviewsPanel