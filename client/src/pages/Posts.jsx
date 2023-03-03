import React, { useCallback, useEffect, useState } from 'react';
import axios from '../utils/axios';
import { PostItem } from '../components/PostItem';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchMyPosts = useCallback(async () => {
    try {
      const { data } = await axios.get('/posts/user/me');
      setPosts(data);
      console.log('render');
    } catch (error) {
      console.log(error);
    }
  }, [setPosts]);

  useEffect(() => {
    fetchMyPosts();
  }, [fetchMyPosts]);

  return (
    <div className="w-1/2 mx-auto py-10 flex flex-col gap-10 max-w-screen-xl">
      {posts?.map((post, idx) => (
        <PostItem post={post} key={idx} />
      ))}
    </div>
  );
};
