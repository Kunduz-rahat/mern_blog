import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../store/features/auth/authSlice'
import { toast } from 'react-toastify'
import MyButton from './UI/MyButton'

export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth)
	const dispatch = useDispatch()

	const activeStyles = {
			color: 'red',
	}

	const logoutHandler = () => {
			dispatch(logout())
			window.localStorage.removeItem('token')
			toast('Вы вышли из системы')
	}

	return (
			<div className='flex py-4 justify-between items-center max-w-screen-xl'>
					<span className='flex justify-center items-center  text-2xl text-white rounded-sm p-2 font-semibold'>
					
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
</svg>
		BLOG
					</span>

					{isAuth && (
							<ul className='flex gap-8'>
									<li>
											<NavLink
													to={'/'}
													href='/'
													className='text-xl text-white hover:text-[#fb1909] duration-500'
													style={({ isActive }) =>
															isActive ? activeStyles : undefined
													}
											>
													Главная
											</NavLink>
									</li>
									<li>
											<NavLink
													to={'/posts'}
													href='/'
													className='text-xl text-white hover:text-[#fb1909] duration-500'
													style={({ isActive }) =>
															isActive ? activeStyles : undefined
													}
											>
													Мои посты
											</NavLink>
									</li>
									<li>
											<NavLink
													to={'/new'}
													href='/'
													className='text-xl  text-white hover:text-[#fb1909] duration-500'
													style={({ isActive }) =>
															isActive ? activeStyles : undefined
													}
											>
													Добавить пост
											</NavLink>
									</li>
							</ul>
					)}

					<div >
							{isAuth ? (
									<MyButton onClick={logoutHandler}>Выйти</MyButton>
							) : (
									<MyButton to={'/login'}> Войти </MyButton>
							)}
					</div>
			</div>
	)
}