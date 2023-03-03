import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../store/features/post/postSlice'
import { PostItem } from '../components/PostItem'
import { PopularPosts } from '../components/PopularPosts'
import travel from '../assets/travel.png'

export const Main = () => {
	const dispatch = useDispatch()
	const { posts, popularPosts } = useSelector((state) => state.post)

	console.log(popularPosts)

	useEffect(() => {
			dispatch(getAllPosts())
	}, [dispatch])

	if (!posts.length) {
			return (
					<div className='text-xl text-center text-black py-10 max-w-screen-xl '>
							Постов не существует.
					</div>
			)
	}

	return (
			<div className=' mx-auto py-10'>
			<div className='flex'>
				<div>
<h2>Добро пожаловать на наш блог пост про путешествие</h2>
<p>Вы можете добавить интересную статью про свое путешествие и описать ее</p>
				</div>
				<div>
<img alt='travel' src={travel}/>
				</div>
			</div>
					<div className='md:flex justify-between gap-8'>
							<div className='md:flex md:flex-col gap-10 basis-4/5'>
							<div className='grid grid-cols-2 gap-3'>
							{posts?.map((post, idx) => (
											<PostItem key={idx} post={post} />
									))}
							</div>
								
							</div>
							<div className='basis-1/5'>
									<div className='text-xs uppercase text-black font-gloock tracking-wide font-semibold  mt-4 '>
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