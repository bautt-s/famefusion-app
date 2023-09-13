import { mutateLike } from "@/store/slices/likesSlice"
import { RootState } from "@/store/store"
import { gql, useMutation } from "@apollo/client"
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BsStarFill } from "react-icons/bs"
import { GoHeartFill } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux"

const ADD_LIKE = gql`
    mutation addToWishlist($ids: WishlistInput) {
        addToWishlist(ids: $ids) {
            id
        }
    }`

const REMOVE_LIKE = gql`
    mutation removeFromWishlist($ids: WishlistInput) {
        removeFromWishlist(ids: $ids) {
            id
        }
    }`

const FeaturedCard: React.FC<any> = (props) => {
    const { c } = props
    const dispatch = useDispatch()
    const { isAuthenticated } = useKindeAuth();

    const fanID = useSelector((state: RootState) => state.fan.id)
    const likedIDs = useSelector((state: RootState) => state.likes.likedIDs)
    const loadedLikes = useSelector((state: RootState) => state.likes.loadedLikes)

    const [addLike] = useMutation(ADD_LIKE);
    const [removeLike] = useMutation(REMOVE_LIKE);

    const [isLiked, setLiked] = useState(false)
    const [likeLoaded, setLikeLoaded] = useState(false)

    const handleLike = () => {
        setLiked(!isLiked)

        if (!isLiked) addLike({
            variables: {
                ids: {
                    id: fanID,
                    celId: c?.id
                }
            }
        })
        else removeLike({
            variables: {
                ids: {
                    id: fanID,
                    celId: c?.id
                }
            }
        })

        dispatch(mutateLike(c))
    }

    useEffect(() => {
        if (likedIDs.filter(id => id === c.id).length > 0) setLiked(true)
        else setLiked(false)

        if (loadedLikes) setLikeLoaded(true)
    }, [likedIDs])
    
    if (!likeLoaded) return (
        <div className='w-full'>
            <div className='w-full h-[200px] bg-gray-500 animate-pulse rounded-2xl'></div>
            <div className='w-[150px] h-[15px] bg-gray-500 animate-pulse mt-[15px] rounded-full'></div>
            <div className='w-full h-[10px] bg-gray-500 animate-pulse mt-[15px] rounded-full'></div>
            <div className='w-full h-[10px] bg-gray-500 animate-pulse mt-[5px] rounded-full'></div>
            <div className='w-full h-[10px] bg-gray-500 animate-pulse mt-[5px] rounded-full'></div>
        </div>
    )

    return (
        <div className='akatab relative w-full group'>
            {isAuthenticated &&
            <div className="absolute top-0 right-0  mt-[10px] mr-[10px]" onClick={handleLike}>
                <GoHeartFill className={`text-xl ${isLiked ? 'text-[#FB5870]' : 'text-[#B1B4B4]'} mr-[2px]
                hover:text-[#FB5870] transition-colors duration-300 z-50 cursor-pointer absolute top-0 right-0 mt-[2px]`} />

                <GoHeartFill className='text-[24px] text-white absolute top-0 right-0 scale-y-[1.05] z-[49]' />
            </div>}
            

            <Link href={`/browse/${c?.id}`}>
                <img src={c?.associatedUser?.profilePic} className='w-full object-cover rounded-2xl 
                featured-img group-hover:scale-105 transition-all duration-300 select-none' alt={c?.name} />

                <div className='flex flex-col sm:flex-row sm:items-end 2xl:items-center mt-[15px]'>
                    <h4 className='text-2xl font-[600] max-w-[3ch] sm:max-w-none lg:max-w-[7ch] 2xl:max-w-none'>{c?.name}</h4>

                    <div className='flex flex-row items-center sm:ml-auto'>
                        <BsStarFill className='text-sm' />
                        <span className='ml-[10px] mt-[2px]'>{c?.rating}</span>
                    </div>
                </div>

                <p className='text-lg leading-[25px] my-[15px] text-[#646868] min-h-[50px]'>
                    {c?.description?.length > 44 ? c?.description?.slice(0, 44) + '...' : c?.description}
                </p>

                <span className='font-[600] text-lg '>
                    {c?.workList[0]?.price ? `From €${c?.workList[0]?.price}` : 'Learn more'}
                </span>
            </Link>
        </div>
    )
}

export default FeaturedCard