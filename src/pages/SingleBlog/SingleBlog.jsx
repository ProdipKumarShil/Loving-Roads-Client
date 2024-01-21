import bg from "../../assets/header/bg3.jpg";
import Blog from "../../components/Blog/Blog";
import Comment from "../../components/Comment/Comment";
import YouAlsoLike from "../../components/YouAlsoLike/YouAlsoLike";
import clock from "../../assets/icons/clock.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const blog = useLoaderData()
  if(!blog && !blog?.img?.img){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  return (
    <div className="">
      <div className="mb-20 relative">
        <img className="w-full h-screen object-cover" src={blog.img.img} alt="" />
        <div className="absolute bottom-10 left-10 w-[1100px]">
          <p className="text-5xl font-bold custom-text-shadow text-white">{blog.title}</p>
          <div className="flex items-center gap-4 text-white text-sm mt-5">
            <p>by {blog.author.name}</p>
            <div className="w-10 border border-white"></div>
            <div className="flex items-center">
              <img src={clock} alt="" />
              <p>2 minute read</p>
            </div>
          </div>
        </div>
      </div>
      <Blog blog={blog} />
      <YouAlsoLike />
    </div>
  );
};

export default SingleBlog;
