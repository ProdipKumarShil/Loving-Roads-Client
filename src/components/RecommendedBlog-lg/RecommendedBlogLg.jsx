import blogBg from "../../assets/header/bg.jpg";

const RecommendedBlogLg = () => {
  return (
    <div className="flex border mb-3">
      <img className="w-[200px] h-[120px]" src={blogBg} alt="" />
      <div className="py-2 px-3">
        <p className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        </p>
        <p className="mt-2 text-[#666666]">24 Jun, 2022</p>
      </div>
    </div>
  );
};

export default RecommendedBlogLg;
