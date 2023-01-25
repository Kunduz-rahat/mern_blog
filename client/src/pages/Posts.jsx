import React, { useCallback } from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import { PostItem } from '../components/PostItem'
import axios from '../utils/axios'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    const fetchMyPosts = useCallback( async() => {
        try {
            const { data } =  await axios.get('/posts/user/me')
            setPosts(data)
            console.log('render')
        } catch (error) {
            console.log(error)
        }
    },[setPosts]
    )   

    useEffect(() => {
        fetchMyPosts()
    }, [fetchMyPosts])

    return (
        <div className='w-1/2 mx-auto py-10 flex flex-col gap-10'>
            {posts?.map((post, idx) => (
                <PostItem post={post} key={idx} />
            ))}
        </div>
    )
}