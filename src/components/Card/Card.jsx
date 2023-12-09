
const Card = () => {
  return (
    <div className="card card-compact bg-base-100 shadow">
      <figure>
        <img
          className="w-full"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="">
        <h2 className="card-title text-3xl">Shoes!</h2>
        <User />
        <p className="text-[#6C757D]">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

const User = () => {
  return(
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-500"></div>
      <p className="text-[#121416] text-lg font-bold">John Weak</p>
      <hr className="flex-grow" />
      <p className="text-[#6C757D]">June 28, 2018</p>
    </div>
  )
}
