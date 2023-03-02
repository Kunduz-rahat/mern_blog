import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../store/features/auth/authSlice'
import { toast } from 'react-toastify'
import MyButton from './UI/MyButton'
import logo from '../assets/logo.png'
export const Navbar = () => {
	const isAuth = useSelector(checkIsAuth)
	const dispatch = useDispatch()

	const activeStyles = {
			color: '#5271FF',
	}

	const logoutHandler = () => {
			dispatch(logout())
			window.localStorage.removeItem('token')
			toast('Вы вышли из системы')
	}

	return (
			<div className='md:flex py-4 md:justify-between items-center max-w-screen-xl'>
<img src={logo} alt='logo' className='w-[100px] '/>
<div className='flex mr-3'>
{isAuth && (
							<ul className='flex gap-8'>
									<li>
											<NavLink
													to={'/'}
													href='/'
													className='text-[18px] text-[#05CCCB] hover:text-[#5271FF] duration-500'
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
													className='text-[18px] text-[#05CCCB] hover:text-[#5271FF] duration-500'
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
													className='text-[18px]  text-[#05CCCB] hover:text-[#5271FF] duration-500'
													style={({ isActive }) =>
															isActive ? activeStyles : undefined
													}
											>
													Добавить пост
											</NavLink>
									</li>
								
							</ul>
					)}
					<div className='ml-4'>
									{isAuth ? (
									<MyButton onClick={logoutHandler}>Выйти</MyButton>
							) : (
									<MyButton to={'/login'}> Войти </MyButton>
							)}
									</div>

</div>

					
			</div>
	)
}