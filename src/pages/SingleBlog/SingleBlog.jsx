import bg from "../../assets/header/bg3.jpg";
import Blog from "../../components/Blog/Blog";
import YouAlsoLike from "../../components/YouAlsoLike/YouAlsoLike";

const SingleBlog = () => {
  return (
    <div className="">
      <div className="mb-20 relative">
        <img className="w-full h-screen object-cover" src={bg} alt="" />
        <div className="absolute bottom-10 left-10 w-[1100px]">
          <p className="text-5xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi magnam fuga?</p>
        </div>
      </div>
      <Blog />
      <YouAlsoLike />
    </div>
  );
};

export default SingleBlog;
