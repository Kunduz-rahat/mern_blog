import React from "react";
import { Link } from "react-router-dom";

export const PopularPosts = ({ post }) => {
  return (
    <div className="bg-gradient-to-r from-[#5271FF] to-[#05CCCB] md:my-1 mt-3 rounded-3xl ">
      <Link
        to={`${post._id}`}
        className="flex text-xs p-2  text-gray-300 hover:bg-gradient-to-r from-[#5271FF] to-[#3405cc] hover:text-white hover:rounded-full"
      >
        {post.title}
      </Link>
    </div>
  );
};
