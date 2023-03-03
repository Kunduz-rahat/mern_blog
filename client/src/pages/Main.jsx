import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../store/features/post/postSlice';
import { PostItem } from '../components/PostItem';
import { PopularPosts } from '../components/PopularPosts';
import travel from '../assets/travel.png';

export const Main = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  console.log(popularPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return (
      <div className="text-xl text-center text-black py-10 max-w-screen-xl ">
        Постов не существует.
      </div>
    );
  }

  return (
    <div className=" mx-auto p-4">
      <div className=" w-full md:grid md:grid-cols-2 ">
        <div>
          <h2 className="bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#05CCCB]  text-transparent text-2xl md:text-5xl font-gloock font-semibold">
            Добро пожаловать на наш блог пост про путешествие
          </h2>
          <p className="md:text-3xl text-xl font-gloock mt-4">
            Вы можете добавить интересную статью про свое путешествие и описать
            ее
          </p>
        </div>
        <div className="md:flex justify-between">
          <div>
            <img alt="travel" src={travel} className="h-[350px]" />
          </div>
          <div className="items-start">
            <div className="text-xs uppercase text-black font-gloock tracking-wide font-semibold  mt-4 ">
              Популярное:
            </div>

            {popularPosts?.map((post, idx) => (
              <PopularPosts key={idx} post={post} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:flex justify-between gap-8">
        <div className="md:flex md:flex-col gap-10 ">
          <div className="w-full md:grid md:grid-cols-2 gap-3">
            {posts?.map((post, idx) => (
              <PostItem key={idx} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
