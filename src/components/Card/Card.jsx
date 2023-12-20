import img from '../../assets/icons/img.svg'

const Card = () => {
  return (
    <div className="border group">
      <figure className="mb-6 relative">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1606419704159-ace37c2b177b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute inset-2 text-white hidden group-hover:block">
          <span className="mr-3 py-1 px-2 bg-slate-400 bg-opacity-70 rounded-md font-semibold text-sm">dddd</span>
          <span className=" py-1 px-2 bg-slate-400 bg-opacity-70 rounded-md font-semibold text-sm">dddd</span>
        </div>
        <img className='absolute top-2 right-2 bg-slate-400 p-1 bg-opacity-70 rounded-full hidden group-hover:block' src={img} alt="" />
      </figure>
      <div className="px-4">
        <p className="text-2xl font-bold mb-5">Integer Maecenas Eget Viverra</p>
        <User />
        <p className="text-[#6C757D] text-sm mb-4">
          Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor
          pretium donec dictum. Vici consequat justo enim. Venenatis eget
          adipiscing luctus lorem.
        </p>
        <button className="font-bold text-[#121416] underline mb-3">View More</button>
      </div>
    </div>
  );
};

export default Card;

const User = () => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-full bg-slate-500"></div>
      <div className="flex items-center md:gap-4 flex-col md:flex-row md:flex-grow">
        <p className="text-[#121416] text- font-bold">John Weak</p>
        <hr className="flex-grow  hidden md:block" />
        <p className="text-[#6C757D] text-sm">June 28, 2018</p>
      </div>
    </div>
  );
};
