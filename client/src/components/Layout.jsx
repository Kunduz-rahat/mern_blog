import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({children}) => {
	return (
		<React.Fragment >

	<div className='max-w-screen-xl mx-auto '>
			<Navbar/>
			{children}

			</div>

	
		
		
		</React.Fragment>
	)
}
