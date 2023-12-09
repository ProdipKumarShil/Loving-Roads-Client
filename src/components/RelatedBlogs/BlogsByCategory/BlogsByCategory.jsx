import bg from "../../../assets/header/bg2.jpg";

const BlogsByCategory = () => {
  return (
    <div className="grid grid-cols-12">
      <Card />
    </div>
  );
};

export default BlogsByCategory;

const Card = () => {
  return (
    <div className="col-span-12 ">
      <img className="h-[300px] w-full object-cover mb-7" src={bg} alt="" />
      <div className="space-y-4">
        <p className="text-[#6E6E6E]">1 Month Ago </p>
        <p className="text-[#121416] text-xl font-bold">
          Tick one more destination off of your bucket list with one of our most
          popular vacations in 2022
        </p>
        <p className="text-[#6E6E6E]">
          lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed
          ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.
        </p>
        <button className="btn btn-primary">View Post</button>
      </div>
    </div>
  );
};
