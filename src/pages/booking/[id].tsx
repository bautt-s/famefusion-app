import FooterSection from "@/components/landing/footer"
import Spinner from "@/components/spinner"
import { gql, useQuery } from "@apollo/client"
import Head from "next/head"
import { useRouter } from "next/router"
import BookingHeader from '@/components/booking/header'
import { BsCheckLg } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import BookingCollabs from "@/components/booking/more-collabs"
import NavSection from "@/components/landing/nav"

export interface workInterface {
    getWorkById: {
        title: string
        type: string
        price: number
        description: string
        duration: string
        online: boolean
        collaboration: boolean
        createdAt: Date
        celebrity: {
            id: string
            name: string
            location: string
            rating: number
            languages: string[]

            workList: {
                id: string
                title: string
                price: number
                description: string
                duration: string
                online: boolean
                collaboration: boolean
            }
        }
    }
}

const ExperienceDetail: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    const EXPERIENCE = gql`
    query getWorkById($id: String) {
        getWorkById(id: $id) {
            title,
            type,
            price,
            description,
            duration,
            online,
            collaboration,
            createdAt,

            celebrity {
                id
                name
                rating
                location
                languages

                workList {
                    id
                    title
                    price
                    description
                    duration
                    online
                    collaboration
                }
            }
        }
    }`

    const { loading, error, data } = useQuery<workInterface>(EXPERIENCE, { variables: { id } });

    if (loading) return (
        <div className="flex w-full h-screen justify-center items-center">
            <Head>
                <title>FameFusion | Loading...</title>
            </Head>

            <Spinner />
        </div>
    )

    return (
        <div>
            <Head>
                <title>FameFusion | {data?.getWorkById?.title}</title>
            </Head>

            <NavSection />

            <div className="px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] pb-[120px]">
                <BookingHeader data={data} />

                <div className="flex flex-col gap-y-[45px] mt-[45px]">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-[600]">About</h3>
                        <p className="mt-[10px]">
                            Embark on an exclusive shopping experience with Hailey Bieber.
                            Explore high-end boutiques, discover the latest fashion trends,
                            and receive personalized style advice from Hailey herself.
                            Immerse yourself in the world of fashion and gain
                            valuable insights from one of the industry's icons.
                            It's an unforgettable opportunity to elevate your style and
                            experience the thrill of luxury shopping.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-[600]">Includes</h3>
                        <ul className="flex flex-col items-start gap-y-[5px] mt-[10px]">
                            <li className="flex flex-row items-start gap-[20px]">
                                <BsCheckLg className='text-[#006015] text-2xl' />
                                <span>
                                    The opportunity to choose up to 5 of clothing items from the high-end boutiques.
                                </span>
                            </li>

                            <li className="flex flex-row items-start gap-[20px]">
                                <BsCheckLg className='text-[#006015] text-4xl' />
                                <span>
                                    Throughout the experience, Hailey will share her fashion insights and knowledge, 
                                    providing valuable tips on how to mix and match different pieces, incorporate 
                                    current trends, and create versatile outfits for various occasions.
                                </span>
                            </li>

                            <li className="flex flex-row items-start gap-[20px]">
                                <BsCheckLg className='text-[#006015] text-2xl' />
                                <span>
                                    Hailey will offer personalized style advice based on her expertise and 
                                    understanding of current fashion trends.
                                </span>
                            </li>

                            <li className="flex flex-row items-start gap-[20px]">
                                <IoMdClose className='text-[#D20505] text-2xl' />
                                <span>
                                    The payment for shopping items is not included in the experience.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-[600]">Know before you go</h3>
                        <p className="mt-[10px]">
                            Please, bring a valid ID, payment methods (credit cards or cash),
                            and any necessary documents related to the experience.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-[600]">Cancellation policy</h3>
                        <p className="mt-[10px]">
                            Cancel up to 7 days before the Experience start time for a full 
                            refund, or within 24 hours of booking as long as the booking is 
                            made more than 48 hours before the start time.
                        </p>
                    </div>
                </div>

                <BookingCollabs name={data?.getWorkById?.celebrity?.name} 
                workList={data?.getWorkById?.celebrity?.workList} />
            </div>

            <FooterSection />
        </div>
    )
}

export default ExperienceDetail