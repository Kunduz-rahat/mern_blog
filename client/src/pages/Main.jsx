import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../store/features/post/postSlice'
import { PostItem } from '../components/PostItem'
import { PopularPosts } from '../components/PopularPosts'


export const Main = () => {
	const dispatch = useDispatch()
	const { posts, popularPosts } = useSelector((state) => state.post)

	console.log(popularPosts)

	useEffect(() => {
			dispatch(getAllPosts())
	}, [dispatch])

	if (!posts.length) {
			return (
					<div className='text-xl text-center text-white py-10 max-w-screen-xl '>
							Постов не существует.
					</div>
			)
	}

	return (
			<div className=' mx-auto py-10'>
					<div className='md:flex justify-between gap-8'>
							<div className='md:flex md:flex-col gap-10 basis-4/5'>
									{posts?.map((post, idx) => (
											<PostItem key={idx} post={post} />
									))}
							</div>
							<div className='basis-1/5'>
									<div className='text-xs uppercase text-white mt-4'>
											Популярное:
									</div>

									{popularPosts?.map((post, idx) => (
											<PopularPosts key={idx} post={post} />
									))}
							</div>
					</div>
			</div>
	)
}