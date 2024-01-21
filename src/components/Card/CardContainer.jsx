import { useEffect, useState } from "react";
import Button from "../Button";
import Card from "./Card";
import axios from "axios";

const CardContainer = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios.get('https://loving-roads-server.vercel.app/blog/getBlogs')
      .then(res => setBlogs(res.data.blogs))
      .catch(e => console.log(e.message))
  }, [])
  return (
    <div className="max-w-7xl mx-auto mb-40 px-2">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs?.map(blog => <Card key={blog._id} blog={blog} />)}
      </div>
      <div className="flex">
        <Button className="mx-auto my-8 border" text="See More"/>
      </div>
    </div>
  );
};

export default CardContainer;
