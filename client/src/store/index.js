import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import postSlice from './features/post/postSlice'
import commentSlice from './features/comment/commentSlice'

export const store = configureStore({
	reducer:{
		auth:authSlice,
		post: postSlice,
		comment: commentSlice,
	},
	// middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(authSlice.middleware)
	// .concat(postSlice.middleware)
	// .concat(commentSlice.middleware),
	// devTools:false

})