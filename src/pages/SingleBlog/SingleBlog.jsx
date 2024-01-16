import bg from "../../assets/header/bg3.jpg";
import Blog from "../../components/Blog/Blog";
import Comment from "../../components/Comment/Comment";
import YouAlsoLike from "../../components/YouAlsoLike/YouAlsoLike";
import clock from "../../assets/icons/clock.svg"

const SingleBlog = () => {
  return (
    <div className="">
      <div className="mb-20 relative">
        <img className="w-full h-screen object-cover" src={bg} alt="" />
        <div className="absolute bottom-10 left-10 w-[1100px]">
          <p className="text-5xl font-bold custom-text-shadow text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi magnam fuga?</p>
          <div className="flex items-center gap-4 text-white text-sm mt-5">
            <p>by Joanna Wellick</p>
            <div className="w-10 border border-white"></div>
            <div className="flex items-center">
              <img src={clock} alt="" />
              <p>2 minute read</p>
            </div>
          </div>
        </div>
      </div>
      <Blog />
      <YouAlsoLike />
    </div>
  );
};

export default SingleBlog;
