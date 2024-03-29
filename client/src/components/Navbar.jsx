import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { checkIsAuth, logout } from "../store/features/auth/authSlice";
import MyButton from "./UI/MyButton";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const activeStyles = {
    color: "#5271FF",
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы");
  };

  return (
    <div className="md:flex p-4 md:justify-between items-center max-w-screen-xl">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-[100px] " />
      </Link>

      <div className="flex mr-3">
        {isAuth && (
          <ul className="flex gap-8">
            <li>
              <NavLink
                to={"/"}
                href="/"
                className="text-[18px] text-[#05CCCB] hover:text-[#5271FF] duration-500 font-gloock"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/posts"}
                href="/"
                className="text-[18px] text-[#05CCCB] hover:text-[#5271FF] duration-500 font-gloock"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Мои посты
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/new"}
                href="/"
                className="text-[18px]  text-[#05CCCB] hover:text-[#5271FF] duration-500 font-gloock"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                Добавить пост
              </NavLink>
            </li>
          </ul>
        )}
        <div className="ml-8">
          {isAuth ? (
            <MyButton onClick={logoutHandler}>Выйти</MyButton>
          ) : (
            <MyButton to={"/login"}> Войти </MyButton>
          )}
        </div>
      </div>
    </div>
  );
};
