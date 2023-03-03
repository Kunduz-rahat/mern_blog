import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { checkIsAuth, loginUser } from '../store/features/auth/authSlice';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate('/');
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-1/4 h-60 mx-auto mt-10  w-1/2 "
      >
        <h1 className="text-lg text-black text-center font-medium">
          Авторизация
        </h1>
        <label className="text-xs text-black ">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mt-1 text-black w-full rounded-lg border py-1 px-2 text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] outline-none placeholder:text-gray-700"
          />
        </label>

        <label className="text-xs text-black">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-1 text-black w-full rounded-lg bg-gradient-to-r from-[#5271FF] to-[#05CCCB] border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          />
        </label>

        <div className="flex gap-8 justify-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex justify-center items-center text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] text-white rounded-sm py-2 px-4"
          >
            Войти
          </button>
          <Link
            to="/register"
            className="flex justify-center items-center text-xs text-black"
          >
            Нет аккаунта ?
          </Link>
        </div>
      </form>
    </div>
  );
};
