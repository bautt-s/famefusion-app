import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

interface reviewInterface {
    title: string,
    date: string,
    author: string,
    description: string,
    images: string[],
    stars: number
}

const ReviewsPanel: React.FC<any> = (props) => {
    const { reviews } = props

    const starReview = (stars: number) => {
        const starArray = []
        const intPart = Math.trunc(stars)

        for (let i = 0; i < intPart; i++) starArray.push('star')
        if (stars % 1 !== 0) starArray.push('half')
        if (starArray.length !== 5) {
            for (let j = starArray.length; j < 5; j++) starArray.push('empty')
        }

        return starArray
    }

    return (
        <div className="flex flex-col w-full h-full mt-[45px] rounded-[25px] shadow-xl border py-[32px] px-[25px] akatab gap-y-[25px]">
            {reviews.length ?
            reviews?.slice(-2).map((r: reviewInterface, index: number) =>
                <div key={index} className={`flex flex-col rounded-[25px] p-[32px] ${index % 2 === 0 ? 'bg-[#F7F8FC]' : 'bg-[#EEF3FE]'}`}>
                    <h5 className="text-xl font-[600]">{r.title}</h5>
                    <span className="text-[#646868]">{r.date}</span>

                    <p className="my-[25px] max-w-[80ch] text-justify">{r.description}</p>

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
                <div className='w-full h-full text-center text-xl text-[#FB5870] flex justify-center items-center '>
                    <span className='mb-[60px]'>This celebrity has no reviews (yet)</span>
                </div>
            }

            {reviews.length !== 0 &&
                <button className="text-[#1f1f1f] underline underline-offset-4 mt-auto w-fit">
                    Show all {reviews?.length} reviews
                </button>
            }
        </div>
    )
}

export default ReviewsPanel