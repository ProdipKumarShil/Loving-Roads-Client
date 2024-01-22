import { useEffect, useState } from "react";
import Button from "../Button";
import Card from "./Card";
import axios from "axios";
import useBlog from "../../hooks/useBlogs";

const CardContainer = () => {

  const {data, isLoading} = useBlog()

  if (!data && isLoading) {
    return(
      <span className="loading loading-spinner loading-lg"></span>
    )
  }
  return (
    <div className="max-w-7xl mx-auto mb-40 px-2">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data?.blogs?.map(blog => <Card key={blog._id} blog={blog} />)}
      </div>
      <div className="flex">
        <Button className="mx-auto my-8 border" text="See More"/>
      </div>
    </div>
  );
};

export default CardContainer;
