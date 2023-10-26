import FooterSection from "@/components/landing/footer"
import NavSection from "@/components/landing/nav"
import Spinner from "@/components/spinner"
import { dateToWeekday, formatPrice } from "@/utils/functions"
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client"
import Head from "next/head"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { HiOutlineCalendarDays, HiOutlineMapPin } from "react-icons/hi2"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

interface details {
    id: string,
    workId: string,
    title: string,
    date: string,
    cel: string,
    email: string,
    price: number,
    location: string
}

const CHECKOUT_DATA = gql`
query retrieveCheckout($sessionId: String) {
    retrieveCheckout(sessionId: $sessionId)
}`

const HAS_EXPERIENCE = gql`
query hasExperience($ids: ExperiencesInput) {
    hasExperience(ids: $ids)
}`

const BOOK_EXPERIENCE = gql`
mutation createReservation($reservation: ReservationInput) {
    createReservation(reservation: $reservation) {
        id
    }
}`

const CheckoutSuccess: React.FC = () => {
    const params = useSearchParams()
    const sessionId = params.get('session_id')
    const fanId = useSelector((state: RootState) => state.fan.id)

    const [details, setDetails] = useState<details>({
        id: '',
        workId: '',
        title: '',
        date: '',
        cel: '',
        email: '',
        price: 0,
        location: ''
    })

    const { data, loading } = useQuery(CHECKOUT_DATA, {
        variables: { sessionId }
    })

    const [hasExperience, { data: dataHasExperience }] = useLazyQuery(HAS_EXPERIENCE, {
        variables: {
            ids: {
                id: details.id,
                workId: details.workId
            }
        }
    })

    const [bookExperience] = useMutation(BOOK_EXPERIENCE)

    useEffect(() => {
        if (data) setDetails(JSON.parse(data.retrieveCheckout))
    }, [loading])

    useEffect(() => {
        if (fanId && details.id.length > 0) {
            hasExperience()
            console.log(fanId)
            if (!dataHasExperience) bookExperience({
                variables: {
                    reservation: {
                        id: details.id,
                        workId: details.workId,
                        date: new Date(details.date),
                        fanId
                    }
                }
            })
        }
    }, [details, fanId])

    if (loading) return (
        <div className="flex w-full h-screen justify-center items-center">
            <Head>
                <title>FameFusion | Loading...</title>
            </Head>

            <Spinner />
        </div>
    )

    return (
        <section className="flex flex-col">
            <Head>
                <title>FameFusion | Checkout successful</title>
            </Head>

            <NavSection />

            <div className="pb-[100px] pt-[120px] px-[40px] lg:px-[60px] xl:px-[120px] 2xl:px-[200px] 
            akatab flex flex-col h-full akatab">
                <div className="flex font-[500] mb-[35px]" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link href="/browse" className="ml-1 inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 transition-all">Browse Celebrity</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link href={`/browse/${details.id}`}
                                    className="ml-1 md:ml-2 inline-flex items-center text-gray-400 hover:text-[#FB5870] duration-200 
                                transition-all">{details.cel}</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link href={`/browse/${details.workId}`}
                                    className="ml-1 md:ml-2 text-gray-400 cursor-pointer">{details.title}</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-600 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ml-1 md:ml-2 text-gray-400 cursor-pointer">Confirmation</span>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="flex flex-col gap-y-[40px]">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col">
                            <h1 className="text-4xl outfit font-[700]">Payment successful!</h1>

                            <h2 className="text-2xl outfit font-[600] mt-[40px]">{`${details.title} with ${details.cel}`}</h2>

                            <ul className="flex flex-col gap-y-[15px] mt-[15px]">
                                <li className="flex flex-row items-center gap-x-[5px]">
                                    <HiOutlineMapPin className='text-3xl' />
                                    <span className="text-[#646868]">{details.location}</span>
                                </li>
                                <li className="flex flex-row items-center gap-x-[5px]">
                                    <HiOutlineCalendarDays className='text-3xl' />
                                    <span className="text-[#646868]">{dateToWeekday(details.date)}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col ml-auto text-[#1f1f1f] p-[20px] w-[30ch] ring-1 ring-gray-300 rounded-[25px]">
                            <h5 className="text-xl font-[600]">Price details</h5>

                            <ul className="my-5">
                                <li className="flex flex-row">
                                    <span>Experience</span>
                                    <span className="ml-auto">€{formatPrice(details.price * 1)}</span>
                                </li>

                                <li className="flex flex-row">
                                    <span>Fee</span>
                                    <span className="ml-auto">€{formatPrice(details.price * 0.13)}</span>
                                </li>
                            </ul>

                            <div className="flex flex-row font-[600]">
                                <span>Total</span>
                                <span className="ml-auto">€{formatPrice(details.price * 1.13)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-[10px] mt-3">
                        <h3 className="text-xl outfit font-[700]">Know before you go</h3>
                        <p className="text-[#1f1f1f] max-w-[60ch]">
                            Please, bring a valid ID, payment methods (credit cards or cash),
                            and any necessary documents related to the experience.
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-[10px]">
                        <h3 className="text-xl outfit font-[700]">Cancellation policy</h3>
                        <p className="text-[#1f1f1f] max-w-[60ch]">
                            Cancel up to 7 days before the Experience start time for a full refund,
                            or within 24 hours of booking as long as the booking is made more than 48
                            hours before the start time.
                        </p>
                    </div>

                    <Link href='/fan/c2cf5ce2-d264-4e38-ad41-3c8fcd9b4fc3?section=2'
                        className='bg-[#FB5870] text-white font-[500] py-[12px] rounded-xl w-fit mt-4
                    hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 px-[80px]'>
                        Check out Experiences
                    </Link>
                </div>
            </div>

            <div className="mt-auto">
                <FooterSection />
            </div>
        </section>
    )
}

export default CheckoutSuccess