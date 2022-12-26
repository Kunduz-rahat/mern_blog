import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
	return (
		<form onSubmit={e=>e.preventDefault()} className="w-1/4 h-60 mx-auto mt-40">
		<h1 className=' text-lg text-white text-center '>Авторизация</h1>
		<label className=' text-xs text-gray-400'>
	
		<input type='text'
		placeholder='Имя пользователя'
		className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-600'
		/>

		</label>
		<label className=' text-xs text-gray-400 ' >
	
	<input type='password'
	placeholder='Пароль пользователя'
	className='mt-4 text-black w-full rounded-lg  bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-600'
	/>

	</label>
<div className='flex gap-8 justify-center items-center mt-4'>
<button className='flex justify-center items-center text-xs bg-gray-600  text-white rounded-sm py-2 px-4'>Подтвердить</button>
<Link to='/login' className='flex justify-center items-center text-xs text-white'>Уже зарегистрированы </Link>
</div>

		</form>
	)
}
