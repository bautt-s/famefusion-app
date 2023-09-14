import Link from "next/link"
import { useEffect, useState } from "react"
import { LuClock } from "react-icons/lu"
import ModalDetail from "../booking/detail-modal"
import { gql, useMutation } from "@apollo/client"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { mutateExperience } from "@/store/slices/experiencesSlice"

const ADD_LIKE = gql`
    mutation addToExperiences($ids: ExperiencesInput) {
        addToExperiences(ids: $ids) {
            id
        }
    }`

const REMOVE_LIKE = gql`
    mutation removeFromExperiences($ids: ExperiencesInput) {
        removeFromExperiences(ids: $ids) {
            id
        }
    }`

const ExperienceCard: React.FC<any> = (props) => {
    const { exp } = props
    const { title, price, description, duration, id } = exp

    const dispatch = useDispatch()

    const fanID = useSelector((state: RootState) => state.fan.id)
    const likedIDs = useSelector((state: RootState) => state.experiences.likedIDs)
    const loadedLikes = useSelector((state: RootState) => state.experiences.loadedExperiences)

    const [open, setOpen] = useState(false)
    const [detailId, setDetailId] = useState('')
    const [isLiked, setLiked] = useState(false)

    const [addLike] = useMutation(ADD_LIKE)
    const [removeLike] = useMutation(REMOVE_LIKE)
    const [likeLoaded, setLikeLoaded] = useState(false)
    
    const handleLike = () => {
        setLiked(!isLiked)

        if (!isLiked) addLike({
            variables: {
                ids: {
                    id: fanID,
                    workId: id
                }
            }
        })
        else removeLike({
            variables: {
                ids: {
                    id: fanID,
                    workId: id
                }
            }
        })

        dispatch(mutateExperience(exp))
    }

    const handleDetail = (id: string) => {
        setDetailId(id)
        setOpen(true)
    }

    useEffect(() => {
        if (likedIDs.filter(likedId => likedId === id).length > 0) setLiked(true)
        else setLiked(false)

        if (loadedLikes) setLikeLoaded(true)
    }, [likedIDs])

    return (
        <div className='border-[#CBCDCD] border-[1px] rounded-[25px] px-[20px] py-[25px] w-full max-w-[350px]'>
            <div className='flex flex-row items-center'>
                <h5 className='font-[600]'>{title}</h5>
                <span className='font-[600] ml-auto'>€{price}</span>
            </div>

            <p className='mt-[15px] max-w-[22ch]'>{description}</p>

            <div className='flex flex-row items-center mt-[15px]'>
                <LuClock className='text-2xl' />
                <span className='ml-[10px]'>
                    <strong className='mr-[5px]'>Duration:</strong> {duration}
                </span>
            </div>

            <div className='flex flex-row items-center mt-[25px]'>
                <span onClick={() => handleDetail(id)}
                    className='cursor-pointer underline underline-offset-4'>
                    Details
                </span>

                <button className='bg-[#FB5870] text-white font-[500] py-[8px] px-[20px] 2xl:px-[35px] rounded-xl
                hover:bg-[#eb5269] active:bg-[#e64c63] transition-colors duration-300 ml-auto'>
                    <Link href={`/booking/${id}`}>Choose</Link>
                </button>
            </div>

            {open && <ModalDetail id={detailId} setOpen={setOpen} handleLike={handleLike} 
            isLiked={isLiked} likeLoaded={likeLoaded} />}
        </div>
    )
}

export default ExperienceCard