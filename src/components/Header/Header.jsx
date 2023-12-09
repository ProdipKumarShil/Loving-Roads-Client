import bg from '../../assets/header/bg.jpg'

const Header = () => {
  return (
    <div className='relative mb-40'>
      <img className=' w-full md:h-screen brightness-90' src={bg} alt="" />
      <div className="absolute top-1/2 w-full transform -translate-y-1/2 flex flex-col gap-5">
        <p className='text-center text-white text-6xl shadow-md '>Inspiration for travel by real people</p>
        <p className='text-center text-3xl text-white shadow-md'>Book smart, travel simple</p>
        <button className='btn btn-primary w-32 mx-auto'>Learn more</button>
      </div>
    </div>
  );
};

export default Header;