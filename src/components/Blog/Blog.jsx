import pic from "../../assets/TopDestinations/p.jpg";
import pic2 from "../../assets/header/bg2.jpg";
import Comment from "../Comment/Comment";
import fb from "../../assets/icons/facebook.svg";
import tw from "../../assets/icons/twitter.svg";
import you from "../../assets/icons/youtube.svg";
import insta from "../../assets/icons/insta.svg";
import sideBg from "../../assets/temp/sideBlogBG.png";
import clock from "../../assets/icons/clock.svg"
import view from '../../assets/icons/view.svg'
import share from '../../assets/icons/share.svg'

const Blog = ({blog}) => {
  const {body, img} = blog
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto mb-40">
      {/* left column */}
      <div className="">
        <div className="text-center mb-10">
          <img className="block mx-auto" src={view} alt="" />
          <p>views <br /> 1.6K </p>
        </div>
        <div className="text-center">
          <img className="block mx-auto" src={share} alt="" />
          <p>share <br /> 1.6K </p>
        </div>
      </div>
      <div className="col-span-8 text-xl space-y-8">
        <p>{body[0]}</p>
        <p>{body[1]}</p>
        {/* <div className="grid grid-cols-2 ">
          <img className="w-full h-full object-cover" src={pic} alt="" />
          <img className="w-full h-full object-cover" src={pic2} alt="" />
        </div> */}
        <img className="w-full h-[450px] object-cover" src={img.img} alt="" />
        <p>{body[2]}</p>
        <p>{body[3]}</p>
        <p>{body[4]}</p>
        <Comment />
      </div>
      {/* rignt column */}
      <div className="col-span-3 px-8">
        <div className="mb-10">
          <h1 className="text-[#121416] font-semibold text-xl mb-6">
            Follow Us
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col items-center justify-center">
              <img src={fb} alt="" />
              <p>10</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={tw} alt="" />
              <p>10</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={insta} alt="" />
              <p>10</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={you} alt="" />
              <p>10</p>
            </div>
          </div>
        </div>
        <form className="mb-28" action="">
          <p className="mb-6">
            <span className="font-bold">Subscription</span> Subscribe to our
            newsletter and receive a selection of cool articles every weeks
          </p>
          <input
            className="border rounded-sm px-6 py-4 mb-3 border-slate-300 w-full"
            placeholder="Enter your email"
            type="text"
          />
          <button className="text-white px-6 py-4 mb-6 bg-[#121416] rounded-sm w-full">
            SUBSCRIBE
          </button>
          <div className="flex items-center ">
            <input
              className="mr-2"
              id="default-checkbox"
              type="checkbox"
              value=""
            />
            <label className="text-[#A9A9A9]" htmlFor="default-checkbox">
              By checking this box, you confirm that you have read and are
              agreeing to our terms.
            </label>
          </div>
        </form>
        <div className="">
          <h1 className="text-lg font-bold text-[#121416] mb-4">The Latest</h1>
          <SideBlog />
          <SideBlog />
          <SideBlog />
          <SideBlog />
          <SideBlog />
          <SideBlog />
        </div>
      </div>
    </div>
  );
};

export default Blog;

const SideBlog = () => {
  return (
    <div className="relative group mb-5 cursor-pointer">
      <img
        className="w-full h-[155px] filter brightness-75 duration-300 group-hover:brightness-50"
        src={sideBg}
        alt=""
      />
      <div className="absolute inset-0">
        <h1 className=" text-white p-4 ">
          10 Habits That Will Change Your Live for the Better If envy and
          jealousy are impacting your friendships
        </h1>
        <div className="flex text-sm items-center justify-between px-4 pb-4">
          <p className="text-white">03 Jan, 2024</p>
          <div className="flex items-center text-white">
              <img src={clock} alt="" />
              <p>2 minute read</p>
            </div>
        </div>
      </div>
    </div>
  );
};
