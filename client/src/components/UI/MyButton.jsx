import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyButton({children, ...props}) {
	return (
		<NavLink className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2' {...props}> 
			{children}
		</NavLink>
	)
}