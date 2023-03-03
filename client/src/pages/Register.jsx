import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser, checkIsAuth } from '../store/features/auth/authSlice';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) navigate('/');
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setPassword('');
      setUsername('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="md:w-1/4 w-1/2 h-60 mx-auto md:mt-40"
    >
      <h1 className="text-lg text-black text-center">Регистрация</h1>
      <label className="text-xs text-black">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mt-1 text-black w-full rounded-lg bg-gradient-to-r from-[#5271FF] to-[#05CCCB]  border py-1 px-2 text-xs outline-none "
        />
      </label>

      <label className="text-xs text-black">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-1 text-black w-full rounded-lg bg-gradient-to-r from-[#5271FF] to-[#05CCCB] border py-1 px-2 text-xs outline-none "
        />
      </label>

      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex justify-center items-center text-xs bg-gradient-to-r from-[#5271FF] to-[#05CCCB] text-white rounded-sm py-2 px-4"
        >
          Подтвердить
        </button>
        <Link
          to="/login"
          className="flex justify-center items-center text-xs text-black"
        >
          Уже зарегистрированы ?
        </Link>
      </div>
    </form>
  );
};
