import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/features/post/postSlice';

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('text', text);
      data.append('image', image);
      dispatch(createPost(data));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const clearFormHandler = () => {
    setText('');
    setTitle('');
  };

  return (
    <form
      className="md:w-1/3 w-2/3 mx-auto py-10 max-w-screen-xl"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="text-gray-300 py-2 bg-gradient-to-r from-[#5271FF] to-[#05CCCB] text-[16px] font-medium mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Прикрепить изорбажение:
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <div className="flex object-cover py-2">
        {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
      </div>
      <label className="text-[16px] text-white opacity-100">
        Заголовок поста:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
          className="mt-1 text-white w-full rounded-lg bg-gradient-to-r from-[#5271FF] to-[#05CCCB]  border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-white opacity-70 font-medium ">
        Текст поста:
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Текст поста"
          className="mt-1 text-white w-full placeholder:white placeholder:font-roboto placeholder:font-medium rounded-lg bg-gradient-to-r from-[#5271FF] to-[#05CCCB]  border py-1 px-2 text-xs outline-none resize-none h-40 placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 items-center justify-center mt-4">
        <button
          onClick={submitHandler}
          className="flex justify-center items-center bg-gradient-to-r from-[#5271FF] to-[#05CCCB]  text-xs text-white rounded-sm py-2 px-4"
        >
          Добавить
        </button>
        <button
          onClick={clearFormHandler}
          className="flex justify-center items-center bg-[#fb1909] text-xs text-white rounded-sm py-2 px-4"
        >
          Отменить
        </button>
      </div>
    </form>
  );
};
