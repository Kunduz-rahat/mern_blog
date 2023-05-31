import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";
import { Spinner } from "./Spinner";

export const PostItem = ({ post }) => {
  if (!post) {
    return (
      <div className="text-xl text-black text-center py-10">
        <Spinner />
      </div>
    );
  }
  return (
    <Link to={`/${post._id}`}>
      <div className="flex flex-col basis-1/4 flex-grow">
        <p className="text-black text-xl font-gloock tracking-wider md:mb-2 mt-2 line-clamp-3">
          {post.title}
        </p>
        <div className={post.imgUrl ? "flex h-80" : "flex rounded-sm"}>
          {post.imgUrl && (
            <img
              src={`https://mern-blog-rho.vercel.app/${post.imgUrl}`}
              alt="img"
              className="object-cover w-full"
            />
          )}
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="text-xs text-black opacity-50">{post.username}</div>
          <div className="text-xs text-slate-600 font-gloock">
            <Moment date={post.createdAt} format="D MMM YYYY" />
          </div>
        </div>

        <p className="text-black text-xs pt-4 line-clamp-4 tracking-wider ">
          {post.text}
        </p>

        <div className="flex gap-3 items-center mt-2">
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
            <AiFillEye /> <span>{post.views}</span>
          </button>
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
            <AiOutlineMessage /> <span>{post.comments?.length || 0} </span>
          </button>
        </div>
      </div>
    </Link>
  );
};
